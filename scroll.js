// 🌟 Section fade/slide animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.id === "skills") animateSkills();
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// 📊 Animate skill bars
function animateSkills() {
  const bars = document.querySelectorAll(".progress");
  bars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 100);
  });
}
// Lightbox for gallery
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
