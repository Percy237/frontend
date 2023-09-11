import { FaChartBar } from "react-icons/fa";

import TotalCard from "../components/TotalCard";
import DemographicCard from "../components/DemographicCard";
import PieChartCustomizedLabel from "../components/PieChartCustomizedLabel.jsx";
import SimpleLineChart from "../components/SimpleLineChart";
import List from "../components/List";

const HospitalDashboard = () => {
  return (
    <div>
      <di className="flex gap-2">
        <TotalCard text="Total Declarations" total="200" />
        <TotalCard text="Total Birth Declarations" total="100" />
        <TotalCard text="Total Death Declarations" total="100" />
      </di>
      <div className="flex mt-4 gap-2">
        <DemographicCard type="Birth" pieChart={<PieChartCustomizedLabel />} />
        <DemographicCard type="Death" pieChart={<PieChartCustomizedLabel />} />
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
  );
};

export default HospitalDashboard;
