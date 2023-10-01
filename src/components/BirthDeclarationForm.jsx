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
            name="name_of_child"
            inputWidth="87%"
          />
          <div className="flex">
            <div className="flex-1">
              <BirthDeclarationInput
                type="date"
                label="Born on"
                inputWidth="79%"
                name="child_dob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
            <div className="flex-1">
              <BirthDeclarationInput
                type="text"
                label="At"
                inputWidth="89%"
                name="child_pob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
            <div className="flex-1">
              <BirthDeclarationInput
                type="text"
                label="Sex"
                inputWidth="89%"
                name="child_sex"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
          </div>
          <BirthDeclarationInput
            type="text"
            label="From"
            inputWidth="95%"
            name="father_name"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <div className="flex">
            <div className="flex-1">
              <BirthDeclarationInput
                type="text"
                label="Born at"
                inputWidth="86%"
                name="father_pob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
            <div className="flex-1">
              <BirthDeclarationInput
                type="date"
                label="On"
                inputWidth="93%"
                name="father_dob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
          </div>
          <BirthDeclarationInput
            type="text"
            label="Resident at"
            inputWidth="90%"
            name="father_resident_at"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <BirthDeclarationInput
            type="text"
            label="Occupation"
            inputWidth="89%"
            name="father_occupation"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <BirthDeclarationInput
            type="text"
            label="Reference document"
            inputWidth="82%"
            name="father_reference_document"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <BirthDeclarationInput
            type="text"
            label="And of"
            inputWidth="94%"
            name="mother_name"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <div className="flex">
            <div className="flex-1">
              <BirthDeclarationInput
                type="text"
                label="Born at"
                inputWidth="86%"
                name="mother_pob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
            <div className="flex-1">
              <BirthDeclarationInput
                type="date"
                label="On"
                inputWidth="93%"
                name="mother_dob"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
          </div>
          <BirthDeclarationInput
            type="text"
            label="Resident at"
            inputWidth="90%"
            name="mother_resident_at"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <BirthDeclarationInput
            type="text"
            label="Occupation"
            inputWidth="89%"
            name="mother_occupation"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <BirthDeclarationInput
            type="text"
            label="Reference document"
            inputWidth="82%"
            name="mother_reference_document"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <div className="flex">
            <div className="w-[70%]">
              <BirthDeclarationInput
                type="text"
                label="Mariage certificate of parents no"
                inputWidth="60%"
                name="marriage_certificate"
              />
            </div>
            <div className="flex-1">
              <BirthDeclarationInput
                type="date"
                label="Drawn up on"
                inputWidth="62%"
                name="marriage_certificate_drawn_up_date"
              />
            </div>
          </div>
          <BirthDeclarationInput
            type="text"
            label="At the civil registry"
            inputWidth="84%"
            name="marriage_certificate_civil_registry"
          />
          <div className="flex justify-end mt-3">
            <BirthDeclarationInput
              type="date"
              label="Mbalmayo on"
              inputWidth="55%"
              name="birth_declaration_date"
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
};

export default BirthDeclarationForm;
