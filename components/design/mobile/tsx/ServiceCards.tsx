import React from "react";

export function ServiceCards() {
  return (
    <section className="flex overflow-hidden flex-col gap-8 justify-center self-center px-6 py-8 w-[393px] max-md:px-5">
      <div className="gap-4 w-full">
        <div className="gap-6 w-full text-center">
          <h2 className="text-4xl font-bold tracking-tighter leading-9 text-white">
            Nem toda decisÃ£o de campo Ã© correta
            <span className="text-lime-500">.</span>
          </h2>
          <p className="mt-6 text-base text-zinc-500">
            Nossa tecnologia investiga vÃ­cios formais e erros de procedimento do
            agente de trÃ¢nsito. Entendemos o cenÃ¡rio, identificamos falhas no
            processo e lutamos para salvar a sua habilitaÃ§Ã£o.
          </p>
        </div>
        <div className="gap-4 mt-4 w-full">
          <article className="overflow-hidden w-full border border-solid border-stone-900 rounded-[32px]">
            <div className="p-8 w-full max-md:px-5">
              <h3 className="text-4xl font-semibold tracking-tighter leading-none text-center text-white">
                Lei Seca
              </h3>
              <p className="mt-6 text-base text-center text-zinc-500">
                Lorem ipsum dolor sit amet consectetur. Vulputate enim mollis
                tempus non commodo massa ut. Tristique a id orci non tellus
                dignissim egestas pulvinar. Mi id in venenatis congue ac orci
                semper enim massa viverra ut.
              </p>
              <div className="flex gap-1 justify-center items-end mt-6 w-full">
                <button className="text-base text-center text-white font-[450] hover:text-lime-500 transition-colors">
                  <div className="flex flex-col justify-center items-center rounded">
                    <span className="text-base">Ver detalhes</span>
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
          </article>
          <article className="overflow-hidden mt-4 w-full border border-solid border-stone-900 rounded-[32px]">
            <div className="p-8 w-full max-md:px-5">
              <h3 className="text-4xl font-semibold tracking-tighter leading-none text-center text-white">
                CNH PermissionÃ¡ria
              </h3>
              <p className="mt-6 text-base text-center text-zinc-500">
                Lorem ipsum dolor sit amet consectetur. Quam ut scelerisque
                auctor tempor nunc leo arcu. Commodo at ultrices a vitae elit.
                In sed vulputate eleifend enim viverra habitant nulla enim. Enim
                facilisis ullamcorper sit.
              </p>
              <div className="flex gap-1 justify-center items-end mt-6 w-full">
                <button className="text-base text-center text-white font-[450] hover:text-lime-500 transition-colors">
                  <div className="flex flex-col justify-center items-center rounded">
                    <span className="text-base">Ver detalhes</span>
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
          </article>
        </div>
        <div className="gap-4 mt-4 w-full text-center">
          <article className="overflow-hidden w-full border border-solid border-stone-900 rounded-[32px]">
            <div className="gap-2 p-8 w-full max-md:px-5">
              <h3 className="text-4xl font-semibold tracking-tighter leading-none text-white">
                Multas Autossuspensivas
              </h3>
              <p className="mt-2 text-base text-zinc-500">
                Excesso de velocidade ou manobras perigosas? Auditamos a
                homologaÃ§Ã£o do radar e a validade tÃ©cnica do auto para anular a
                penalidade.
              </p>
            </div>
          </article>
          <article className="overflow-hidden mt-4 w-full border border-solid border-stone-900 rounded-[32px]">
            <div className="gap-2 p-8 w-full max-md:px-5">
              <h3 className="text-4xl font-semibold tracking-tighter leading-none text-white">
                Excesso de Pontos
              </h3>
              <p className="mt-2 text-base text-zinc-500">
                O placar estourou? Analisamos todo o seu histÃ³rico de infraÃ§Ãµes
                dos Ãºltimos 12 meses para encontrar falhas processuais, derrubar
                multas antigas e recuperar seu direito de dirigir.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
