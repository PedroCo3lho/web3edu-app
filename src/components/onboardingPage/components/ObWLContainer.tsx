import web3EduLogo from "../../../assets/images/Web3EduBrasil_logo.png";
import Image from "next/image";

export const ObWLContainer = () => {
  return (
    <div className="md:w-3/6 w-full h-full bg-cgray flex p-10">
      <div className="w-full h-full flex flex-col gap-10 justify-center items-start">
        <Image alt="ss" src={web3EduLogo} className="w-28 h-auto" />
        <div className="font-semibold flex flex-col gap-8">
          <p className="text-5xl text-dblue">Carteira Web3</p>
          <p className="text-2xl">
            Nossa plataforma conta com uma carteira web3 integrada unica para
            cada usuario, permitindo que você explore e interaja com a web3 em
            poucos cliques.
          </p>
        </div>
      </div>
    </div>
  );
};
