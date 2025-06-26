import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { apiSignup } from "../../services/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      username: data.username,
      role: data.role,
      email: data.email,
      password: data.password,
    };

    setIsSubmitting(true);

    try {
      await apiSignup(payload);
      toast.success("User Registered Successfully!");
      navigate("/log-in");
    } catch (error) {
      toast.error(error?.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-pink-200 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6 font-serif">
          Create Account
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Your username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Sign Up As
          </label>
          <select
            id="role"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select one</option>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
          {errors.role && (
            <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="At least 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || isError}
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            isSubmitting || isError
              ? "bg-pink-200 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/log-in" className="text-pink-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
