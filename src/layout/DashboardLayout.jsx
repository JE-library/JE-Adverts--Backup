import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // retrieve token from local storage
    const token = localStorage.getItem("accessToken");

    // if there is no token, take them to login
    if (!token) {
      navigate("/log-in")
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="bg-pink-50 w-full ml-60 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
