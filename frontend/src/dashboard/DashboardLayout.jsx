import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"


const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-yellow">
      
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout