import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SectaryListOfCivilRegistrar = () => {
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
      name: "Type",
      selector: (row) => row.type,
    },
  ]);

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

    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [records, setRecords] = useState(data);

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
        <NavLink to="/create-civil-registrar-account">
          <div className="bg-green rounded-md flex justify-center items-center h-10 p-2 cursor-pointer shadow-xl hover:bg-dark-blue hover:text-white ">
            <FaPlus />
            <p>Create Civil Registrar </p>
          </div>
        </NavLink>
      </div>
      <DataTable
        title="All Hospitals"
        columns={columns}
        data={data}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </div>
  );
};

export default SectaryListOfCivilRegistrar;
