import React from "react";

export function Header() {
  return (
    <header className="flex overflow-hidden gap-10 justify-between items-center self-center p-6 bg-neutral-900 max-w-[393px] w-[393px] max-md:px-5">
      <img
        src="../../assets/icons/svg/logotipo.svg"
        alt="VAR das Multas Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.73] w-[97px]"
      />
      <button
        className="flex items-start self-stretch my-auto w-10"
        aria-label="Open menu"
      >
        <div className="flex justify-center items-center w-10">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-10">
            <div className="flex justify-center items-center w-full">
              <img
                src="../../assets/icons/svg/menu.svg"
                alt="Menu"
                className="object-contain self-stretch my-auto w-10 aspect-square"
              />
            </div>
          </div>
        </div>
      </button>
    </header>
  );
}
