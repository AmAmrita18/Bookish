import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import userImg from "../assets/people/people2.png"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with content separator example" >
      <Sidebar.Items>
      <Sidebar.Logo href="/">
        <div className="flex gap-3 absolute left-5 ">
          <img src={user?.photoURL} className="rounded-full w-[24px] h-[24px]" alt=" " />
          <p className="text-blue-extra-dark">
            {
              user?.displayName || <p className="text-blue-extra-dark">User</p>
            }
          </p>
        </div>
      </Sidebar.Logo>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} >
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} >
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} >
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} >
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup  >
          <Sidebar.Item href="#" icon={HiChartPie} >
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} >
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} >
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
