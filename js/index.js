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

function goToPrevSlideShopByIcons() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
    updateIndicator();
  }
}

function goToNextSlideShopByIcons() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
    updateIndicator();
  }
}

function updateIndicatorShopByIcons() {
  const progress = ((currentIndex + 1) / slides.length) * 100;
  indicator.style.width = `${progress}%`;
}

prevBtn.addEventListener("click", goToPrevSlideShopByIcons);
nextBtn.addEventListener("click", goToNextSlideShopByIcons);

// Inisialisasi indikator
updateIndicatorShopByIcons();

// Slider GiftsForMom
const sliderGiftsForMom = document.querySelector(".sliderGiftsForMom");
const slidesGiftsForMom = document.querySelectorAll(".slideGiftsForMom");
const prevBtnGiftsForMom = document.querySelector(".prev-btnGiftsForMom");
const nextBtnGiftsForMom = document.querySelector(".next-btnGiftsForMom");
const indicatorGiftsForMom = document.querySelector(".indicatorGiftsForMom");

let currentIndexGiftsForMom = 0;
const slideWidthGiftsForMom = slidesGiftsForMom[0].offsetWidth + 15; // Lebar slide + margin

function updateSliderGiftsForMom() {
  sliderGiftsForMom.style.transform = `translateX(-${
    currentIndexGiftsForMom * slideWidthGiftsForMom
  }px)`;
}

function goToPrevSlideGiftsForMom() {
  if (currentIndexGiftsForMom > 0) {
    currentIndexGiftsForMom--;
    updateSliderGiftsForMom();
    updateIndicatorGiftsForMom();
  }
}

function goToNextSlideGiftsForMom() {
  if (currentIndexGiftsForMom < slidesGiftsForMom.length - 1) {
    currentIndexGiftsForMom++;
    updateSliderGiftsForMom();
    updateIndicatorGiftsForMom();
  }
}

function updateIndicatorGiftsForMom() {
  const progress =
    ((currentIndexGiftsForMom + 1) / slidesGiftsForMom.length) * 100;
  indicatorGiftsForMom.style.width = `${progress}%`;
}

prevBtnGiftsForMom.addEventListener("click", goToPrevSlideGiftsForMom);
nextBtnGiftsForMom.addEventListener("click", goToNextSlideGiftsForMom);

// Inisialisasi indikator
updateIndicatorGiftsForMom();
