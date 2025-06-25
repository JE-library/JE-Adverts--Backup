import { NavLink, useNavigate } from "react-router";
import K from "../constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  };
  return (
    <div className="bg-black w-60 h-screen pt-10 pb-20 text-white flex flex-col items-center fixed">
      <span> LOGO</span>

      <div className="flex flex-col mt-10  gap-y-4 w-full">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              `flex gap-x-2 items-center hover:bg-red-400 hover:text-black p-3 rounded-md ${
                isActive ? "bg-red-300 text-purple" : ""
              }`
            }
            end
          >
            <span>{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <button onClick={handleLogout} className="mt-auto">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
