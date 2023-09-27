import TotalCard from "../components/TotalCard";
import { NavLink, Outlet } from "react-router-dom";

const RegistrarBirth = () => {
  return (
    <div>
      <div className="flex gap-2">
        <TotalCard text="Total Birth Certificates" total="100" />
        <NavLink to=".">
          <div className="flex items-center gap-x-1 capitalize bg-white rounded-md w-[300px] shadow-md h-full justify-center cursor-pointer hover:bg-gray-3">
            View birth certificates
          </div>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RegistrarBirth;
