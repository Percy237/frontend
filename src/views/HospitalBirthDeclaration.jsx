import TotalCard from "../components/TotalCard";
import HospitalDashboardtable from "../tables/HospitalDashboardtable";

const HospitalBirthDeclaration = () => {
  return (
    <div>
      <div className="flex w-full gap-x-2 ">
        <TotalCard total="100" text="Total Birth Declaration" />
      </div>
      <HospitalDashboardtable />
    </div>
  );
};

export default HospitalBirthDeclaration;
