function setupCarousel(name, { activeSlideIndex = 0, updateSlide } = {}) {
  const track = document.querySelector(`[data-carousel-track="${name}"]`);
  const slides = Array.from(document.querySelectorAll(`[data-carousel-slide="${name}"]`));
  const dots = Array.from(document.querySelectorAll(`[data-carousel-dot="${name}"]`));
  const prevButton = document.querySelector(`[data-carousel-prev="${name}"]`);
  const nextButton = document.querySelector(`[data-carousel-next="${name}"]`);

  if (!track || !slides.length) {
    return;
  }

  let currentIndex = activeSlideIndex;

  const render = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.setAttribute("aria-hidden", String(!active));
      if (typeof updateSlide === "function") {
        updateSlide(slide, active);
      }
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentIndex;
      dot.classList.toggle("bg-lime-500", active);
      dot.classList.toggle("bg-zinc-700", !active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  };

  prevButton?.addEventListener("click", () => render(currentIndex - 1));
  nextButton?.addEventListener("click", () => render(currentIndex + 1));
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => render(dotIndex));
  });

  render(currentIndex);
}

const menuToggle = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu?.classList.toggle("hidden", isExpanded);
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileMenu.classList.add("hidden");
  });
});

setupCarousel("testimonials", {
  activeSlideIndex: 1,
  updateSlide: (slide, active) => {
    const quoteImage = slide.querySelector('img[alt="Quote"]');
    const placeholder = slide.querySelector(".bg-zinc-700.fill-zinc-700");
    const textWrapper = slide.querySelector(".basis-0");
    const paragraph = slide.querySelector("p");

    slide.classList.toggle("text-white", active);
    slide.classList.toggle("opacity-35", !active);

    if (textWrapper) {
      textWrapper.classList.toggle("text-white", active);
      textWrapper.classList.toggle("text-zinc-700", !active);
    }

    if (paragraph) {
      paragraph.classList.toggle("text-lg", active);
      paragraph.classList.toggle("tracking-tight", active);
      paragraph.classList.toggle("leading-5", active);
      paragraph.classList.toggle("text-base", !active);
    }

    quoteImage?.parentElement?.classList.toggle("hidden", !active);
    placeholder?.parentElement?.classList.toggle("hidden", active);
  },
});

setupCarousel("comparison");

document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const answer = item?.querySelector("[data-faq-answer]");
    const icon = button.querySelector("[data-faq-icon]");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    answer?.classList.toggle("hidden", isExpanded);

    if (icon) {
      icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(45deg)";
    }
  });
});
