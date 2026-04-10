import React from "react";

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center px-6 py-8 w-full text-center bg-neutral-900 max-md:px-5">
      <div className="gap-8 w-full">
        <div className="gap-6 w-full font-bold">
          <p className="text-sm tracking-wide leading-none text-lime-500 uppercase">
            Analisamos a sua multa com precisÃ£o de VAR.
          </p>
          <h1 className="mt-6 text-6xl tracking-tighter text-white leading-[58px] max-md:text-4xl max-md:leading-10">
            REVISÃƒO TÃ‰CNICA QUE MUDA O JOGO NO TRÃ‚NSITO.
          </h1>
          <p className="mt-6 text-base text-zinc-500">
            Recebeu uma multa e acha que a decisÃ£o de campo nÃ£o foi realmente
            justa? Erros formais acontecem e o VAR das Multas existe para
            corrigir. Revisamos o seu lance com base na lei para impedir
            pontuaÃ§Ãµes indevidas na sua CNH.
          </p>
        </div>
        <div className="gap-4 mt-8 w-full text-base font-[450]">
          <div className="flex flex-col justify-center w-full min-h-[61px] text-[#00)]">
            <div className="flex flex-col justify-center p-2 w-full rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center w-full">
                <button className="flex flex-col justify-center items-center px-8 py-3 w-full rounded border border-white border-solid max-md:px-5 hover:bg-white hover:text-black transition-colors">
                  <span className="text-base text-[#00)]">
                    Quero analisar minha multa
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
                    <span className="text-base">Acompanhar meu processo</span>
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
