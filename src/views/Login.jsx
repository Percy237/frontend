import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div id="login" className="flex w-screen h-screen relative">
      <div className="flex-1 bg-green"></div>
      <div className="flex-1"></div>
      <div className="absolute flex w-[90vw] h-[90vh] top-[5%] left-[5%] border rounded-md shadow-md shadow-black">
        <div className="flex-1 relative bg-cover bg-no-repeat bg-[url('../src/assets/images/kids-holding-their-certificates.jpg')] rounded-md">
          <div className="absolute bg-green w-full h-full opacity-30"></div>
        </div>
        <div className="flex-1 grid place-content-center">
          <div className="text-center mb-5">
            <h1 className="font-bold mb-5">SIGN IN</h1>
            <p>Sign in by entering the information below</p>
          </div>
          <LoginForm />
          <NavLink to="forgotpassword">
            <p className="text-center mt-2 cursor-pointer text-dark-blue underline">
              Forgot password?
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
