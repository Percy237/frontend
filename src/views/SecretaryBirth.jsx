import TotalCard from "../components/TotalCard";
import SecretaryBirthCertificateTable from "../tables/SecretaryBirthCertificateTable";

const SecretaryBirth = () => {
  return (
    <div>
      <div className="flex gap-2">
        <TotalCard text="Total Birth Certificates" total="100" />
      </div>
      <div>
        <SecretaryBirthCertificateTable />
      </div>
    </div>
  );
};

export default SecretaryBirth;
