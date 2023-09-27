import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";

const AdminLayout = () => {
  const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  return (
    <div id="hospital" className="flex bg-white-1">
      <AdminSidebar />
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

export default AdminLayout;
