"use client";
import React from "react";

export function ComparisonSection() {
  const vdmFeatures = [
    "AnÃ¡lise de 35 requisitos legais e vÃ­cios formais na notificaÃ§Ã£o.",
    "PontuaÃ§Ã£o congelada (Efeito Suspensivo) enquanto durar o processo.",
    "Controlado. Lutamos para anular a infraÃ§Ã£o ou postergar o bloqueio.",
    "Investimento Ãºnico na defesa tÃ©cnica para proteger sua autonomia.",
    "Conta com a tÃ©cnica jurÃ­dica e erros da administraÃ§Ã£o pÃºblica.",
  ];

  const standardFeatures = [
    'Modelos genÃ©ricos de internet ("copia e cola").',
    "Os pontos caem na carteira apÃ³s o prazo administrativo.",
    "Bloqueio do direito de dirigir pode ser imediato.",
    "Valor da Multa + Curso de Reciclagem + Gastos com App de Transporte.",
    "Conta com a sorte ou clemÃªncia do julgador.",
  ];

  return (
    <section className="flex flex-col justify-center px-6 py-8 w-full max-md:px-5">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col items-start w-full font-bold text-center">
          <p className="text-lg leading-none text-lime-500 uppercase tracking-[2.16px]">
            POR QUE O VDM?
          </p>
          <h2 className="mt-6 text-4xl tracking-tighter leading-9 text-white">
            VerificaÃ§Ã£o eletrÃ´nica de mais de 35 critÃ©rios legais na
            notificaÃ§Ã£o.
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-2.5 mt-6 w-[345px]">
          <article className="overflow-hidden gap-6 self-start p-8 w-full border-2 border-solid shadow-sm border-stone-900 min-w-60 rounded-[32px] max-md:px-5">
            <h3 className="text-4xl font-bold tracking-tighter leading-none text-white">
              Auditoria VDM
            </h3>
            <div className="mt-6 w-full min-h-0 border border-solid bg-stone-900 border-stone-900" />
            <div className="gap-8 mt-6 w-full text-base text-zinc-500">
              {vdmFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 justify-center items-center max-w-full w-[282px] mt-8 first:mt-0"
                >
                  <img
                    src="../../assets/icons/svg/Check square-1.svg"
                    alt="Check"
                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                  />
                  <p className="flex-1 shrink my-auto text-base basis-0">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article className="overflow-hidden gap-6 p-8 w-full border border-solid border-stone-900 min-w-60 rounded-[32px] max-md:px-5">
            <h3 className="text-4xl font-bold tracking-tighter leading-none text-white">
              Defesa PadrÃ£o
            </h3>
            <div className="mt-6 w-full min-h-0 border border-solid bg-stone-900 border-stone-900" />
            <div className="gap-8 mt-6 w-full">
              {standardFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 justify-center items-center max-w-full w-[282px] mt-8 first:mt-0"
                >
                  <div className="flex overflow-hidden flex-col justify-center self-stretch px-1 py-1 my-auto w-10">
                    <div className="flex shrink-0 border-4 border-red-600 border-solid h-[34px] stroke-red-600" />
                  </div>
                  <p className="flex-1 shrink my-auto text-base basis-0 text-zinc-500">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className="flex gap-4 justify-center items-center self-center py-2 mt-6 w-16">
          <img
            src="../../assets/icons/svg/Chevron left.svg"
            alt="Previous"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-500 rounded" />
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded bg-zinc-700" />
          <img
            src="../../assets/icons/svg/Chevron right.svg"
            alt="Next"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="gap-4 mt-6 w-full text-base text-center font-[450]">
          <div className="flex flex-col justify-center w-full min-h-[61px] text-[#00)]">
            <div className="flex flex-col justify-center p-2 w-full rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center w-full">
                <button className="flex flex-col justify-center items-center px-8 py-3 w-full rounded border border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
                  <span className="text-base text-[#00)]">
                    Quero uma revisÃ£o tÃ©cnica
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-4 w-full text-white min-h-[61px]">
            <div className="w-full">
              <div className="flex flex-col justify-center p-2 w-full rounded-xl border border-white border-solid">
                <div className="flex flex-col justify-center items-center w-full">
                  <button className="flex flex-col justify-center items-center px-8 py-3 rounded max-md:px-5 hover:bg-white hover:text-black transition-colors">
                    <span className="text-base">Falar com a equipe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
