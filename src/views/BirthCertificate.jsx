import BirthCertificateForm from "../components/BirthCertificateForm";
import { BirthCertificateInput } from "../components/BirthCertificateInput";

const BirthCertificate = () => {
  return (
    <div>
      <div className="w-9/12 border m-auto p-5">
        <div className="text-center">
          <p>REPUBLIQUE DU CAMEROUN</p>
          <small>Paix-Travail-Patrie</small>
          <p>REPUBLIC OF CAMEROON</p>
          <small>Peace-Work-Fatherland</small>
        </div>
        <div>
          <div className="flex items-center h-10 justify-between border-b-2 border-dashed">
            <p className="font-semibold">REGION</p>
            <p>REGION</p>
          </div>
          <div className="flex items-center h-10 justify-between border-b-2 border-dashed">
            <p className="font-semibold">DEPARTMENT</p>
            <p>DIVISION</p>
          </div>
          <div className="flex items-center h-10 justify-between border-b-2 border-dashed">
            <p className="font-semibold">ARRONDISSEMENT</p>
            <p>SUBDIVISION</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-center mt-2">
            <span className="font-semibold">CENTRE D'ETAT CIVIL </span>/{" "}
            <span>CIVIL STATUS REGISTRATION CENTER</span>
          </p>
      
          <div>
            <p>Centre d'etat civil de rattachement (pour les secondaires)</p>
            <p>
              Main Civil Status Registry of Attachement (for secondary civil
              status registry)
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl">
              <span className="font-semibold">ACTE DE NAISSANCE /</span>
              <span>BIRTH CERTIFICATE</span>
            </p>
          </div>
          <div className="text-center">
            <span>N: </span>/
            <span className="border-b-2 border-dashed">1212</span>/
            <span className="border-b-2 border-dashed">123343</span>/
            <span className="border-b-2 border-dashed">9</span>/
            <span className="border-b-2 border-dashed">12klk</span>/
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <BirthCertificateForm />
        </div>
      </div>
    </div>
  );
};

export default BirthCertificate;
