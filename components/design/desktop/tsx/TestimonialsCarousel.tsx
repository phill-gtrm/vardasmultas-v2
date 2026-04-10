import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Enim lacinia purus turpis facilisis tortor pulvinar in aliquam sed. Non ut massa posuere.",
      clientName: "Nome do Cliente",
      location: "Santa Maria",
      avatar:
        "../../assets/images/png/img@2x.png",
      isActive: false,
    },
    {
      text: "Eu dependo do carro para trabalhar e levar meus filhos na escola. Quando a notificaÃ§Ã£o chegou, achei que tinha perdido a carteira. A equipe do VDM encontrou um erro que eu jamais veria.",
      clientName: "Caio S. Lara",
      location: "Santa Maria",
      avatar:
        "../../assets/images/png/img@2x-1.png",
      isActive: true,
    },
    {
      text: "Minha CNH provisÃ³ria estava em risco por uma multa de radar que eu nem sabia que existia. Eles analisaram o processo e viram que a notificaÃ§Ã£o nunca tinha chegado no meu endereÃ§o.",
      clientName: "Nome do Cliente",
      location: "Santa Maria",
      avatar:
        "../../assets/images/png/img@2x-2.png",
      isActive: false,
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col gap-14 items-center px-32 py-20 w-full bg-neutral-900 max-w-[1440px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start max-w-full font-bold text-center w-[792px]">
        <p className="text-lg leading-none text-lime-500 uppercase tracking-[2.16px] max-md:max-w-full">
          RevisÃµes que mudaram o jogo:
        </p>

        <h2 className="mt-6 text-5xl tracking-tighter leading-none text-white max-md:max-w-full max-md:text-4xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>

      <div className="flex justify-between items-center self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <button
          className="flex flex-col justify-center items-center self-stretch my-auto"
          aria-label="Previous testimonial"
        >
          <div className="flex items-start">
            <div className="flex justify-center items-center">
              <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto">
                <div className="flex min-h-6" />
              </div>
            </div>
          </div>
        </button>

        <div className="flex gap-14 justify-center items-center self-stretch my-auto min-w-60 text-zinc-700 w-[1168px] max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              clientName={testimonial.clientName}
              location={testimonial.location}
              avatar={testimonial.avatar}
              isActive={testimonial.isActive}
            />
          ))}
        </div>

        <button
          className="flex flex-col justify-center items-center self-stretch my-auto w-6"
          aria-label="Next testimonial"
        >
          <div className="flex items-start w-full max-w-6">
            <div className="flex justify-center items-center w-6">
              <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-6">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="../../assets/icons/svg/Chevron right.svg"
                    alt=""
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="flex gap-4 justify-center items-center py-2 mt-14 w-16 max-md:mt-10">
        <img
          src="../../assets/icons/svg/Chevron left.svg"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-500 rounded" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded bg-zinc-700" />
        <img
          src="../../assets/icons/svg/Chevron right.svg"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
    </section>
  );
};
