import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { BirthDeclarationInput } from "./BirthDeclarationInput";

const BirthDeclarationForm = () => {
      const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
        <div className="flex flex-col gap-y-2">
            <BirthDeclarationInput
              type="text"
              label="Child Fullname"
              name="child_name"
              inputWidth="87%"
              isRequired={false}
            />
            <div className="flex">
              <div className="flex-1">
                <BirthDeclarationInput
                  type="date"
                  label="Born on"
                  inputWidth="79%"
                />
              </div>
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="At"
                  inputWidth="89%"
                />
              </div>
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="Sex"
                  inputWidth="89%"
                />
              </div>
            </div>
            <BirthDeclarationInput type="text" label="From" inputWidth="95%" />
            <div className="flex">
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="Born at"
                  inputWidth="86%"
                />
              </div>
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="On"
                  inputWidth="93%"
                />
              </div>
            </div>
            <BirthDeclarationInput
              type="text"
              label="Resident at"
              inputWidth="90%"
            />
            <BirthDeclarationInput
              type="text"
              label="Occupation"
              inputWidth="89%"
            />
            <BirthDeclarationInput
              type="text"
              label="Reference document"
              inputWidth="82%"
            />
            <BirthDeclarationInput
              type="text"
              label="And of"
              inputWidth="94%"
            />
            <div className="flex">
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="Born at"
                  inputWidth="86%"
                />
              </div>
              <div className="flex-1">
                <BirthDeclarationInput
                  type="text"
                  label="On"
                  inputWidth="93%"
                />
              </div>
            </div>
            <BirthDeclarationInput
              type="text"
              label="Resident at"
              inputWidth="90%"
            />
            <BirthDeclarationInput
              type="text"
              label="Occupation"
              inputWidth="89%"
            />
            <BirthDeclarationInput
              type="text"
              label="Reference document"
              inputWidth="82%"
            />
            <div className="flex">
              <div className="w-[70%]">
                <BirthDeclarationInput
                  type="text"
                  label="Mariage certificate of parents no"
                  inputWidth="60%"
                />
              </div>
              <div className="flex-1">
                <BirthDeclarationInput
                  type="date"
                  label="Drawn up on"
                  inputWidth="62%"
                />
              </div>
            </div>
            <BirthDeclarationInput
              type="text"
              label="At the civil registry"
              inputWidth="84%"
            />
            <div className="flex justify-end mt-3">
              <BirthDeclarationInput
                type="date"
                label="Mbalmayo on"
                inputWidth="55%"
              />
            </div>
            <p className=" mb-[50px] w-[95%] m-auto">The Declarant,</p>
            <div className="flex justify-between mb-[50px] w-[95%] m-auto">
              <div className="text-center">
                <p>Le Secretaire d'etat civil</p>
              </div>
              <div className="text-center">
                <p>The Mayor</p>
              </div>
            </div>
          </div>

          <button
            onClick={onSubmit}
            className=" fixed right-2 top-1/2 w-20 p-3 font-medium border rounded-md border-slate-300 mt-4 bg-green cursor-pointer active:bg-dark-blue"
          >
            Create
          </button>

      </form>
    </FormProvider>
  );
}

export default BirthDeclarationForm