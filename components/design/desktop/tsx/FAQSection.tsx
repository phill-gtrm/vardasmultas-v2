import React from "react";

interface FAQItemProps {
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  return (
    <div className="flex flex-col justify-center px-1 py-7 w-full border-t border-b border-solid border-y-stone-900 max-md:max-w-full">
      <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
        <h3 className="flex-1 shrink self-stretch my-auto text-2xl basis-0 max-md:max-w-full">
          {question}
        </h3>
        <button aria-label="Expand FAQ">
          <img
            src="../../assets/icons/svg/Chevron down.svg"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const faqQuestions = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center p-32 max-w-full w-[1440px] max-md:px-5 max-md:py-24">
      <div className="gap-20 max-w-[1200px] w-[1200px] max-md:max-w-full">
        <div className="gap-6 w-full max-md:max-w-full">
          <h2 className="text-6xl font-bold tracking-tighter leading-none text-white max-md:max-w-full max-md:text-4xl">
            Perguntas Frequentes
          </h2>

          <p className="mt-6 text-base text-zinc-500 max-md:max-w-full">
            Algumas questÃµes que vocÃªs geralmente perguntam.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-start mt-20 w-full text-2xl font-bold tracking-tight leading-none text-white max-md:mt-10 max-md:max-w-full">
          <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
            {faqQuestions.map((question, index) => (
              <FAQItem key={`left-${index}`} question={question} />
            ))}
          </div>

          <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
            {faqQuestions.map((question, index) => (
              <FAQItem key={`right-${index}`} question={question} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
