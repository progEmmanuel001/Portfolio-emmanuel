// fade-up section trigger

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2, // triggers when 20% is visible
  },
);

reveals.forEach((section) => {
  observer.observe(section);
});
