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

import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="bg-blue-extra-dark min-h-screen py-4"
    >
      <Sidebar.Items>
        <Sidebar.Logo href="/">
          <div className="flex gap-3 absolute left-5 top-7  ">
            <img
              src={user?.photoURL}
              className="rounded-full w-[24px] h-[24px]"
              alt=" "
            />
            <p className="text-yellow text-semibold">
              {user?.displayName || <p className="text-yellow text-semibold">User</p>}
            </p>
          </div>
        </Sidebar.Logo>
        <Sidebar.ItemGroup className="text-off-white">
          <Sidebar.Item className="hover:text-yellow" href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
          className="hover:text-yellow"
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item className="hover:text-yellow" href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item className="hover:text-yellow" href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item className="hover:text-yellow" href="#" icon={HiShoppingBag}>
            Wishlist
          </Sidebar.Item>

          <Sidebar.Item className="hover:text-yellow" href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="text-off-white ">
          <Sidebar.Item className="hover:text-yellow" href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item className="hover:text-yellow" href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item className="hover:text-yellow" href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
