import HospitalForm from "../components/HospitalForm";

const CreateHospitalAccount = () => {
  return (
    <div className="flex w-screen h-screen relative">
      <div className="flex-1 bg-green"></div>
      <div className="flex-1"></div>
      <div className="absolute flex w-[90vw] h-[90vh] top-[5%] left-[5%] border rounded-md shadow-md shadow-black">
        <div className="flex-1 relative bg-cover bg-no-repeat bg-[url('../src/assets/images/kids-holding-their-certificates.jpg')] rounded-md">
          <div className="absolute bg-green w-full h-full opacity-30"></div>
        </div>
        <div className="flex-1 grid place-content-center">
          <div className="text-center mb-5">
            <h1 className="font-bold mb-5">Create Hospital Account</h1>
            <p>Use the form below to create an account</p>
          </div>
          <HospitalForm />
        </div>
      </div>
    </div>
  );
};

export default CreateHospitalAccount;
