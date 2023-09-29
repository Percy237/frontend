import { Button } from "@mui/material";
import { useState } from "react";
import { useCallback, useEffect } from "react";
import { useMemo } from "react";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getAllCivilRegistrars } from "../api/civilRegistrarAPI";
import CircularIndeterminate from "../components/Progress";

const SectaryListOfCivilRegistrar = () => {
  const columns = useMemo(() => [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
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
  ]);

  const handleButtonClick = () => {
    alert("Updated");
  };

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
    setCivilRegistrars(await getAllCivilRegistrars());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      test();
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [records, setRecords] = useState(data);
  const [civilRegistrars, setCivilRegistrars] = useState([]);

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
      <Button
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </Button>
    );
  }, [records, selectedRows, toggleCleared]);

  return (
    <div className="mt-5">
      <div className="flex justify-end">
        <NavLink to="/create-civil-registrar-account">
          <div className="bg-green rounded-md flex justify-center items-center h-10 p-2 cursor-pointer shadow-xl hover:bg-dark-blue hover:text-white ">
            <FaPlus />
            <p>Create Civil Registrar </p>
          </div>
        </NavLink>
      </div>
      <DataTable
        title="All Civil Registrars"
        columns={columns}
        data={civilRegistrars}
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

export default SectaryListOfCivilRegistrar;
