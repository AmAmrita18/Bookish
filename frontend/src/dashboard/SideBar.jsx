import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { FaBars, FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiBuoy } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";

import {
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const {logout} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();


  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
      logout().then(() => {
          
          alert('Sign-out successfully!');
          navigate(from, { replace: true });

      }).catch((error) => {
          //an error happened
      })
  }
  return (
    <>
      {/* Hamburger icon for small and medium devices */}
      <div className="block z-50 w-full fixed  md:hidden bg-blue-extra-dark">
        <button onClick={toggleSidebar} className="text-off-white p-4">
        {showSidebar ? (
                <RxCross2 className="h-5 w-5 text-off-white hover:text-yellow" />
              ) : (
                <FaBars className="w-5 text-off-white hover:text-yellow" />
              )}
        </button>
      </div>

      {/* Sidebar for large devices */}
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`fixed md:relative mt-10 lg:pr-6 md:mt-0 bg-blue-extra-dark min-h-screen py-4 ${showSidebar ? "md:block" : "hidden md:block"}`}
      >
        <Sidebar.Items>
          <Sidebar.Logo>
            <div className="flex items-center ">
              <Link to="/">
              <img
                src={user?.photoURL || "/book.png"}
                className="rounded-full absolute left-5 w-[24px] h-[24px]"
                alt=" "
              />
              <p className="text-yellow pl-5 text-semibold">
                {user?.displayName || "Bookish"}
              </p></Link>
            </div>
          </Sidebar.Logo>
          <Sidebar.ItemGroup className="text-off-white">
            <Sidebar.Item className="hover:text-yellow" icon={HiChartPie}>
             <Link to="/admin/dashboard"> Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item
              className="hover:text-yellow"
              icon={IoCloudUpload}
            >
               <Link to="/admin/dashboard/upload"> Upload Books</Link>
              
            </Sidebar.Item>
            <Sidebar.Item className="hover:text-yellow" icon={HiInbox}>
              <Link to="/admin/dashboard/manage">Manage Books</Link>
              
            </Sidebar.Item>
            <Sidebar.Item className="hover:text-yellow"  icon={HiUser}>
              <Link to="#">Users</Link>
              
            </Sidebar.Item>
            <Sidebar.Item className="hover:text-yellow" icon={FaHome}>
              <Link to="/">Home</Link>
              
            </Sidebar.Item>

            <Sidebar.Item className="hover:text-yellow" onClick={() => handleLogout()} icon={HiTable}>
              <Link to=""> Logout</Link>
             
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="text-off-white ">
            <Sidebar.Item className="hover:text-yellow" icon={HiChartPie}>
              <Link to="#">Upgrade to Pro</Link>
              
            </Sidebar.Item>
            <Sidebar.Item className="hover:text-yellow" icon={HiViewBoards}>
              <Link to="#">Documentation</Link>
              
            </Sidebar.Item>
            <Sidebar.Item className="hover:text-yellow" icon={BiBuoy}>
              <Link to="#">Help</Link>
            
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SideBar;
