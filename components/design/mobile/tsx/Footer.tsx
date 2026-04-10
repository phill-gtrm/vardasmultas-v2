import React from "react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 justify-center self-center px-6 py-8 w-full max-md:px-5">
      <div className="gap-14 w-full">
        <div className="flex flex-col gap-14 w-full">
          <div className="flex flex-col gap-8 items-center self-center max-w-full w-[238px]">
            <img
              src="../../assets/icons/svg/logotipo.svg"
              alt="VAR das Multas Logo"
              className="object-contain max-w-full aspect-[1.74] w-[138px]"
            />
            <div className="flex flex-col items-center mt-8 w-full max-w-[238px]">
              <h3 className="text-2xl font-bold tracking-tight leading-none text-center text-white">
                Ficou alguma dÃºvida?
              </h3>
              <p className="mt-2 text-sm text-center text-zinc-500">
                Se precisar de ajuda com seu acesso, com documentos ou com o
                andamento do processo, a equipe do VAR das Multas pode orientar
                vocÃª.
              </p>
              <div className="flex gap-1 justify-center items-end pt-2 mt-2">
                <button className="text-base text-center text-white font-[450] hover:text-lime-500 transition-colors">
                  <div className="flex flex-col justify-center items-center rounded">
                    <span className="text-base">Fale conosco</span>
                  </div>
                </button>
                <div className="flex overflow-hidden flex-col justify-center items-center w-4">
                  <img
                    src="../../assets/icons/svg/wrapper.svg"
                    alt=""
                    className="object-contain w-4 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 border border-solid bg-stone-900 border-stone-900 min-h-px w-[345px] max-md:mt-10" />
          <nav className="gap-14 mt-14 w-full text-base text-white font-[450] max-md:mt-10">
            <div className="flex flex-col gap-4 items-center w-full">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                ServiÃ§os
              </h4>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base opacity-45">Lei Seca</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base">CNH PermissionÃ¡ria</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base">Acompanhe seu processo</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center mt-14 w-full max-md:mt-10">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                Institucional
              </h4>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base">Sobre o VDM</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base">Fale conosco</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center mt-14 w-full max-md:mt-10">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                Legais
              </h4>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base opacity-45">
                        PolÃ­tica de Privacidade
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45">
                <div className="flex gap-1 justify-center items-center">
                  <button className="self-stretch my-auto hover:text-lime-500 transition-colors">
                    <div className="flex flex-col justify-center items-center rounded">
                      <span className="text-base">Termos e condiÃ§Ãµes</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-14 w-full border border-solid bg-stone-900 border-stone-900 min-h-px max-md:mt-10" />
        <div className="flex flex-col gap-8 items-center mt-14 w-full text-sm text-zinc-700 max-md:mt-10">
          <p className="text-sm">CNPJ VAR DAS MULTAS</p>
          <div className="flex gap-2 justify-center items-center mt-8">
            <p className="self-stretch my-auto text-sm">
              VDM 2026. Design by GTRM
            </p>
            <img
              src="../../assets/icons/svg/gtrm-logo.svg"
              alt="GTRM Logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[15px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
