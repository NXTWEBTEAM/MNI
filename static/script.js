const searchInput = document.querySelector('.search-container input');
const searchMenu = document.querySelector('.search-menu');

searchInput.addEventListener('focus', () => {
    searchMenu.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
    if (!searchMenu.contains(e.target) && !searchInput.contains(e.target)) {
        searchMenu.classList.add('hidden');
    }
});
// слайдер
let slideIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider-item');
  const totalSlides = slides.length;

  // Оновлюємо індекс слайду
  slideIndex += direction;

  // Якщо індекс виходить за межі, повертаємо його в межі
  if (slideIndex < 0) {
    slideIndex = totalSlides - 6; // Повертаємо до останніх 6 слайдів
  } else if (slideIndex >= totalSlides - 5) {
    slideIndex = 0; // Повертаємо до початку
  }

  // Обчислюємо відстань для зсуву слайдів
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  // Оновлюємо видимість стрілок
  updateArrowsVisibility();
}

function updateArrowsVisibility() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider-item');
  const totalSlides = slides.length;
  
  // Якщо ми на початку, приховуємо стрілку вліво
  if (slideIndex === 0) {
    document.querySelector('.prev').style.display = 'none';
    document.querySelector('.next').style.display = 'block'; // Залишаємо стрілку вправо
  } else if (slideIndex >= totalSlides - 6) {
    // Якщо ми на кінці, приховуємо стрілку вправо
    document.querySelector('.next').style.display = 'none';
    document.querySelector('.prev').style.display = 'block'; // Показуємо стрілку вліво
  } else {
    // Якщо ми в середині, обидві стрілки повинні бути видимими
    document.querySelector('.prev').style.display = 'block';
    document.querySelector('.next').style.display = 'block';
  }
}

// Ініціалізація видимості стрілок
updateArrowsVisibility();

// Додаємо обробники подій для кнопок
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));







