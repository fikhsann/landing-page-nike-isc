const navItems = document.querySelectorAll(".nav-menu li");
const dropdowns = document.querySelectorAll(".dropdown");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const targetId = item.getAttribute("data-dropdown");

    dropdowns.forEach((drop) => drop.classList.remove("active"));

    const targetDropdown = document.getElementById(targetId);
    if (targetDropdown) {
      targetDropdown.classList.add("active");
    }
  });
});

// Tutup dropdown
document
  .querySelector(".menu-item-content")
  .addEventListener("mouseleave", () => {
    dropdowns.forEach((drop) => drop.classList.remove("active"));
  });

// Slider JS
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicator = document.querySelector(".indicator");

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 19.5; // Lebar slide + margin

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
    updateIndicator();
  }
}

function goToNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
    updateIndicator();
  }
}

function updateIndicator() {
  const progress = ((currentIndex + 1) / slides.length) * 100;
  indicator.style.width = `${progress}%`;
}

prevBtn.addEventListener("click", goToPrevSlide);
nextBtn.addEventListener("click", goToNextSlide);

// Inisialisasi indikator
updateIndicator();
