import react from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
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
      usernameOrEmail: data.usernameOrEmail,
      role: data.role,
      password: data.password,
    };
    // console.log(payload)
    setIsSubmitting(true);

    try {
      const res = await apiLogin(payload);
      console.log(res);
      localStorage.setItem("accessToken", res.data.data.token);
      toast.success(res.data.message);

      if (data.role =="vendor"){
        navigate("/dashboard");
      } else{
        navigate("/user-home");
      }

    } catch (error) {
      console.log(error);
      toast.error(error?.message || "An Error Occured.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;
  return (
    <div className="grid grid-cols-[1fr 1fr]">
      <div>{/* <img src={picture1Img} alt="" /> */}</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <div>
          <h4 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Let's get you logged in!
          </h4>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-gray-700 mb-1"
          >
            Username or Email
          </label>
          <br />
          <input
            type="text"
            id="usernameOrEmail"
            className="w-[300px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="Enter Username or Email"
            {...register("usernameOrEmail", { required: "Username or email is required" })}
          />
          {errors?.usernameOrEmail && (
          <span className="text-red-400">{errors?.usernameOrEmail?.message}</span>
        )}
        </div>

        <div>
          <h4 className="block text-[20px] font-medium text-gray-700 mb-1">
            Login as:{" "}
          </h4>
          <select
            className="w-[300px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            id="role"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select one</option>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        {/* <div>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-gray-700 mb-1"
          >
            e-mail
          </label>
          <br />
          <input
            type="text"
            className="w-[300px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="eg: explorer@gmail.com"
            required
          />
        </div> */}
        <div>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="w-[300px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
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
        <button
        type="submit"
        disabled={isError}
        className={`${
          isError
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-400 hover:bg-emerald-500"
        } w-[150px] text-white mt-[30px] mr-[200px] p-[10px] justify-center rounded-[15px] transition duration-200`}
      >
        {isSubmitting ? "Submitting..." : "Log In"}
      </button>
        {/* <button className="w-[150px] bg-gray-600 text-white mt-[30px] mr-[200px] p-[10px] justify-center rounded-[15px] hover:bg-emerald-500 transition duration-200">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Login;