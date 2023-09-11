import { FormProvider } from "react-hook-form";
import { FormInput } from "../components/FormInput";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form className="grid place-content-center mt-[4rem]" onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <h1>Forgot password</h1>
        <FormInput
          label="email"
          name="email"
          type="text"
          id="email"
          placeholder="Enter your email"
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

        <button
          onClick={onSubmit}
          className="w-full p-3 font-medium border rounded-md border-slate-300 mt-4 bg-green cursor-pointer active:bg-dark-blue"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ForgotPassword;
