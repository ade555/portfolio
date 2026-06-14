/* ============================================================
   HOME.JS — article card drag-scroll
   ============================================================ */

(function () {
  "use strict";

  /* ── Article accordion ── */
  const cards = document.querySelectorAll("[data-card]");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.hasAttribute("data-active")) return;
      // deactivate all
      cards.forEach((c) => {
        if (c !== card) c.removeAttribute("data-active");
      });
      card.setAttribute("data-active", "");
    });
  });

  /* ── Drag scroll (still works on inactive cards) ── */
  const track = document.getElementById("articlesTrack");
  if (!track) return;

  let isDown = false,
    startX,
    scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.parentElement.scrollLeft;
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.parentElement.scrollLeft = scrollLeft - walk;
  });
})();
