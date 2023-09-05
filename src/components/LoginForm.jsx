import { FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <FormInput
          label="email"
          name="email"
          type="text"
          id="email"
          placeholder="type your name..."
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
              message: "8-20 characters, 1 number, 1 letter, 1 symbol.",
            },
          }}
        />
        <button
          onClick={onSubmit}
          className="w-full p-3 font-medium border rounded-md border-slate-300 mt-4 bg-green cursor-pointer active:bg-dark-blue"
        >
          Sign in
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
