/* ============================================================
   WORKS.JS — filter tab logic
   ============================================================ */

(function () {
  "use strict";

  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".work-card");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // update active tab state
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filter = tab.dataset.filter;

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
})();
