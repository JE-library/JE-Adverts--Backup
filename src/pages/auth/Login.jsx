import react from "react";

const Login = () => {
  return (

    <div className="grid grid-cols-[1fr 1fr]">
      <div>{/* <img src={picture1Img} alt="" /> */}</div>
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <div>
          <h4 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Let's get you logged in!
          </h4>
          <h3>New here?</h3>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="eg: Vanessa McCalister"
            required
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-gray-700 mb-1"
          >
            e-mail
          </label>
          <br />
          <input
            type="text"
            className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="eg: explorer@gmail.com"
            required
          />
        </div>
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
            className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="w-[150px] bg-gray-600 text-white mt-[30px] ml-[420px] p-[10px] justify-center rounded-[15px] hover:bg-emerald-500 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

  
 

export default Login;


