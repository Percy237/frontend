import { FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";

const CreateDeathDeclaration = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <div className="mt-5 uppercase text-center text-2xl underline">
        Death Declaration Form
      </div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <div className="grid grid-cols-3 gap-x-5">
          <FormInput
            label="fullname of the deceased"
            name="fullname of the deceased"
            type="text"
            id="fullname of the deceased"
            placeholder="fullname of the deceased"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="born on"
            name="born on"
            type="date"
            id="born on"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <FormInput
            label="at"
            name="at"
            type="text"
            id="at"
            placeholder="at"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />
          <FormInput
            label="sex"
            name="sex"
            type="text"
            id="sex"
            placeholder="sex"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="cause of death"
            name="cause of death"
            type="text"
            id="cause of death"
            placeholder="cause of death"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />
          <FormInput
            label="marital status"
            name="marital status"
            type="text"
            id="marital status"
            placeholder="sex"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="occupation"
            name="occupation"
            type="text"
            id="occupation"
            placeholder="occupation"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="resident at"
            name="resident at"
            type="text"
            id="resident at"
            placeholder="resident at"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
              },
            }}
          />

          <FormInput
            label="Son/Daughter of"
            name="Son/Daughter of"
            type="text"
            id="Son/Daughter of"
            placeholder="Son/Daughter of"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="and of"
            name="and of"
            type="text"
            id="and of"
            placeholder="and of"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 1,
                message: "min 3 characters",
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

export default CreateDeathDeclaration;
