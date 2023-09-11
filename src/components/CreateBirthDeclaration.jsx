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
      <div className="mt-5 uppercase text-center text-2xl underline">Birth Declaration Form</div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <div className="grid grid-cols-3 gap-x-5">
          <FormInput
            label="fullname"
            name="fullname"
            type="text"
            id="fullname"
            placeholder="Child's Fullname"
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
            label="born at"
            name="born at"
            type="text"
            id="born at"
            placeholder="born at"
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
            label="nationality"
            name="nationality"
            type="text"
            id="nationality"
            placeholder="Enter nationality"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="reference document"
            name="reference document"
            type="text"
            id="reference document"
            placeholder="Enter reference document"
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
            label="from"
            name="from"
            type="text"
            id="from"
            placeholder="from"
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
            label="born at"
            name="born at"
            type="text"
            id="born at"
            placeholder="born at"
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
            label="nationality"
            name="nationality"
            type="text"
            id="nationality"
            placeholder="Enter nationality"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="reference document"
            name="reference document"
            type="text"
            id="reference document"
            placeholder="Enter reference document"
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
            label="mariage Certificate of parents no."
            name="mariage Certificate of parents no."
            type="text"
            id="mariage Certificate of parents no."
            placeholder="mariage Certificate of parents no."
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <FormInput
            label="drawn up on"
            name="drawn up on"
            type="date"
            id="drawn up on"
            validation={{
              required: {
                value: true,
                message: "required",
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
