import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-8 justify-center px-32 py-16 max-w-full w-[1440px] max-md:px-5">
      <div className="gap-14 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full max-md:max-w-full">
          <div className="flex gap-14 h-full min-w-60">
            <img
              src="../../assets/icons/svg/logotipo.svg"
              alt="VAR das Multas Logo"
              className="object-contain shrink-0 self-start aspect-[1.73] w-[111px]"
            />

            <div className="w-[238px]">
              <h3 className="text-2xl font-bold tracking-tight leading-none text-white">
                Ficou alguma dÃºvida?
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Se precisar de ajuda com seu acesso, com documentos ou com o
                andamento do processo, a equipe do VAR das Multas pode orientar
                vocÃª.
              </p>

              <div className="flex gap-1 items-end pt-2 mt-2 w-full">
                <a
                  href="#contato"
                  className="text-base text-center text-white font-[450]"
                >
                  <div className="flex flex-col justify-center items-center rounded">
                    <div className="text-base">Fale conosco</div>
                  </div>
                </a>

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

          <nav className="flex flex-wrap gap-14 items-start self-start text-base text-white font-[450] min-w-60 max-md:max-w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                ServiÃ§os
              </h4>

              <a
                href="#lei-seca"
                className="flex flex-col justify-center items-center self-start mt-4 text-center rounded"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base opacity-45">Lei Seca</div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#cnh-permissionaria"
                className="flex flex-col justify-center items-center self-start mt-4 text-center rounded opacity-45"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base">CNH PermissionÃ¡ria</div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#acompanhar"
                className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base">Acompanhe seu processo</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="gap-4">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                Institucional
              </h4>

              <a
                href="#sobre"
                className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base">Sobre o VDM</div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#contato"
                className="flex flex-col justify-center items-center mt-4 text-center rounded opacity-45"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base">Fale conosco</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold tracking-tight leading-none">
                Legais
              </h4>

              <a
                href="#privacidade"
                className="flex flex-col justify-center items-center mt-4 text-center rounded"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base opacity-45">
                        PolÃ­tica de Privacidade
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#termos"
                className="flex flex-col justify-center items-center self-start mt-4 text-center rounded opacity-45"
              >
                <div className="flex gap-1 justify-center items-center">
                  <div className="self-stretch my-auto">
                    <div className="flex flex-col justify-center items-center rounded">
                      <div className="text-base">Termos e condiÃ§Ãµes</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-14 border border-solid bg-stone-900 border-stone-900 min-h-px w-[1200px] max-md:mt-10 max-md:max-w-full" />

        <div className="flex flex-wrap gap-10 justify-between items-start mt-14 w-full text-sm text-zinc-700 max-md:mt-10 max-md:max-w-full">
          <p className="text-sm">CNPJ XXXX VAR DAS MULTAS</p>

          <div className="flex gap-2 justify-center items-center">
            <p className="self-stretch my-auto text-sm">
              VDM 2026. Design by GTRM
            </p>
            <img
              src="../../assets/icons/svg/gtrm-logo.svg"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
