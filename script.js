// Highlight the active nav link based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Midterm / Finals toggle
const termBtns = document.querySelectorAll(".term-btn");
const termPanels = document.querySelectorAll(".term-panel");
const termHint = document.getElementById("termHint");

termBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    termBtns.forEach((b) => b.classList.remove("active"));
    termPanels.forEach((p) => p.classList.remove("show"));

    btn.classList.add("active");
    document.getElementById(target).classList.add("show");
    if (termHint) {
      termHint.style.display = "none";
    }
  });
});
