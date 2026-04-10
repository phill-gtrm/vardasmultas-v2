const testimonialCards = Array.from(document.querySelectorAll("[data-testimonial]"));
const testimonialDots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");

let currentTestimonial = testimonialCards.findIndex((card) =>
  card.classList.contains("text-white"),
);

if (currentTestimonial < 0) {
  currentTestimonial = 0;
}

function updateTestimonials(index) {
  testimonialCards.forEach((card, cardIndex) => {
    const active = cardIndex === index;
    card.classList.toggle("text-white", active);
    card.classList.toggle("text-zinc-700", !active);
    card.classList.toggle("opacity-35", !active);

    const textSpan = card.querySelector("span");
    if (textSpan) {
      textSpan.style.color = active ? "rgba(255, 255, 255, 1)" : "";
    }
  });

  testimonialDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("bg-lime-500", dotIndex === index);
    dot.classList.toggle("bg-zinc-700", dotIndex !== index);
  });

  currentTestimonial = index;
}

if (prevButton && nextButton && testimonialCards.length) {
  updateTestimonials(currentTestimonial);

  prevButton.addEventListener("click", () => {
    const nextIndex =
      (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonials(nextIndex);
  });

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentTestimonial + 1) % testimonialCards.length;
    updateTestimonials(nextIndex);
  });

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateTestimonials(index));
  });
}

document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".w-full.border-y");
    const answer = item?.querySelector("[data-faq-answer]");
    const icon = button.querySelector("[data-faq-icon]");

    if (!answer || !icon) {
      return;
    }

    const isHidden = answer.classList.contains("hidden");
    answer.classList.toggle("hidden", !isHidden);
    icon.style.transform = isHidden ? "rotate(45deg)" : "rotate(0deg)";
    button.setAttribute("aria-expanded", String(isHidden));
  });
});
