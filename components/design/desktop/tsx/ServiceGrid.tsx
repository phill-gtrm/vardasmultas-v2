import React from "react";
import { ServiceCard } from "./ServiceCard";

export const ServiceGrid: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col gap-20 items-center p-32 max-w-full w-[1440px] max-md:px-5 max-md:py-24">
      <div className="flex flex-col gap-6 items-start max-w-full text-center w-[792px]">
        <h2 className="text-5xl font-bold tracking-tighter leading-none text-white max-md:max-w-full max-md:text-4xl">
          Nem toda decisÃ£o de campo Ã© correta
          <span style={{ color: "rgba(152,194,36,1)" }}>.</span>
        </h2>

        <p className="mt-6 text-base text-zinc-500 max-md:max-w-full">
          Nossa tecnologia investiga vÃ­cios formais e erros de procedimento do
          agente de trÃ¢nsito. Entendemos o cenÃ¡rio, identificamos falhas no
          processo e lutamos para salvar a sua habilitaÃ§Ã£o.
        </p>
      </div>

      <div className="mt-20 max-w-[1200px] w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          <ServiceCard
            title="Lei Seca"
            description="Lorem ipsum dolor sit amet consectetur. Vulputate enim mollis tempus non commodo massa ut. Tristique a id orci non tellus dignissim egestas pulvinar. Mi id in venenatis congue ac orci semper enim massa viverra ut."
            className="h-[255px] min-h-[255px]"
          />

          <ServiceCard
            title="CNH PermissionÃ¡ria"
            description="Lorem ipsum dolor sit amet consectetur. Quam ut scelerisque auctor tempor nunc leo arcu. Commodo at ultrices a vitae elit. In sed vulputate eleifend enim viverra habitant nulla enim. Enim facilisis ullamcorper sit."
            className="h-[255px] min-h-[255px]"
          />
        </div>

        <div className="flex flex-wrap gap-8 mt-8 w-full max-md:max-w-full">
          <ServiceCard
            title="Multas Autossuspensivas"
            description="Excesso de velocidade ou manobras perigosas? Auditamos a homologaÃ§Ã£o do radar e a validade tÃ©cnica do auto para anular a penalidade."
            showButton={false}
          />

          <ServiceCard
            title="Excesso de Pontos"
            description="O placar estourou? Analisamos todo o seu histÃ³rico de infraÃ§Ãµes dos Ãºltimos 12 meses para encontrar falhas processuais, derrubar multas antigas e recuperar seu direito de dirigir."
            showButton={false}
          />
        </div>
      </div>
    </section>
  );
};
