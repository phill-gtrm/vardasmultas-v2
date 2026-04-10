import React from "react";

interface TestimonialCardProps {
  text: string;
  clientName: string;
  location: string;
  avatar: string;
  isActive?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  clientName,
  location,
  avatar,
  isActive = false,
}) => {
  return (
    <article
      className={`flex flex-col justify-center self-stretch p-8 my-auto rounded-2xl bg-stone-900 min-w-60 w-[486px] max-md:px-5 max-md:max-w-full ${
        isActive ? "text-white" : "text-zinc-700 opacity-35"
      }`}
    >
      <div className="flex gap-5 w-full max-md:max-w-full">
        <img
          src={avatar}
          alt={`${clientName} avatar`}
          className="object-contain shrink-0 self-start aspect-[1.27] w-[52px]"
        />

        <div className="flex-1 shrink gap-5 basis-0 min-w-60">
          <p className="text-base">
            {isActive ? (
              <span style={{ color: "rgba(255,255,255,1)" }}>{text}</span>
            ) : (
              text
            )}
          </p>

          <div className="flex flex-col gap-0.5 justify-center mt-5 w-full">
            <h3 className="text-lg font-bold tracking-tight leading-none">
              {clientName}
            </h3>
            <p className="text-xs">{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
