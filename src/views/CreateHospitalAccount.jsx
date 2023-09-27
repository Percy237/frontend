import HospitalForm from "../components/HospitalForm";

const CreateHospitalAccount = () => {
  return (
    <div className="w-1/2 grid m-auto">
      <div className="grid place-content-center mt-5">
        <div className="text-center mb-5">
          <h1 className="font-bold mb-5">Create Hospital Account</h1>
          <p>Use the form below to create an account</p>
        </div>
      </div>
      <HospitalForm />
    </div>
  );
};

export default CreateHospitalAccount;
