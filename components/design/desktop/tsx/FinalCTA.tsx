import React from "react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col gap-8 justify-center px-32 py-20 w-full max-w-[1440px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-14 items-center w-full max-md:max-w-full">
        <div className="flex flex-col gap-14 self-stretch my-auto min-w-60 w-[588px] max-md:max-w-full">
          <div className="w-full font-bold max-md:max-w-full">
            <h2 className="text-5xl tracking-tighter leading-10 text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Recebeu uma multa e acha que a decisÃ£o de campo nÃ£o foi realmente
              justa?
            </h2>

            <p className="mt-6 text-2xl tracking-tight leading-7 text-zinc-500 max-md:max-w-full">
              <span style={{ fontWeight: 400 }}>
                NÃ£o contamos com a sorte. Enquanto defesas padrÃµes usam
              </span>{" "}
              <span style={{ color: "rgba(246,246,246,1)" }}>modelos</span>{" "}
              <span style={{ color: "rgba(246,246,246,1)" }}>genÃ©ricos</span>
              <span style={{ fontWeight: 400 }}>, auditamos </span>
              <span style={{ color: "rgba(246,246,246,1)" }}>
                mais de 35 requisitos legais
              </span>{" "}
              <span style={{ fontWeight: 400 }}>
                na sua infraÃ§Ã£o. Se houver uma falha tÃ©cnica no processo, a lei
                garante: a penalidade deve ser anulada.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-start self-start mt-14 text-base text-center font-[450] max-md:mt-10 max-md:max-w-full">
            <button className="min-w-60 text-[#00)]">
              <div className="flex flex-col justify-center p-2 rounded-xl border border-white border-solid">
                <div className="flex flex-col justify-center items-center px-8 py-3 rounded border border-white border-solid max-md:px-5">
                  <div className="text-base text-[#00)]">
                    Quero revisar minha multa
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

        <img
          src="../../assets/images/png/var-char (mao) 1@2x.png"
          alt="Final CTA illustration"
          className="object-contain self-stretch my-auto aspect-[1.05] min-w-60 w-[598px] max-md:max-w-full"
        />
      </div>
    </section>
  );
};
