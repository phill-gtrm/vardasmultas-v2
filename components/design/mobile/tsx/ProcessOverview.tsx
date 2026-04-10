import React from "react";

export function ProcessOverview() {
  return (
    <section className="flex overflow-hidden flex-col justify-center self-center px-6 py-8 w-[393px] max-md:px-5">
      <div className="gap-14 w-full">
        <div className="flex flex-col gap-6 justify-center w-full">
          <div className="gap-6 w-full text-center">
            <p className="text-lg font-bold leading-none text-lime-500 uppercase tracking-[2.16px]">
              Como funciona?
            </p>
            <div className="flex flex-col gap-6 items-start mt-6 w-full">
              <h2 className="text-4xl font-bold tracking-tighter leading-9 text-white">
                Ajudamos vocÃª a decidir o prÃ³ximo passo com seguranÃ§a.
              </h2>
              <p className="mt-6 text-base text-zinc-500">
                Lorem ipsum dolor sit amet consectetur. Arcu convallis dolor
                elit aliquam arcu imperdiet nisl. Bravida malesuada lacus
                tristique tellus lectus lorem est. Mattis maecenas ipsum
                ultrices.
              </p>
            </div>
          </div>
          <div className="flex items-center self-center mt-6">
            <div className="flex overflow-hidden flex-col justify-end items-center self-stretch px-4 pt-6 my-auto rounded-2xl shadow-sm aspect-square min-w-60 w-[315px]">
              <img
                src="../../assets/images/png/checklist-_vdm 1@2x.png"
                alt="Process illustration"
                className="object-contain w-full aspect-[0.93]"
              />
            </div>
            <div className="flex self-stretch my-auto w-7 max-md:hidden">
              <div className="flex shrink-0 w-3.5 rounded-none h-[292px] max-md:hidden" />
              <div className="flex shrink-0 my-auto w-3.5 rounded-none h-[265px] max-md:hidden" />
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-md:mt-10">
          <div className="w-full">
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
          <div className="mt-6 w-full">
            <div className="w-full">
              <div className="flex flex-col items-start rounded-sm bg-zinc-700 max-md:pr-5">
                <div className="flex shrink-0 h-0.5 bg-lime-500 w-[215px]" />
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
          <div className="mt-6 w-full">
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
}
