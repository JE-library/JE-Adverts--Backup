import { NavLink, useNavigate } from "react-router";
import K from "../constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  }
  return (
    <div className="bg-red-400 w-60 h-screen pt-10 pb-20 text-black">
      <span> LOGO</span>
      <div className="flex  flex-col mt-10">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink to={path} className= {({isActive}) =>`flex gap-x-2 items-center hover:bg-white hover:text-pink-800 p-3 rounded-md ${isActive ? "bg-white text-purple" : ""}` 
        }
          >
            <span>{icon}</span>
            <span>{text}</span>
          </NavLink>

        ))}
        
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
