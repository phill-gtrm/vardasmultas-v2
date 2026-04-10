"use client";
import React from "react";

export function FAQSection() {
  const faqs = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center self-center px-6 py-16 w-full max-md:px-5">
      <div className="gap-8 w-full">
        <div className="gap-6 w-full">
          <h2 className="text-6xl font-bold tracking-tighter text-white leading-[58px] max-md:text-4xl max-md:leading-10">
            Perguntas Frequentes
          </h2>
          <p className="mt-6 text-base text-zinc-500">
            Algumas questÃµes que vocÃªs geralmente perguntam.
          </p>
        </div>
        <div className="mt-8 w-full text-2xl font-bold tracking-tight leading-7 text-white">
          <div className="w-full">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="flex flex-col justify-center px-1 py-7 w-full border-t border-b border-solid border-y-stone-900"
              >
                <button className="flex justify-between items-center w-full text-left hover:text-lime-500 transition-colors">
                  <span className="flex-1 shrink self-stretch my-auto text-2xl basis-0">
                    {faq}
                  </span>
                  <img
                    src="../../assets/icons/svg/Chevron down.svg"
                    alt="Expand"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="w-full">
            {faqs.slice(3, 6).map((faq, index) => (
              <div
                key={index + 3}
                className="flex flex-col justify-center px-1 py-7 w-full border-t border-b border-solid border-y-stone-900"
              >
                <button className="flex justify-between items-center w-full text-left hover:text-lime-500 transition-colors">
                  <span className="flex-1 shrink self-stretch my-auto text-2xl basis-0">
                    {faq}
                  </span>
                  <img
                    src="../../assets/icons/svg/Chevron down.svg"
                    alt="Expand"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
