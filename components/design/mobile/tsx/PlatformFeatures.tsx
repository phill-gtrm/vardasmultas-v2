import React from "react";

export function PlatformFeatures() {
  const features = [
    {
      title: "Monitoramento de Dados",
      description:
        "Sistema conectado aos Ã³rgÃ£os de trÃ¢nsito para rastreio em tempo real.",
    },
    {
      title: "Auditoria de 35 Requisitos",
      description:
        "VerificaÃ§Ã£o eletrÃ´nica de mais de 35 critÃ©rios legais na notificaÃ§Ã£o.",
    },
    {
      title: "EstratÃ©gia Processual",
      description:
        "DefiniÃ§Ã£o da tese de defesa baseada em vÃ­cios formais e jurisprudÃªncia.",
    },
    {
      title: "GestÃ£o Transparente",
      description:
        "Painel digital para vocÃª visualizar cada movimentaÃ§Ã£o do seu processo.",
    },
  ];

  return (
    <section className="flex flex-col gap-14 justify-center self-center px-6 pt-6 pb-0 w-full max-md:px-5">
      <div className="flex flex-col gap-6 w-full font-bold text-center">
        <p className="self-center text-lg leading-none text-lime-500 uppercase tracking-[2.16px]">
          TECNOLOGIA E RIGOR LEGAL
        </p>
        <h2 className="mt-6 text-5xl tracking-tighter leading-10 text-white max-md:text-4xl max-md:leading-10">
          Sistema que audita processos e identifica falhas na sua infraÃ§Ã£o.
        </h2>
      </div>
      <div className="pb-80 mt-14 w-full max-md:pb-24 max-md:mt-10">
        <div className="flex flex-col gap-8 justify-self-center items-center mr-8 ml-8 col-[1_/_span_1] row-[1_/_span_1] max-md:mx-2.5">
          {features.slice(0, 2).map((feature, index) => (
            <article
              key={index}
              className="flex flex-col gap-3 max-w-[282px] w-[282px]"
            >
              <div className="flex items-start self-center w-[45px]">
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
              <h3 className="mt-3 text-3xl font-bold tracking-tight leading-none text-center text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-center text-zinc-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
        <div className="overflow-hidden gap-8 justify-self-start mt-96 col-[1_/_span_1] row-[3_/_span_1] max-md:mt-10">
          <div className="pt-5 w-full">
            <img
              src="../../assets/images/png/mockup-celular 1@2x.png"
              alt="Mobile app mockup"
              className="object-contain w-full aspect-[1.2]"
            />
          </div>
        </div>
        <div className="flex z-10 flex-col gap-8 justify-self-center items-center mt-0 mr-8 mb-0 ml-8 col-[1_/_span_1] row-[2_/_span_1] max-md:mx-2.5 max-md:mt-0 max-md:mb-2.5">
          {features.slice(2, 4).map((feature, index) => (
            <article
              key={index + 2}
              className="flex flex-col gap-3 max-w-[282px] w-[282px]"
            >
              <div className="flex items-start self-center w-[45px]">
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
              <h3 className="mt-3 text-3xl font-bold tracking-tight leading-none text-center text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-center text-zinc-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
