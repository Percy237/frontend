import RegistrarForm from "../components/RegistrarForm";

const CreateCivilRegistrar = () => {
  return (
    <div className="mt-5 w-[60%] m-auto">
      <div className="grid place-content-center mt-5">
        <div className="text-center mb-5">
          <h1 className="font-bold mb-5">Create Civil Registrar Account</h1>
          <p>Use the form below to create an account</p>
        </div>
      </div>
      <div>
        <RegistrarForm />
      </div>
    </div>
  );
};

export default CreateCivilRegistrar;
