import React from "react";

interface ComparisonTopicProps {
  text: string;
  isPositive: boolean;
}

const ComparisonTopic: React.FC<ComparisonTopicProps> = ({
  text,
  isPositive,
}) => {
  const iconSrc = isPositive
    ? "../../assets/icons/svg/Check square-1.svg"
    : "../../assets/icons/svg/close.svg";

  return (
    <div className="flex gap-4 justify-center items-center max-w-full w-[282px]">
      <img
        src={iconSrc}
        alt={isPositive ? "Check" : "X"}
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
      />
      <p className="flex-1 shrink my-auto text-base basis-0">{text}</p>
    </div>
  );
};

export const ComparisonSection: React.FC = () => {
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
    <section className="flex flex-col gap-8 justify-center items-center px-32 py-20 max-w-full w-[1440px] max-md:px-5">
      <div className="flex flex-col gap-14 max-w-full w-[792px]">
        <div className="flex flex-col items-start w-full font-bold text-center max-md:max-w-full">
          <p className="text-lg leading-none text-lime-500 uppercase tracking-[2.16px] max-md:max-w-full">
            POR QUE O VDM?
          </p>

          <h2 className="mt-6 text-5xl tracking-tighter leading-10 text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
            VerificaÃ§Ã£o eletrÃ´nica de mais de 35 critÃ©rios legais na
            notificaÃ§Ã£o.
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-between mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <article className="overflow-hidden gap-6 p-8 my-auto w-96 border-2 border-solid shadow-sm border-stone-900 min-w-60 rounded-[32px] max-md:px-5">
            <h3 className="text-4xl font-bold tracking-tighter leading-none text-white">
              Auditoria VDM
            </h3>

            <div className="mt-6 w-full border border-solid bg-stone-900 border-stone-900 min-h-px" />

            <div className="flex flex-col gap-8 items-start mt-6 w-full text-base text-zinc-500">
              {vdmFeatures.map((feature, index) => (
                <ComparisonTopic key={index} text={feature} isPositive={true} />
              ))}
            </div>
          </article>

          <article className="overflow-hidden gap-6 p-8 w-96 border border-solid border-stone-900 min-w-60 rounded-[32px] max-md:px-5">
            <h3 className="text-4xl font-bold tracking-tighter leading-none text-white">
              Defesa PadrÃ£o
            </h3>

            <div className="mt-6 w-full border border-solid bg-stone-900 border-stone-900 min-h-px" />

            <div className="flex flex-col gap-8 items-start mt-6 w-full text-base text-zinc-500">
              {standardFeatures.map((feature, index) => (
                <ComparisonTopic
                  key={index}
                  text={feature}
                  isPositive={false}
                />
              ))}
            </div>
          </article>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-start self-center mt-14 text-base text-center font-[450] max-md:mt-10 max-md:max-w-full">
          <button className="min-w-60 text-[#00)]">
            <div className="flex flex-col justify-center p-2 rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center items-center px-8 py-3 rounded border border-white border-solid max-md:px-5">
                <div className="text-base text-[#00)]">
                  Quero uma revisÃ£o tÃ©cnica
                </div>
              </div>
            </div>
          </button>

          <button className="text-white">
            <div className="flex flex-col justify-center p-2 rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center items-center px-8 py-3 rounded max-md:px-5">
                <div className="text-base">Falar com a equipe</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
