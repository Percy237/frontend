import { useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";

const HospitalDashboardtable = () => {
  const columns = useMemo(() => [
    {
      cell: () => <button className="border border-green rounded-md hover:bg-dark-blue hover:text-white p-2" onClick={handleButtonClick}>Send</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Mobile number",
      selector: (row) => row.mobileNumber,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ]);

  const data = [
    {
      id: "ID983732",
      name: "Tsembom",
      mobileNumber: "692201677",
      type: "Birth",
      status: "Sent",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      mobileNumber: "682201678",
      type: "Death",
      status: "Sent",
    },
    {
      id: "ID1843732",
      name: "Linkwe",
      mobileNumber: "678201607",
      type: "Birth",
      status: "Not sent",
    },
    {
      id: "ID9876832",
      name: "Joyce",
      mobileNumber: "692201677",
      type: "Death",
      status: "Sent",
    },
    {
      id: "ID9835877",
      name: "Tsague",
      mobileNumber: "692728320",
      type: "Birth",
      status: "Not Sent",
    },
    {
      id: "ID983732",
      name: "Tsembom",
      mobileNumber: "692201677",
      type: "Birth",
      status: "Sent",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      mobileNumber: "682201678",
      type: "Death",
      status: "Sent",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      mobileNumber: "682201678",
      type: "Death",
      status: "Sent",
    },
    {
      id: "ID1843732",
      name: "Linkwe",
      mobileNumber: "678201607",
      type: "Birth",
      status: "Not sent",
    },
    {
      id: "ID9876832",
      name: "Joyce",
      mobileNumber: "692201677",
      type: "Death",
      status: "Sent",
    },
    {
      id: "ID9835877",
      name: "Tsague",
      mobileNumber: "692728320",
      type: "Birth",
      status: "Not Sent",
    },
    {
      id: "ID983732",
      name: "Tsembom",
      mobileNumber: "692201677",
      type: "Birth",
      status: "Sent",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      mobileNumber: "682201678",
      type: "Death",
      status: "Sent",
    },
  ];

  const [records, setRecords] = useState(data);

  const handleFilter = (event) => {
    const newData = data.filter(
      (row) =>
        row.name &&
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  const handleButtonClick = () => {
    alert("Sent");
  };

  return (
    <div className="mt-5">
      <div className=" h-12 flex justify-between items-center">
        <p>All Declarations</p>
        <div className="flex">
          <div className="flex gap-x-2 justify-center cursor-pointer rounded-md items-center bg-green w-20 h-25">
            <NavLink
              to="/create-birth-declaration"
              className="flex items-center"
            >
              <FaPlus />
              New
            </NavLink>
          </div>

          <div className="ml-5 bg-gray-1 flex justify-center items-center rounded-md p-1 h-10 gap-2 border border-gray">
            <MdOutlineSearch className="text-gray-2 text-xl" />
            <input
              type="text"
              placeholder="Search...."
              className="bg-gray-1 outline-0"
              onChange={handleFilter}
            />
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={records} pagination />
    </div>
  );
};

export default HospitalDashboardtable;
