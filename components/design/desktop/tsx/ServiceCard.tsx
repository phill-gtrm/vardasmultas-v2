import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  showButton?: boolean;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  showButton = true,
  className = "",
}) => {
  return (
    <article
      className={`overflow-hidden flex-1 shrink border border-solid basis-0 border-stone-900 min-w-60 rounded-[32px] max-md:max-w-full ${className}`}
    >
      <div className="flex-1 p-8 w-full max-md:px-5 max-md:max-w-full">
        <h3 className="text-4xl font-semibold tracking-tighter leading-none text-white max-md:max-w-full">
          {title}
        </h3>

        <p className="mt-10 text-base text-gray-500 max-md:max-w-full">
          {description}
        </p>

        {showButton && (
          <div className="flex flex-wrap gap-1 items-end mt-10 w-full max-md:max-w-full">
            <button className="text-base text-center text-white font-[450]">
              <div className="flex flex-col justify-center items-center rounded">
                <div className="text-base">Ver detalhes</div>
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
        )}
      </div>
    </article>
  );
};
