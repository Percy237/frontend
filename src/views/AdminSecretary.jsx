import TotalCard from "../components/TotalCard";
import SecretaryBirthCertificateTable from "../tables/SecretaryBirthCertificateTable";

const AdminSecretary = () => {
  return (
    <div>
      <div className="flex w-full gap-x-2 ">
        <TotalCard total="100" text="Total Secretary" />
      </div>
      <div>
        <SecretaryBirthCertificateTable/>
      </div>
    </div>
  );
};

export default AdminSecretary;
