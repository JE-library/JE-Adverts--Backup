
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

      <div className="flex flex-col flex-1">
        
        
        <main className="p-4 bg-gray-100 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

