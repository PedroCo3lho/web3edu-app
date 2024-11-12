"use client";

import { FaCheck } from "react-icons/fa";

export const Above = () => {
  const LearnTopics = [
    {
      description:
        "Adquirir a base sólida teórica e prática para ser um desenvolvedor Java de sucesso",
    },
    {
      description: "Dominar Programação Orientada a Objetos e linguagem Java",
    },
    {
      description:
        "Compreender diagramas de classe UML, tanto de entidades quanto de serviços",
    },
    {
      description: "Construir web services usando Spring Boot e boas práticas",
    },
    {
      description: "Acessar banco de dados NoSQL ",
    },
    {
      description: "Criar soluções flexíveis, extensíveis e testáveis",
    },
    {
      description:
        "Aplicar o conhecimento de orientação a objetos na construção de soluções para problemas reais",
    },
    {
      description: "Desenvolver aplicações para desktop com interface gráfica",
    },
    {
      description:
        "Acessar banco de dados relacionais com comandos SQL (JDBC) e também com ORM (JPA/Hibernate)",
    },
  ];
  return (
    <div className="w-full md:h-full flex items-center justify-center gap-10 md:px-5">
      <div className="w-full h-full flex justify-center items-start text-sm rounded-box">
        <div className="text-neutral flex flex-col gap-3 w-full">
          <p className="font-bold text-neutral text-2xl">
            O que você aprenderá
          </p>
          <div className="gap-2 flex flex-col w-full h-full justify-start items-start">
            <>
              {LearnTopics.map((e) => {
                return (
                  <div className="flex gap-3 items-center w-full">
                    <FaCheck className="md:h-5 min-w-6 h-auto" />
                    <p className="w-fit">{e.description}</p>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
