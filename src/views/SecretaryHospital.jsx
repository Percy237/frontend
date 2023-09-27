import TotalCard from "../components/TotalCard";

import SecretaryListOfHospitals from "../tables/SecretaryListOfHospitals";

const SecretaryHospital = () => {
  return (
    <div>
      <div className="flex gap-2">
        <TotalCard text="Total Hospitals" total="20" />
        
      </div>
      <div>
        <SecretaryListOfHospitals />
      </div>
    </div>
  );
};

export default SecretaryHospital;
