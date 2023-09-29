import { FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateSecretary } from "../api/secretaryAPI";
import { useNavigate } from "react-router";

const SecretaryForm = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      name: "Tsembom",
      council: "Mbalmayo council",
      matricule_number: "1234456",
      email: "test@gmail.com",
      phone_number: "671274012",
      region: "Center",
      division: "Mbalmayo",
      sub_division: "Test",
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await CreateSecretary(data);
      toast.success("Secretary account created", { autoClose: 3000 });
      setTimeout(() => {
        navigate("/admin/secretary");
      }, 3000);
      methods.reset();
    } catch (error) {
      toast.error("An error occurred");
    }
  });

  return (
    <FormProvider {...methods}>
      <ToastContainer />

      <form onSubmit={(e) => e.preventDefault()} noValidate className="mb-5">
        <div className="grid grid-cols-2 gap-x-10">
          <FormInput
            label="Name"
            name="name"
            type="text"
            id="name"
            placeholder="Enter name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="Council"
            name="council"
            type="text"
            id="council"
            placeholder="Enter council..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="Matricule number"
            name="matricule_number"
            type="text"
            id="matricule_number"
            placeholder="Enter matricul number..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="Phone number"
            name="phone_number"
            type="text"
            id="phone_number"
            placeholder="Enter phone number..."
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
            label="region"
            name="region"
            type="text"
            id="region"
            placeholder="Enter region name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="division"
            name="division"
            type="text"
            id="division"
            placeholder="Enter division name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              mixLength: {
                value: 3,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="sub division"
            name="sub_division"
            type="text"
            id="sub_division"
            placeholder="Enter sub division name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              mixLength: {
                value: 3,
                message: "min 3 characters",
              },
            }}
          />

          {/* <FormInput
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
          /> */}
        </div>
        <button
          onClick={onSubmit}
          className="w-full p-3 font-medium border rounded-md border-slate-300 mt-4 bg-green cursor-pointer active:bg-dark-blue"
        >
          Create
        </button>
      </form>
    </FormProvider>
  );
};

export default SecretaryForm;
