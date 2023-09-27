import TotalCard from "../components/TotalCard";
import SectaryListOfCivilRegistrar from "../tables/SectaryListOfCivilRegistrar";

const SecretaryCivilRegistrar = () => {
  return (
    <div>
      <div className="flex gap-2">
        <TotalCard text="Total Registrars" total="4" />
      </div>
      <div>
        <SectaryListOfCivilRegistrar />
      </div>
    </div>
  );
};

export default SecretaryCivilRegistrar;
