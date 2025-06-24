// import Footer from "../../components/Footer";
// import NavBar from "../../components/Navbar";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { apiSignup } from "../../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      username: data.username,
      role: data.role,
      email: data.email,
      password: data.password,
    };
    // console.log(payload)
    setIsSubmitting(true);

    try {
      const res = await apiSignup(payload);
      console.log(res);
      toast.success("User Registered Successfully!");
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "An Error Occured.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-amber-200 p-8 rounded-lg shadow-lg w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
          {...register("username", { required: "Username is required" })}
        />
        {errors?.username && (
          <span className="text-red-400">{errors?.username?.message}</span>
        )}
      </div>

      <div>
        <h4 className="block text-gray-700 mb-2">Sign Up As</h4>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="role"
          {...register("role", { required: "Role is required" })}
        >
          <option value="">Select one</option>
          <option value="user">User</option>
          <option value="vendor">Vendor</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors?.email && (
          <span className="text-red-400">{errors?.email?.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors?.password && (
          <span className="text-red-400">{errors?.password?.message}</span>
        )}
      </div>

      {/* <div className="mb-6">
        <label className="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          {...register("password", {required: "Password is required"})}
          required
        />
      </div> */}

      <button
        type="submit"
        disabled={isError}
        className={`${
          isError
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-400 hover:bg-blue-700"
        } w-full text-white py-2 rounded transition`}
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUp;
