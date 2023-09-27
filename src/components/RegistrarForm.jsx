import { FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";

const RegistrarForm = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <div className="grid grid-cols-2 gap-x-10">
          <FormInput
            label="Registrar Name"
            name="registrar name"
            type="text"
            id="name"
            placeholder="Enter registrar name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              maxLength: {
                value: 3,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="matricule number"
            name="matricule number"
            type="text"
            id="matricule number"
            placeholder="Enter matricule number..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="mobile number"
            name="mobile number"
            type="text"
            id="mobile number"
            placeholder="Enter mobile number..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^6(5|7|8|9)[0-9]{7}$/,
                message: "Enter a cameroonian number",
              },
            }}
          />

          <FormInput
            label="email"
            name="email"
            type="text"
            id="email"
            placeholder="Enter email..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value:
                  /^([a-zA-Z0-9._%-]+@(gmail|yahoo|outlook)\.(com|org|net))$/,
                message: "Please enter a valid email",
              },
            }}
          />

          <FormInput
            label="password"
            name="password"
            type="password"
            id="password"
            placeholder="type your password..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                message: "8 char, 1 number, 1 letter, 1 symbol.",
              },
            }}
          />
        </div>
        <div className="text-center">
          <button
            onClick={onSubmit}
            className="w-1/3  p-3 font-medium border rounded-md border-slate-300 mt-4 bg-green cursor-pointer active:bg-dark-blue"
          >
            Create
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegistrarForm;
