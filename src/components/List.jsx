import ListCard from "./ListCard";
import Search from "./Search";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const List = () => {
  return (
    <div className="bg-white rounded-md shadow-md mt-4">
      <div className=" bg-white h-16 flex items-center">
        <div className="flex  basis-[83%] items-center justify-between p-5 border-r h-10 border-r-gray">
          <h1 className="font-bold text-md">All Declarations</h1>
          <Search />
        </div>
        <div className="flex-1 flex items-center bg-gray-1 gap-2 p-2 mx-4 ">
          <p className="text-[12px] text-gray-2">Sort by:</p>
          <p className="text-[12px]">Newest</p>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <div className="text-sm text-gray-2 flex  text-left p-3 border-b border-b-gray">
        <div className="w-1/3">ID</div>
        <div className="w-1/3">Name</div>
        <div className="w-1/3">Mobile Number</div>
        <div className="w-1/3">Type</div>
        <div className="w-1/3">Status</div>
      </div>
      <div className="p-5">
        <ListCard
          id="ID9832732"
          name="Tsembom"
          number="692201677"
          type="birth"
          status="sent"
        />
        <ListCard
          id="ID9832732"
          name="Tsembom"
          number="692201677"
          type="birth"
          status="sent"
        />
        <ListCard
          id="ID9832732"
          name="Tsembom"
          number="692201677"
          type="birth"
          status="sent"
        />
        <ListCard
          id="ID9832732"
          name="Tsembom"
          number="692201677"
          type="birth"
          status="sent"
        />
        <ListCard
          id="ID9832732"
          name="Tsembom"
          number="692201677"
          type="birth"
          status="sent"
        />
      </div>
    </div>
  );
};

export default List;
