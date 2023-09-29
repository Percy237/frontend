import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getAllHospitals } from "../api/hospitalApi";
import CircularIndeterminate from "../components/Progress";

const SecretaryListOfHospitals = () => {
  const data = [
    {
      id: "ID983732",
      name: "Hopital Chinois",
      type: "District",
    },
    {
      id: "ID983767",
      name: "Nkwen Hospital",
      type: "Public",
    },
    {
      id: "ID1843732",
      name: "Baptist Hospital",
      type: "private",
    },
  ];

  const [pending, setPending] = useState(true);

  const test = async () => {
    setHospitalList(await getAllHospitals());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      test();
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const columns = useMemo(() => [
    {
      name: "id",
      selector: (row) => row._id,
      sortable: true,
      omit: true,
    },
    {
      name: "Name Of Hospital",
      selector: (row) => row.hospital_name,
      sortable: true,
    },
    {
      name: "Head Of Hospital",
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Email",
      selector: (row) => row.user.email,
      sortable: true,
    },
  ]);

  //Loading data
  // console.log(getAllHospitals());

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [records, setRecords] = useState(data);
  const [hospitalList, setHospitalList] = useState([]);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectableRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setRecords(differenceBy(records, selectedRows, "title"));
      }
    };

    return (
      <button
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </button>
    );
  }, [records, selectedRows, toggleCleared]);

  return (
    <div className="mt-5">
      <div className="flex justify-end">
        <NavLink to="/create-hospital-account">
          <div className="bg-green rounded-md flex justify-center items-center h-10 p-2 cursor-pointer shadow-xl hover:bg-dark-blue hover:text-white ">
            <FaPlus />
            <p>Create Hospital</p>
          </div>
        </NavLink>
      </div>
      <DataTable
        title="All Hospitals"
        columns={columns}
        data={hospitalList}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
        progressPending={pending}
        progressComponent={<CircularIndeterminate />}
      />
    </div>
  );
};

export default SecretaryListOfHospitals;
