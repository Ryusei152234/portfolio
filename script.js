document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // =========================
  // 1. スクロールアニメーション
  // =========================
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));

  // =========================
  // 2. Storyスライダー
  // =========================
  const track = document.querySelector(".story-track");
  const cards = document.querySelectorAll(".story-card");
  const prevBtn = document.querySelector(".story-btn.prev");
  const nextBtn = document.querySelector(".story-btn.next");
  const dots = document.querySelectorAll(".story-dot");

  if (track && cards.length > 0 && prevBtn && nextBtn && dots.length > 0) {
    let currentIndex = 0;

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot) => dot.classList.remove("active"));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
      }
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.index);
        updateSlider();
      });
    });

    updateSlider();
  }
});

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

projectCards.forEach((card) => {
  observer.observe(card);
});
