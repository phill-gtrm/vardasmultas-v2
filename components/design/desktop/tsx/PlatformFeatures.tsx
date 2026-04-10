import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  align?: "left" | "right";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  align = "left",
}) => {
  return (
    <div
      className={`gap-3 max-w-[282px] w-[282px] ${align === "right" ? "flex flex-col" : ""}`}
    >
      <div
        className={`flex items-start w-[45px] ${align === "right" ? "self-end" : ""}`}
      >
        <div className="flex justify-center items-center w-[45px]">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto rounded border border-white border-solid aspect-[1/1] bg-neutral-100 h-[45px] min-h-[45px] w-[45px]">
            <div className="flex justify-center items-center w-full min-h-10">
              <img
                src="../../assets/icons/svg/Eye-icon-1.svg"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      <h3
        className={`mt-3 text-3xl font-bold tracking-tight leading-none text-neutral-100 ${align === "right" ? "text-right" : ""}`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 text-base text-zinc-500 ${align === "right" ? "text-right" : ""}`}
      >
        {description}
      </p>
    </div>
  );
};

export const PlatformFeatures: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 justify-center px-32 pt-20 pb-0 max-w-full w-[1440px] max-md:px-5">
      <div className="flex flex-col gap-6 self-center max-w-full font-bold text-center w-[588px]">
        <p className="self-center text-lg leading-none text-lime-500 uppercase tracking-[2.16px]">
          TECNOLOGIA E RIGOR LEGAL
        </p>

        <h2 className="mt-6 text-5xl tracking-tighter leading-10 text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Sistema que audita processos e identifica falhas na sua infraÃ§Ã£o.
        </h2>
      </div>

      <div className="flex flex-col pb-20 mt-8 w-full max-md:max-w-full">
        <div className="max-w-full w-[282px]">
          <FeatureCard
            title="Monitoramento de Dados"
            description="Sistema conectado aos Ã³rgÃ£os de trÃ¢nsito para rastreio em tempo real."
          />

          <div className="mt-40 max-md:mt-10">
            <FeatureCard
              title="Auditoria de 35 Requisitos"
              description="VerificaÃ§Ã£o eletrÃ´nica de mais de 35 critÃ©rios legais na notificaÃ§Ã£o."
            />
          </div>
        </div>

        <div className="flex z-10 flex-col gap-8 justify-self-center items-center self-center mt-0 max-w-full col-[2_/_span_1] row-[1_/_span_1] w-[588px] max-md:mt-0">
          <div className="px-4 pt-9 w-full">
            <img
              src="../../assets/images/png/mockup-celular 1@2x.png"
              alt="Platform mockup"
              className="object-contain w-full aspect-[1.14] max-md:max-w-full"
            />
          </div>
        </div>

        <div className="flex z-10 flex-col items-end self-end mt-0 max-w-full w-[282px] max-md:mt-0">
          <FeatureCard
            title="EstratÃ©gia Processual"
            description="DefiniÃ§Ã£o da tese de defesa baseada em vÃ­cios formais e jurisprudÃªncia."
            align="right"
          />

          <div className="mt-40 max-md:mt-10">
            <FeatureCard
              title="GestÃ£o Transparente"
              description="Painel digital para vocÃª visualizar cada movimentaÃ§Ã£o do seu processo."
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
