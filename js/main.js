/* ============================================================
   Cyberville — cyberville.tech interactions
   ============================================================ */

(function () {
  "use strict";

  // ---- Current year ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Header shadow on scroll ----
  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile menu ----
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---- Scroll reveal ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // ---- Animated counters ----
  const counters = document.querySelectorAll(".stat .num");
  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          counterObserver.unobserve(el);
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => counterObserver.observe(c));
  }

  // ---- Quote form -> opens WhatsApp with prefilled message ----
  const quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(this);
      const text =
        "Hi Cyberville, I will like to build this software or website." +
        "\n\nName: " + data.get("name") +
        "\nBusiness: " + (data.get("business") || "-") +
        "\nWhat I need: " + data.get("service") +
        "\n\nProject Details:\n" + data.get("message") +
        "\n\nReply to me at: " + data.get("email");
      window.open("https://wa.me/211922734334?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  }
})();