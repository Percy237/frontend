import { FaChartBar } from "react-icons/fa";
import SimpleLineChart from "../components/SimpleLineChart";
import PieChartCustomizedLabel from "../components/PieChartCustomizedLabel.jsx";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TotalCard from "../components/TotalCard";
import DemographicCard from "../components/DemographicCard";
import List from "../components/List";
import { useSelector } from "react-redux";

const Hospital = () => {
  const {isSidebarOpen} = useSelector(state => state.Sidebar)
  return (
    <div className="flex bg-white-1">
      <Sidebar />
      <div
        className={`flex-1 duration-300  ${isSidebarOpen ? "mx-56" : "mx-20"}`}
      >
        <Navbar />
        <div
          className={`px-5 py-3 gap-x-5 mt-16 ${
            isSidebarOpen ? "w-[calc(100vw-15rem)]" : " w-[calc(100vw-6rem)]"
          }`}
        >
          <div className="flex gap-2">
            <TotalCard text="Total Declarations" total="200" />
            <TotalCard text="Total Birth Declarations" total="100" />
            <TotalCard text="Total Death Declarations" total="100" />
          </div>
          <div className="flex mt-4 gap-2">
            <DemographicCard
              type="Birth"
              pieChart={<PieChartCustomizedLabel />}
            />
            <DemographicCard
              type="Death"
              pieChart={<PieChartCustomizedLabel />}
            />
          </div>
          <div className="h-70 w-full mt-4 bg-white shadow-md font-bold rounded-md">
            <div className="h-10 border-b border-b-gray-1 flex justify-between items-center px-3">
              <div className="flex gap-2 items-center">
                <div className="bg-dark-blue w-7 h-7 rounded-full grid place-content-center">
                  <FaChartBar className="text-green font-bold" />
                </div>
                <h1 className="capitalize">Declaration summary</h1>
              </div>
              <div className="capitalize flex gap-x-3 text-gray-3">
                <div className="cursor-pointer p-1  hover:bg-gray-3 hover:text-dark-blue hover:font-bold rounded-md">
                  Today
                </div>
                <div className="cursor-pointer p-1  hover:bg-gray-3 hover:text-dark-blue hover:font-bold rounded-md">
                  This week
                </div>
                <div className="cursor-pointer p-1  hover:bg-gray-3 hover:text-dark-blue hover:font-bold rounded-md">
                  This month
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" basis-3/4 h-full border-r p-3 border-r-gray-1">
                <SimpleLineChart />
              </div>
              <div className="bg-gray-4 flex-1 h-full m-2 rounded-md">
                <div className="px-2">
                  <h2 className="text-black-1 text-[25px] font-bold">150</h2>
                  <small className="text-black-1">Total Declarations</small>
                </div>
                <div className="px-2">
                  <h2 className="text-black-1 text-[25px] font-bold">115</h2>
                  <small className="text-black-1">Birth Declarations</small>
                </div>
                <div className="px-2">
                  <h2 className="text-black- text-[25px] font-bold">35</h2>
                  <small className="text-black-1">Death Declarations</small>
                </div>
              </div>
            </div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Hospital;
