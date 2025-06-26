import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50  bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo/Brand */}
      <h2 className="text-2xl font-bold text-pink-600 font-serif tracking-wide">
        <Link to="/">JE ADVERTS</Link>
      </h2>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link
          to="log-in"
          className="px-4 py-2 text-pink-700 font-medium border border-pink-300 rounded-full hover:bg-pink-100 transition duration-300"
        >
          Sign In
        </Link>
        <Link
          to="sign-up"
          className="px-4 py-2 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition duration-300 shadow-md"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
