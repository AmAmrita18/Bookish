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
const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="h-full w-52">
      <Sidebar.Items className="bg-blue-extra-dark">
      <Sidebar.Logo href="#" img={userImg} imgAlt=" logo" className="w-14 pt-2 text-yellow gap-2 pl-3">
        BOOKISH
      </Sidebar.Logo>
        <Sidebar.ItemGroup className="p-3 mt-0 pt-0">
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup  className="border-t m-2 p-1 border-off-white" >
          <Sidebar.Item href="#" icon={HiChartPie} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className="flex gap-2 items-center justify-start text-off-white hover:text-yellow">
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
