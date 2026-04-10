import React from "react";

export function FinalCTA() {
  return (
    <section className="flex overflow-hidden flex-col gap-8 justify-center self-center px-6 py-16 w-full text-center max-md:px-5">
      <div className="flex flex-col gap-6 justify-center w-full">
        <img
          src="../../assets/images/png/img@2x-1.png"
          alt="VAR das Multas illustration"
          className="object-contain w-full aspect-[1.05]"
        />
        <div className="gap-14 mt-6 w-full font-bold">
          <div className="flex flex-col items-start w-full">
            <h2 className="text-4xl tracking-tighter leading-9 text-white">
              Recebeu uma multa e acha que a decisÃ£o de campo nÃ£o foi realmente
              justa?
            </h2>
            <p className="mt-6 text-2xl tracking-tight leading-7 text-zinc-500">
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
        </div>
        <div className="gap-4 mt-6 w-full text-base font-[450]">
          <div className="flex flex-col justify-center w-full min-h-[61px] text-[#00)]">
            <div className="flex flex-col justify-center p-2 w-full rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center w-full">
                <button className="flex flex-col justify-center items-center px-8 py-3 w-full rounded border border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
                  <span className="text-base text-[#00)]">
                    Quero revisar minha multa
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
