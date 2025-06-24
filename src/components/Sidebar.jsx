import { NavLink, useNavigate } from "react-router";
import K from "../constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  }
  return (
    <div className="bg-black w-60 h-screen pt-10 pb-20 text-white">
      <span> LOGO</span>

      <div className="flex  flex-col mt-10">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink to={path} className= {({isActive}) =>`flex gap-x-2 items-center hover:bg-amber-400 hover:text-black p-3 rounded-md ${isActive ? "bg-red-300 text-purple" : ""}` 
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
