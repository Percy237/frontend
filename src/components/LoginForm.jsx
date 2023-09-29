import { FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";
import { login } from "../api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/feature/user";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      email: "percy@gmail.com",
      password: "@Tsembompercy123",
    },
  });
  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      let response = await dispatch(userLogin(data)).unwrap();
      console.log(response.data.user.role);
      toast.success("Login successful", { autoClose: 3000 });
      setTimeout(() => {
        response.data.user.role
          ? navigate(`/${response.data.user.role}`)
          : toast.error("An error occurred");
      }, 3000);
      methods.reset();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  });
  return (
    <FormProvider {...methods}>
      <ToastContainer />
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
