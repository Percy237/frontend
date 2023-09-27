import {
  MdArrowForwardIos,
  MdArrowBackIosNew,
  MdOutlineDashboard,
  MdOutlineFolderShared,
  MdLogout,
  MdOutlineSettings,
} from "react-icons/md";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiDeathStar } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sidebar";
import { NavLink } from "react-router-dom";

const SecretarySidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  const dispatch = useDispatch();
  return (
    <div
      id="sidebar"
      className={`fixed h-full duration-300 top-0 left-0 z-20 bg-green ${
        isSidebarOpen ? "w-56" : "w-20"
      }`}
    >
      <div className="relative">
        <div
          className="bg-white   w-7 h-7 border-2 border-gray rounded-full grid place-content-center absolute cursor-pointer -right-3 top-5"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isSidebarOpen ? (
            <MdArrowBackIosNew className="text-green font-bold" />
          ) : (
            <MdArrowForwardIos className="text-green font-bold" />
          )}
        </div>
        <h1 className="font-bold text-md text-white text-center">E-CRVS</h1>
        <div
          className={`px-5 mt-6 ${
            !isSidebarOpen &&
            "flex flex-col justify-center items-center display text-[30px] gap-2"
          } `}
        >
          <h3
            className={`text-dark-blue font-bold text-xs uppercase duration-300 ${
              !isSidebarOpen && "hidden"
            }`}
          >
            MAIN MENU
          </h3>
          <NavLink to=".">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <MdOutlineDashboard />
              <div className={`${!isSidebarOpen && "hidden"}`}>Dashboard</div>
            </div>
          </NavLink>
          <h3
            className={`text-dark-blue font-bold text-xs uppercase ${
              !isSidebarOpen && "hidden"
            }`}
          >
            Certificates
          </h3>
          <NavLink to="birth-certificate">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <LiaBirthdayCakeSolid />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>Birth</div>
            </div>
          </NavLink>
          <NavLink to="death">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <GiDeathStar />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>Death</div>
            </div>
          </NavLink>
          <h3
            className={`text-dark-blue font-bold text-xs uppercase ${
              !isSidebarOpen && "hidden"
            }`}
          >
            Declarations
          </h3>
          <NavLink to="">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <LiaBirthdayCakeSolid />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>Birth</div>
            </div>
          </NavLink>
          <NavLink to="death">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <GiDeathStar />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>Death</div>
            </div>
          </NavLink>
          <h3
            className={`text-dark-blue font-bold text-xs uppercase ${
              !isSidebarOpen && "hidden"
            }`}
          >
            Manage
          </h3>
          <NavLink to="hospital">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <LiaBirthdayCakeSolid />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>Hospital</div>
            </div>
          </NavLink>
          <NavLink to="civil-registrar">
            <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
              <GiDeathStar />{" "}
              <div className={`${!isSidebarOpen && "hidden"}`}>
                Civil Registrar
              </div>
            </div>
          </NavLink>
          <h3
            className={`text-dark-blue font-bold text-xs uppercase ${
              !isSidebarOpen && "hidden"
            }`}
          >
            General
          </h3>
          <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
            <MdOutlineFolderShared />{" "}
            <div className={`${!isSidebarOpen && "hidden"}`}>
              Files & Folders
            </div>
          </div>
          <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
            <MdOutlineSettings />{" "}
            <div className={`${!isSidebarOpen && "hidden"}`}>Setting</div>
          </div>
          <div className="capitalize hover:bg-dark-blue hover:text-white p-1 cursor-pointer flex  items-center gap-1">
            <MdLogout />
            <div className={`${!isSidebarOpen && "hidden"}`}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretarySidebar;
