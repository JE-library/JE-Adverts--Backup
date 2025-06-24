import { Link } from "react-router";
import SignUp from "../pages/auth/Signup";

const NavBar = () => {
  return (
    <nav className="flex justify-between align-center py-5 bg-black text-white">
      <span>
        <strong>JE ADVERTS</strong>
      </span>
      <ul className="flex space-x-5">
        <li>
          {" "}
          <Link to="./">Home</Link>
        </li>
        <li>Ads</li>
      </ul>

      <button>
        <Link to="sign-up" className="bg-gray-700 py-4 px-10 rounded-2xl">
          {" "}
          SignUp
        </Link>
      </button>
      {/* <button>
        <Link to="sign-up" className="bg-gray-600 py-4 px-10 rounded-2xl">
          {" "}
          Get Started
          <select
          className="  py border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          id=""
        >
          <option value=""></option>
          <option value=""><b>USER</b></option>
          <option value="">VENDOR</option>
        </select>
        </Link> */}
        {/* <select
          className="  py border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          id=""
        >
          <option value=""></option>
          <option value=""><b>USER</b></option>
          <option value="">VENDOR</option>
        </select> */}
      {/* </button> */}
    </nav>
  );
};

export default NavBar;
