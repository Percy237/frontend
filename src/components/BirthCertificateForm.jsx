import { FormProvider } from "react-hook-form";

import { useForm } from "react-hook-form";
import { BirthCertificateInput } from "./BirthCertificateInput";

const BirthCertificateForm = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate >
        <div className="flex flex-col gap-y-2">
          <BirthCertificateInput
            heading1="Nom de l'enfant"
            heading2="Surname of the child"
            headingWidth="17%"
            inputWidth="83%"
            type="text"
            name="surname of the child"
          />
          <BirthCertificateInput
            heading1="Prenoms de l'enfant"
            heading2="Given name of the child"
            headingWidth="19%"
            inputWidth="81%"
            name="given name of the child"
          />
          <BirthCertificateInput
            heading1="Ne le - Born on the"
            heading2=""
            headingWidth="16%"
            inputWidth="84%"
            name="born on the"
          />
          <BirthCertificateInput
            heading1="A - At"
            heading2=""
            headingWidth="5%"
            inputWidth="95%"
            name="at"
          />
          <BirthCertificateInput
            heading1="De - Of"
            heading2=""
            headingWidth="6%"
            inputWidth="94%"
            name="of"
          />
          <BirthCertificateInput
            heading1="Le - On the"
            heading2=""
            headingWidth="9%"
            inputWidth="91%"
            name="on the"
          />
          <BirthCertificateInput
            heading1="Domicile - Resident at"
            heading2=""
            headingWidth="18%"
            inputWidth="82%"
            name="resident at"
          />
          <BirthCertificateInput
            heading1="Profession - Occupation"
            heading2=""
            name="occupation"
          />
          <BirthCertificateInput
            heading1="Nationalite - Nationality"
            heading2=""
            name="nationality"
          />
          <BirthCertificateInput
            heading1="Document de Reference - Reference Document"
            heading2=""
            headingWidth="38%"
            inputWidth="64%"
            name="reference document"
          />
          <p className="text-sm">
            (Numero de la Carte Nationale de l'identite. Ou reference de l'acte
            de naissance, ou references du document prouvant la Nationale)
          </p>
          <p className="text-sm">
            (Nationality Identity Card Number, or reference of the Birth
            Certificate, or References of the Document attesting the
            nationality)
          </p>
          <BirthCertificateInput
            heading1="Et de - And of"
            heading2=""
            headingWidth="12%"
            inputWidth="88%"
            name="and of"
          />
          <BirthCertificateInput
            heading1="Nee a - Born at"
            heading2=""
            headingWidth="14%"
            inputWidth="84%"
            name="born at"
          />
          <BirthCertificateInput
            heading1="Le - On the"
            heading2=""
            headingWidth="9%"
            inputWidth="91%"
            name="on the"
          />
          <BirthCertificateInput
            heading1="Domicilee a - Resident at"
            heading2=""
            headingWidth="20%"
            inputWidth="80%"
            name="resident at"
          />
          <BirthCertificateInput
            heading1="Profession - Occupation"
            heading2=""
            name="occupation"
          />
          <BirthCertificateInput
            heading1="Nationalite - Nationality"
            heading2=""
            name="nationality"
          />
          <BirthCertificateInput
            heading1="Document de Reference - Reference Document"
            heading2=""
            headingWidth="38%"
            inputWidth="64%"
            name="reference document"
          />
          <p className="text-sm">
            (Numero de la Carte Nationale de l'identite. Ou reference de l'acte
            de naissance, ou references du document prouvant la Nationale)
          </p>
          <p className="text-sm">
            (Nationality Identity Card Number, or reference of the Birth
            Certificate, or References of the Document attesting the
            nationality)
          </p>
          <BirthCertificateInput
            heading1="Dresse le - Drawn up on the"
            heading2=""
            headingWidth="23%"
            inputWidth="77%"
            name="drawn up on the"
          />
          <BirthCertificateInput
            heading1="Sur la declaration de - In accordance with the declaration of"
            heading2=""
            headingWidth="75%"
            name="in accordance with the declaration of"
          />{" "}
          <div>
            <input
              className="border-b-2 border-dashed outline-none w-full"
              type="text"
            />
          </div>
          <p>
            Lesquels ont certifie la sincerite de la presente declaration,{" "}
            <br /> Who attested to the truth of this declaration
          </p>
          <BirthCertificateInput
            heading1="Par nous - By Us"
            heading2=""
            headingWidth="13%"
            inputWidth="87%"
            name="by us"
          />
          <p>Officier d'etat civil - Civil Status Registrar</p>
          <BirthCertificateInput
            heading1="Assiste de - In the presence of"
            heading2=""
            headingWidth="25%"
            inputWidth="75%"
            name="in the presence of"
          />
          <p>Secretaire d'etat civil- Secretary</p>
          <div className="grid place-content-center w-full">
            <BirthCertificateInput
              heading1="Le - On the"
              heading2=""
              headingWidth="40%"
              name="on the"
            />
          </div>
          <div className="flex justify-between mb-[50px]">
            <div className="text-center">
              <p>Le Secretaire d'etat civil</p>
              <p>Secretary</p>
            </div>
            <div className="text-center">
              <p>Signature de l'Officier d'etat civil</p>
              <p>Signature of Civil Status Registrar</p>
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

export default BirthCertificateForm;
