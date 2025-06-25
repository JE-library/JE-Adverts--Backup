import { Link } from "react-router";
import SignUp from "../pages/auth/Signup";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="./">
          <strong>JE ADVERTS</strong>
        </Link>
      </h2>
      <button className="sign-in">
        <Link to="log-in">Sign-in</Link>
      </button>
      <button className="sign-up">
        <Link to="sign-up">Sign-Up</Link>
      </button>
    </nav>
  );
};

export default NavBar;
