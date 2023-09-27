import SecretarySidebar from "../components/SecretarySidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SecretaryLayout = () => {
  const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  return (
    <div id="hospital" className="flex bg-white-1">
      <SecretarySidebar />
      <div
        className={`flex-1 duration-300  ${isSidebarOpen ? "mx-56" : "mx-20"}`}
      >
        <Navbar />
        <div
          className={`px-5 py-3 gap-x-5 mt-16 ${
            isSidebarOpen ? "w-[calc(100vw-15rem)]" : " w-[calc(100vw-6rem)]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SecretaryLayout;
