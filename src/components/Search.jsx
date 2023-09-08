import { MdOutlineSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="bg-gray-1 flex justify-center items-center rounded-md p-1 h-10 gap-2 border border-gray">
      <MdOutlineSearch className="text-gray-2 text-xl" />
      <input
        type="text"
        placeholder="Search...."
        className="bg-gray-1 outline-0"
      />
    </div>
  );
};

export default Search;
