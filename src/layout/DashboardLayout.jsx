
import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"



const DashboardLayout = () => {
  return (
    <div className="flex gap-2.5">
      <Sidebar/>
      <div className="gap">
        <Outlet/></div>
      
      </div>
  );
};

export default DashboardLayout
