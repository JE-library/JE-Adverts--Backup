import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      usernameOrEmail: data.usernameOrEmail,
      role: data.role,
      password: data.password,
    };

    setIsSubmitting(true);

    try {
      const res = await apiLogin(payload);
      localStorage.setItem("accessToken", res.data.data.token);
      toast.success(res.data.message);

      if (data.role === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/user-home");
      }
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
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6 font-serif">
          Welcome Back
        </h2>

        {/* Username or Email */}
        <div className="mb-4">
          <label
            htmlFor="usernameOrEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Username or Email
          </label>
          <input
            id="usernameOrEmail"
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter username or email"
            {...register("usernameOrEmail", {
              required: "Username or email is required",
            })}
          />
          {errors.usernameOrEmail && (
            <p className="text-sm text-red-500 mt-1">
              {errors.usernameOrEmail.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Login as
          </label>
          <select
            id="role"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
          {errors.role && (
            <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
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
            placeholder="Enter your password"
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
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>

        {/* Sign Up Redirect */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-pink-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
