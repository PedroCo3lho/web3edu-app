"use client";

import { MotionButton } from "../../ui/Button";
import Image from "next/image";
import Onboarding1 from "../../../assets/images/Onboarding1.jpg";

const teste = () => {
  console.log("oie");
};

export const ObWRContainer = () => {
  return (
    <div className="md:w-3/6 w-full h-full flex flex-col items-center justify-center p-10 gap-10">
      <progress
        className="progress progress-success w-56"
        value="20"
        max="100"
      ></progress>
      <p
        style={{
          backgroundImage: `url(${Onboarding1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="md:w-2/4 w-full md:h-full h-fit  flex items-center justify-center text-4xl font-bold shadow-2xl rounded-box"
      ></p>
      <div className="w-fit h-fit rounded-box bg-cgray flex font-semibold text-xl p-7">
        <p>Entre na carteira localizada no canto superior direito</p>
      </div>
      <MotionButton
        label="Proximo Passo"
        type="button"
        func={teste}
        className="bg-cgreen w-[24vh] text-lg font-semibold"
      />
    </div>
  );
};
