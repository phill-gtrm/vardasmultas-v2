import React from "react";

export const ProcessOverview: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-32 py-20 max-w-full w-[1440px] max-md:px-5">
      <div className="gap-20 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-14 items-center w-full max-md:max-w-full">
          <div className="flex-1 shrink gap-6 self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
            <p className="text-lg font-bold leading-none text-lime-500 uppercase tracking-[2.16px] max-md:max-w-full">
              Como funciona?
            </p>

            <div className="gap-6 mt-6 w-full max-md:max-w-full">
              <h2 className="text-5xl font-bold tracking-tighter leading-10 text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Ajudamos vocÃª a decidir o prÃ³ximo passo{" "}
                <span style={{ color: "rgba(152,194,36,1)" }}>
                  com seguranÃ§a
                </span>
                .
              </h2>

              <p className="mt-6 text-base text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Arcu convallis dolor
                elit aliquam arcu imperdiet nisl. Bravida malesuada lacus
                tristique tellus lectus lorem est. Mattis maecenas ipsum
                ultrices.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center self-stretch my-auto min-w-60 max-md:max-w-full">
            <div className="overflow-hidden self-stretch px-8 pt-10 my-auto shadow-sm min-w-60 rounded-[32px] w-[550px] max-md:px-5 max-md:max-w-full">
              <img
                src="../../assets/images/png/checklist-_vdm 1@2x.png"
                alt="Process illustration"
                className="object-contain w-full aspect-[0.93] max-md:max-w-full"
              />
            </div>

            <div className="flex self-stretch my-auto w-12 max-md:hidden">
              <div className="flex shrink-0 w-6 rounded-none h-[509px] max-md:hidden" />
              <div className="flex shrink-0 my-auto w-6 rounded-none h-[462px] max-md:hidden" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex-1 shrink basis-0 min-w-60">
            <div className="w-full">
              <div className="flex shrink-0 h-0.5 rounded-sm bg-zinc-700" />
            </div>

            <div className="mt-10 w-full font-bold">
              <div className="w-full">
                <p className="text-lg leading-none uppercase text-zinc-500 tracking-[2.16px]">
                  01.
                </p>
                <h3 className="mt-1 text-3xl tracking-tight leading-none text-white">
                  VocÃª envia sua multa ou notificaÃ§Ã£o
                </h3>
              </div>
            </div>
          </div>

          <div className="flex-1 shrink basis-0 min-w-60">
            <div className="w-full">
              <div className="flex flex-col items-start rounded-sm bg-zinc-700 max-md:pr-5">
                <div className="flex shrink-0 max-w-full h-0.5 bg-lime-500 w-[254px]" />
              </div>
            </div>

            <div className="mt-10 w-full">
              <div className="w-full font-bold">
                <p className="text-lg leading-none uppercase text-zinc-500 tracking-[2.16px]">
                  02.
                </p>
                <h3 className="mt-1 text-3xl tracking-tight leading-none text-white">
                  Nossa cabine tÃ©cnica analisa o lance
                </h3>
              </div>

              <p className="mt-2.5 text-base text-zinc-500">
                Ã‰ nesta etapa que ocorre a verificaÃ§Ã£o dos mais de 35 requisitos
                legais para identificar falhas tÃ©cnicas.
              </p>
            </div>
          </div>

          <div className="flex-1 shrink basis-0 min-w-60">
            <div className="w-full">
              <div className="flex shrink-0 h-0.5 rounded-sm bg-zinc-700" />
            </div>

            <div className="mt-10 w-full font-bold">
              <div className="w-full">
                <p className="text-lg leading-none uppercase text-zinc-500 tracking-[2.16px]">
                  03.
                </p>
                <h3 className="mt-1 text-3xl tracking-tight leading-8 text-white">
                  Entramos em campo e cuidamos de todas as defesas e prazos
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
