import TotalCard from "../components/TotalCard";
import AdminSecretaryTable from "../tables/AdminSecretaryTable";
import SecretaryBirthCertificateTable from "../tables/SecretaryBirthCertificateTable";

const AdminSecretary = () => {
  return (
    <div>
      <div className="flex w-full gap-x-2 ">
        <TotalCard total="100" text="Total Secretary" />
      </div>
      <div>
        <AdminSecretaryTable />
      </div>
    </div>
  );
};

export default AdminSecretary;
