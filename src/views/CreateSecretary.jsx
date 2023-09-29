import SectaryForm from "../components/SectaryForm";

const CreateSecretary = () => {
  return (
    <div className="w-1/2 grid m-auto">
      <div className="grid place-content-center mt-5">
        <div className="text-center mb-5">
          <h1 className="font-bold mb-5">Secretary Account</h1>
          <p>Use the form below to create an account</p>
        </div>
      </div>
      <SectaryForm />
    </div>
  );
};

export default CreateSecretary;
