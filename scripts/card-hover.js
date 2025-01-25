document.querySelectorAll(".card").forEach((card) => {
  if (
    !("ontouchstart" in window) &&
    window.matchMedia("(hover: hover)").matches
  ) {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  }
});
