document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1. スクロールアニメーション
  // =========================
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
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

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 18;
    const rotateY = (rect.width / 2 - x) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});