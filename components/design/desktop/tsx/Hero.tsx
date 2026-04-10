import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-56 py-24 max-w-full text-center w-[1440px] max-md:px-5">
      <div className="flex flex-col gap-8 max-w-[996px] w-[996px] max-md:max-w-full">
        <div className="flex flex-col gap-6 w-full font-semibold max-md:max-w-full">
          <p className="text-3xl tracking-wider leading-none text-lime-700 uppercase max-md:max-w-full">
            Analisamos a sua multa com precisÃ£o de VAR.
          </p>

          <h1 className="mt-6 text-8xl tracking-tighter text-white uppercase leading-[81px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            RevisÃ£o{" "}
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>
              tÃ©cnica
            </span>{" "}
            que
            <br />
            <span style={{ color: "rgba(255,255,255,1)" }}>MUDA</span>{" "}
            <span
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,1)",
              }}
            >
              o jogo
            </span>
            <span style={{ color: "rgba(255,255,255,1)" }}> no trÃ¢nsito</span>
            <span style={{ color: "rgba(88,116,23,1)" }}>.</span>
          </h1>

          <p className="self-center mt-6 text-2xl font-bold tracking-tight leading-7 text-zinc-500 w-[588px] max-md:max-w-full">
            <span style={{ fontWeight: 400, color: "rgba(136,136,136,1)" }}>
              Recebeu uma multa e acha que a decisÃ£o de campo nÃ£o foi realmente
              justa? Erros formais acontecem e o VAR das Multas existe para
              corrigir. Revisamos o seu lance com base na lei para impedir
              pontuaÃ§Ãµes indevidas na sua CNH.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-start self-center mt-8 text-base font-[450] max-md:max-w-full">
          <button className="min-w-60 text-[#00)]">
            <div className="flex flex-col justify-center p-2 rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center items-center px-8 py-3 rounded border border-white border-solid max-md:px-5">
                <div className="text-base text-[#00)]">
                  Quero analisar minha multa
                </div>
              </div>
            </div>
          </button>

          <button className="text-white min-w-60">
            <div className="flex flex-col justify-center p-2 rounded-xl border border-white border-solid">
              <div className="flex flex-col justify-center items-center px-8 py-3 rounded max-md:px-5">
                <div className="text-base">Acompanhar meu processo</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
