import { NavLink, useNavigate } from "react-router";
import K from "../constants";
import { Link } from "react-router";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  };

  return (
    <aside className="bg-white border-r border-pink-100 w-60 h-screen pt-8 pb-6 px-4 flex flex-col fixed left-0 top-0 z-20 shadow-md">
      {/* Logo */}
      <div className="text-center text-2xl font-extrabold text-pink-600 mb-10 tracking-tight">
        <Link to="/" className="text-xl font-bold min-w-28">
          JE- Adverts
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-y-2 flex-1">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink
            key={text}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-x-3 px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                isActive
                  ? "bg-pink-100 text-pink-700 font-semibold"
                  : "text-gray-700 hover:bg-pink-50"
              }`
            }
            end
          >
            <span className="text-lg">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="cursor-pointer w-full mt-8 py-2 rounded-md bg-rose-500 text-white hover:bg-rose-600 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
