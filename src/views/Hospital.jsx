import { FaChartBar } from "react-icons/fa";
import SimpleLineChart from "../components/SimpleLineChart";
import PieChartCustomizedLabel from "../components/PieChartCustomizedLabel.jsx";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TotalCard from "../components/TotalCard";
import DemographicCard from "../components/DemographicCard";
import List from "../components/List";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Hospital = () => {
  const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  return (
    <div id="hospital" className="flex bg-white-1">
      
      <div
        className={`flex-1 duration-300  ${isSidebarOpen ? "mx-56" : "mx-20"}`}
      >
        <Navbar />
        <div
          className={`px-5 py-3 gap-x-5 mt-16 ${
            isSidebarOpen ? "w-[calc(100vw-15rem)]" : " w-[calc(100vw-6rem)]"
          }`}
        >
        </div>
      </div>
    </div>
  );
};

export default Hospital;
