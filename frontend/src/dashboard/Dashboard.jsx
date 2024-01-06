import { TbChartInfographic } from "react-icons/tb";
import { FaMoneyCheckAlt, FaUserShield, FaClock } from "react-icons/fa";
import { RiUserShared2Fill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import graph1 from "../assets/dashboard-img/dashboard-graph.png";
import graph2 from "../assets/dashboard-img/dashboard-graph2.png";

const Dashboard = () => {
  return (
    <div className="  w-full min-h-screen md:px-8 px-2 lg:px-20 bg-yellow">
      <div className="container  mx-auto lg:mt-8 mt-2">
        <h1 className="lg:text-5xl md:text-4xl text-3xl md:py-0 pt-14 text-blue-extra-dark font-bold lg:mb-4  mb-1 flex items-center gap-1 justify-center">
          <TbChartInfographic />
          Overview
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 my-8">
          <div className="bg-blue-extra-dark lg:p-4 p-3 rounded-lg  ">
            <div className="flex justify-between">
              <div>
                <FaMoneyCheckAlt className="text-off-white w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-2xl text-lg text-off-white font-semibold">
                  Today&apos;s Money
                </h1>
                <h1 className="lg:text-lg text-base pb-2 text-yellow text-right">$27K</h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white">
              <h1 className="text-off-white pt-2 lg:text-base text-sm">
                <span className="text-yellow">+55%</span> than last week
              </h1>
            </div>
          </div>

          <div className="bg-blue-extra-dark lg:p-4 p-3 rounded-lg  ">
            <div className="flex justify-between">
              <div>
                <FaUserShield className="text-off-white w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-2xl text-lg text-off-white font-semibold">
                  Today&apos;s Users
                </h1>
                <h1 className="lg:text-lg text-base pb-2 text-yellow text-right">1,300</h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white">
              <h1 className="text-off-white pt-2 lg:text-base text-sm">
                <span className="text-yellow">+3%</span> than last month
              </h1>
            </div>
          </div>

          <div className="bg-blue-extra-dark lg:p-4 p-3 rounded-lg  ">
            <div className="flex justify-between">
              <div>
                <RiUserShared2Fill className="text-off-white w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-2xl text-lg text-off-white font-semibold">
                  New Clients
                </h1>
                <h1 className="lg:text-lg text-base pb-2 text-yellow text-right">462</h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white">
              <h1 className="text-off-white pt-2 lg:text-base text-sm">
                <span className="text-red">-2%</span> than yesterday
              </h1>
            </div>
          </div>

          <div className="bg-blue-extra-dark lg:p-4 p-3 rounded-lg  ">
            <div className="flex justify-between">
              <div>
                <VscGraph className="text-off-white w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-2xl text-lg text-off-white font-semibold">Sales</h1>
                <h1 className="lg:text-lg text-base pb-2 text-yellow text-right">$13,430</h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white">
              <h1 className="text-off-white pt-2 lg:text-base text-sm">
                <span className="text-yellow">+3%</span> than yesterday
              </h1>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div className=" bg-white rounded-lg brightness-90">
            <div className="flex justify-center">
              <img src={graph1} alt="" className=" py-4 " />
            </div>
            <div className="text-blue-extra-dark lg:px-16  md:px-2 px-10 pb-4 flex justify-between">
              <div>
                <h1 className="lg:text-lg text-base font-semibold text-blue-extra-dark">
                  Daily Sales
                </h1>
                <h1 className="lg:text-sm text-xs text-blue font-light">
                  15% increase in today sales
                </h1>
              </div>
              <div className="">
                <h1>
                  <span className="lg:text-sm text-xs py-1 text-off-white font-semibold bg-blue-extra-dark px-2 rounded-md">
                    Day
                  </span>{" "}
                  <span className="lg:text-sm text-xs py-1 text-blue-extra-dark font-semibold">
                    Week
                  </span>{" "}
                  <span className="lg:text-sm text-xs py-1 text-blue-extra-dark font-semibold ">
                    Month
                  </span>
                </h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white lg:px-16  md:px-2 px-10 py-2 mb-1">
              <h1 className="text-blue pt-2 lg:text-sm text-xs font-light flex items-center gap-1">
                <FaClock />
                updated 4 min ago
              </h1>
            </div>
          </div>

          <div className=" bg-white rounded-lg brightness-90">
            <div className="flex justify-center">
              <img src={graph2} alt="" className="py-4" />
            </div>
            <div className="text-blue-extra-dark lg:px-16 md:px-2 px-10 pb-4 flex justify-between">
              <div>
                <h1 className="lg:text-lg text-base font-semibold text-blue-extra-dark">
                  Website View
                </h1>
                <h1 className="lg:text-sm text-xs text-blue font-light">
                  Last Campaign Performance
                </h1>
              </div>
              <div className="">
                <h1>
                  <span className="lg:text-sm text-xs py-1 text-off-white font-semibold bg-blue-extra-dark px-2 rounded-md">
                    Day
                  </span>{" "}
                  <span className="lg:text-sm text-xs py-1 text-blue-extra-dark font-semibold ">
                    Week
                  </span>{" "}
                  <span className="lg:text-sm text-xs py-1 text-blue-extra-dark font-semibold  ">
                    Month
                  </span>
                </h1>
              </div>
            </div>
            <div className="border-t-2 border-t-off-white lg:px-16  md:px-2 px-10 py-2 mb-1">
              <h1 className="text-blue pt-2 lg:text-sm text-xs font-light flex items-center gap-1">
                <FaClock />
                campaign sent 2 days ago
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
