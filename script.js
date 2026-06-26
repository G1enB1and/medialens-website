const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    item.classList.add("is-visible");
    return;
  }

  revealObserver.observe(item);
});

document.body.classList.add("reveal-ready");

const liftTarget = document.querySelector(".lift-on-scroll");

const updateLift = () => {
  if (!liftTarget) return;

  const rect = liftTarget.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const progress = Math.min(Math.max((viewport - rect.top) / viewport, 0), 1);
  liftTarget.style.transform = `translateY(${(1 - progress) * 22}px)`;
};

window.addEventListener("scroll", updateLift, { passive: true });
window.addEventListener("resize", updateLift);
updateLift();

const screenImage = document.querySelector("#screen-image");
const screenCaption = document.querySelector("#screen-caption");
const screenButtons = document.querySelectorAll("[data-screen]");

screenButtons.forEach((button) => {
  button.setAttribute("aria-selected", button.classList.contains("active") ? "true" : "false");

  button.addEventListener("click", () => {
    screenButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    screenImage.style.opacity = "0";
    window.setTimeout(() => {
      screenImage.src = button.dataset.screen;
      screenCaption.textContent = button.dataset.caption;
    }, 140);
  });
});

if (screenImage) {
  screenImage.style.transition = "opacity 180ms ease";
  screenImage.addEventListener("load", () => {
    screenImage.style.opacity = "1";
  });
}
