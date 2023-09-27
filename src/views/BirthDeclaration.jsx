import BirthDeclarationForm from "../components/BirthDeclarationForm";
import { BirthDeclarationInput } from "../components/BirthDeclarationInput";

const BirthDeclaration = () => {
  return (
    <div className="w-[80%] m-auto border mt-5 mb-5 p-3">
      <div className="flex">
        <div className="flex-1 flex flex-col  items-center text-center gap-y-1 ">
          <p>MINISTRE DE DECENTRALISATION ET DU DEVELOPMENT LOCAL</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
          <p>CENTER REGION</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
          <p>NYONG & SO'O DEPARTMENT</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
          <p>MBALMAYO COUNCIL</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
          <p>CIVIL REGISTER SERVICE</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
          <p>BP: 193 MBALMAYO</p>
          <p className="border-b-2 border-dashed w-1/3"></p>
        </div>
        <div className="flex-1 bg-red">
          <img
            className=" w-full"
            src="../src/assets/images/cameroon_logo.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p>REPUBLIQUE DU CAMEROON</p>
          <p>Paix-Travail-Patrie</p>
        </div>
      </div>
      <br></br>
      <p className="text-center font-bold text-2xl">BIRTH DECLARATION</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum ab
        nulla ullam modi accusantium, deleniti provident, officia magni cumque
        culpa voluptates quaerat veniam laudantium, ipsam nisi minima
        perferendis? Dignissimos ab quibusdam magnam molestiae voluptatum omnis.
        Sit, minus. Tempora rerum omnis aspernatur provident. Reprehenderit
        veritatis non in, necessitatibus magni quaerat!
      </p>
      <br></br>
<BirthDeclarationForm/>
    </div>
  );
};

export default BirthDeclaration;
