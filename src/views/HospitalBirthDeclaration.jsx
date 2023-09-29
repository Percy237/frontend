import TotalCard from "../components/TotalCard";
import HospitalBirthDeclarationTable from "../tables/HospitalBirthDeclarationTable";
import HospitalDashboardtable from "../tables/HospitalDashboardtable";

const HospitalBirthDeclaration = () => {
  return (
    <div>
      <div className="flex w-full gap-x-2 ">
        <TotalCard total="100" text="Total Birth Declaration" />
      </div>
      <HospitalBirthDeclarationTable />
    </div>
  );
};

export default HospitalBirthDeclaration;
