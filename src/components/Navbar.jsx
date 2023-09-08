import { useSelector } from "react-redux";
import Search from "./Search";

const Navbar = () => {
  const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  return (
    <header
      className={`${
        isSidebarOpen ? "w-[calc(100vw-15rem)]" : " w-[calc(100vw-6rem)]"
      } fixed top-0 bg-white h-16 border border-gray z-10 flex items-center`}
    >
      <div className="flex  basis-3/4 items-center justify-between p-5 border-r h-10 border-r-gray">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <Search />
      </div>
      <div className="flex-1 flex items-center gap-2 p-4 ">
        <img
          className="h-11 w-11 rounded-full object-cover"
          src="../src/assets/images/profil-photo.jpg"
          alt="profile-photo"
        />
        <h3>Hopital central</h3>
      </div>
    </header>
  );
};

export default Navbar;
