import { useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";

const SecretaryBirthCertificateTable = () => {
  const columns = useMemo(() => [
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
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      cell: () => (
        <button
          className="border border-green rounded-md hover:bg-dark-blue hover:text-white p-2"
          onClick={handleButtonClick}
        >
          Update
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: () => (
        <button
          className="border border-green rounded-md hover:bg-dark-blue hover:text-white p-2"
          onClick={handleButtonClick}
        >
          Print
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]);

  const data = [
    {
      id: "ID983732",
      name: "Tsembom",
      date: "9/27/2023",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      date: "9/27/2023",
    },
    {
      id: "ID1843732",
      name: "Linkwe",
      date: "9/27/2023",
    },
    {
      id: "ID9876832",
      name: "Joyce",
      date: "9/27/2023",
    },
    {
      id: "ID9835877",
      name: "Tsague",
      date: "9/27/2023",
    },
    {
      id: "ID983732",
      name: "Tsembom",
      date: "9/27/2023",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      date: "9/27/2023",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      date: "9/27/2023",
    },
    {
      id: "ID1843732",
      name: "Linkwe",
      date: "9/27/2023",
    },
    {
      id: "ID9876832",
      name: "Joyce",
      date: "9/27/2023",
    },
    {
      id: "ID9835877",
      name: "Tsague",
      date: "9/27/2023",
    },
    {
      id: "ID983732",
      name: "Tsembom",
      date: "9/27/2023",
    },
    {
      id: "ID983767",
      name: "Takwendo",
      date: "9/27/2023",
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
    <div className="mt-5 bg-white rounded-md">
      <div className=" h-12 flex justify-between items-center">
        <p>All Birth Certificates</p>
        <div className="flex">
          <div className="flex gap-x-2 justify-center cursor-pointer rounded-md items-center bg-green w-20 h-25">
            <NavLink
              to="/create-birth-certificate"
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

export default SecretaryBirthCertificateTable;
