import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HospitalDeathDeclaration = () => {
  return (
    <div>
      <div className="flex w-full gap-x-2 ">
        <NavLink to=".">
          <div className="flex items-center gap-x-1 capitalize bg-white rounded-md w-[300px] shadow-md h-20 justify-center cursor-pointer hover:bg-gray-3">
            View death declarations
          </div>
        </NavLink>
        <NavLink to="create">
          <div className="flex items-center gap-x-1 capitalize bg-white w-[300px] rounded-md shadow-md h-20 justify-center cursor-pointer hover:bg-gray-3">
            <FaPlus className="text-green text-xl" />
            Create death Declaration
          </div>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HospitalDeathDeclaration;
