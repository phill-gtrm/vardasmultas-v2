"use client";
import React from "react";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Perdi minha CNH por pontos e nÃ£o sabia como agir. GraÃ§as Ã  equipe VDM, consegui reverter a situaÃ§Ã£o e recuperar minha habilitaÃ§Ã£o!",
      name: "Fernanda M.",
      location: "Porto Alegre, RS",
      active: false,
    },
    {
      text: "Eu estava angustiado apÃ³s receber uma multa que considerei injusta. A equipe VDM me ajudou a contestar e consegui cancelar a penalidade!",
      name: "Wagner M.",
      location: "Caxias do Sul, RS",
      active: true,
    },
    {
      text: "A equipe VDM foi fundamental para revisar a pontuaÃ§Ã£o da minha CNH. Eles foram extremamente profissionais e me ajudaram a entender todo o processo!",
      name: "SÃ´nia B.",
      location: "Santa Maria, RS",
      active: false,
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col gap-8 px-6 py-16 w-full bg-neutral-900 max-md:px-5">
      <div className="flex flex-col gap-4 items-start w-full font-bold text-center">
        <p className="text-lg leading-none text-lime-500 uppercase tracking-[2.16px]">
          RevisÃµes que mudaram o jogo:
        </p>
        <h2 className="mt-4 text-4xl tracking-tighter leading-9 text-white">
          O que nossos clientes dizem sobre nÃ³s
        </h2>
      </div>
      <div className="flex overflow-x-auto justify-between items-start mt-8 w-full">
        <div className="flex flex-wrap gap-2 justify-center items-start min-w-60 w-[1168px]">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className={`flex flex-col justify-center p-8 rounded-2xl bg-stone-900 min-w-60 w-[345px] max-md:px-5 ${
                testimonial.active ? "text-white" : "opacity-35"
              }`}
            >
              <div className="flex gap-3 w-full">
                {testimonial.active ? (
                  <img
                    src="../../assets/icons/svg/quote.svg"
                    alt="Quote"
                    className="object-contain shrink-0 self-start aspect-[1.25] w-[30px]"
                  />
                ) : (
                  <div className="flex flex-col justify-center self-start py-px w-[30px]">
                    <div className="flex shrink-0 bg-zinc-700 fill-zinc-700 h-[23px]" />
                  </div>
                )}
                <div
                  className={`flex-1 shrink gap-6 basis-0 ${testimonial.active ? "text-white" : "text-zinc-700"}`}
                >
                  <p
                    className={`${testimonial.active ? "text-lg tracking-tight leading-5" : "text-base"}`}
                  >
                    {testimonial.active && (
                      <span
                        style={{
                          fontFamily:
                            "Sofia Sans Condensed, -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "18px",
                          lineHeight: "18px",
                          letterSpacing: "-0.36px",
                        }}
                      >
                        {testimonial.text}
                      </span>
                    )}
                    {!testimonial.active && testimonial.text}
                  </p>
                  <div className="flex flex-col gap-0.5 justify-center mt-6 w-full">
                    <p className="text-lg font-bold tracking-tight leading-none">
                      {testimonial.name}
                    </p>
                    <p className="text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center self-center py-2 mt-8 w-16">
        <img
          src="../../assets/icons/svg/Chevron left.svg"
          alt="Previous"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-500 rounded" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded bg-zinc-700" />
        <img
          src="../../assets/icons/svg/Chevron right.svg"
          alt="Next"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
    </section>
  );
}
