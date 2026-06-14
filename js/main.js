/* ============================================================
   MAIN.JS — shared behaviour: nav scroll, active link state
   ============================================================ */

(function () {
  "use strict";

  /* ── Nav: add .scrolled class on scroll ── */
  const nav = document.querySelector(".nav");

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── Nav: mark current page link as active ── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
})();

/* ── Mobile nav toggle ── */
const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}
