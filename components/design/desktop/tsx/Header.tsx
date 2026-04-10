import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-32 py-8 w-full max-w-[1438px] max-md:px-5 max-md:max-w-full">
      <img
        src="../../assets/icons/svg/logotipo.svg"
        alt="VAR das Multas Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.73] w-[111px]"
      />

      <nav className="flex gap-14 items-center self-stretch my-auto text-base text-center text-white font-[450] min-w-60 max-md:max-w-full">
        <a
          href="#como-funciona"
          className="flex flex-col justify-center items-center self-stretch my-auto rounded"
        >
          <div className="flex gap-1 justify-center items-center">
            <div className="self-stretch my-auto">
              <div className="flex flex-col justify-center items-center rounded">
                <div className="text-base">Como funciona</div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="#lei-seca"
          className="flex flex-col justify-center items-center self-stretch my-auto rounded"
        >
          <div className="flex gap-1 justify-center items-center">
            <div className="self-stretch my-auto">
              <div className="flex flex-col justify-center items-center rounded">
                <div className="text-base">Lei Seca</div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="#cnh-permissionaria"
          className="flex flex-col justify-center items-center self-stretch my-auto rounded"
        >
          <div className="flex gap-1 justify-center items-center">
            <div className="self-stretch my-auto">
              <div className="flex flex-col justify-center items-center rounded">
                <div className="text-base">CNH PermissionÃ¡ria</div>
              </div>
            </div>
          </div>
        </a>
      </nav>

      <div className="flex gap-6 items-start self-stretch my-auto">
        <button className="flex items-start w-6">
          <div className="flex justify-center items-center w-6">
            <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-6">
              <div className="flex justify-center items-center w-full">
                <img
                  src="../../assets/icons/svg/menu.svg"
                  alt="Menu"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </button>

        <a
          href="#minha-conta"
          className="text-base text-center text-white font-[450]"
        >
          <div className="flex flex-col justify-center items-center rounded">
            <div className="text-base">
              <span style={{ textDecoration: "underline" }}>Minha conta</span>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};
