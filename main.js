

// Swiper sliders
const swiper_for_img = new Swiper('.swiper-for-img', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper = new Swiper('.swiper-workers-section', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 'auto',
  on: {
    reachEnd: function () {
      this.allowSlideNext = false;
    },
    reachBeginning: function () {
      this.allowSlideNext = true;
    },
    slideChange: function () {
      this.allowSlidePrev = !this.isBeginning;
      this.allowSlideNext = !this.isEnd;
    },
  },
});

// Global variable to keep track of the active page
let activePage = 1;

// Function to update active class
function updateActiveClass() {
  const updateClass = (selector, className) => {
    document.querySelectorAll(selector).forEach((button, index) => {
      button.classList.toggle(className, index === activePage - 1);
    });
  };

  updateClass('.navbtn', 'active');
  updateClass('.navbtn-popup', 'active-popup');
}

// Function to switch pages
function switchPage(pageNumber) {
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const video = document.getElementById('video1');

  page1.style.display = pageNumber === 1 ? 'block' : 'none';
  page2.style.display = pageNumber === 2 ? 'block' : 'none';

  if (pageNumber === 1) {
    video.pause();
  }

  activePage = pageNumber;
  updateActiveClass();
}

// Function to handle burger menu button click event
function handleBurgerMenuClick() {
  const burgerMenu = document.querySelector('.popup-conteiner');
  const overlay = document.querySelector('.overlay');
  burgerMenu.style.display = 'flex';
  overlay.style.display = 'block';
}

// Function to handle close button click event
function handleCloseButtonClick() {
  const burgerMenu = document.querySelector('.popup-conteiner');
  const overlay = document.querySelector('.overlay');
  burgerMenu.style.display = 'none';
  overlay.style.display = 'none';
}

// Add event listeners
document
  .querySelector('#menuIcon')
  .addEventListener('click', handleBurgerMenuClick);
document
  .querySelector('.close_button')
  .addEventListener('click', handleCloseButtonClick);
window.addEventListener('resize', updateActiveClass);

// Add event listeners for page navigation
['.navbtn', '.navbtn-popup'].forEach((selector) => {
  document.querySelectorAll(selector).forEach((button, index) => {
    button.addEventListener('click', () => switchPage(index + 1));
  });
});

// ---------- see more -----------
function resetText() {
  const secondPart = document.getElementById('second-part');
  const button = document.querySelector('.see-more button');

  secondPart.classList.add('hidden');
  button.textContent = 'ვრცლად';
}

window.addEventListener('resize', function () {
  if (window.innerWidth >= 481) {
    resetText();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  resetText();
});

// ---------------------------
function toggleText() {
  const secondPart = document.getElementById('second-part');
  const button = document.querySelector('.see-more button');

  if (secondPart.classList.contains('hidden')) {
    secondPart.classList.remove('hidden');
    button.textContent = 'აკეცვა';
  } else {
    secondPart.classList.add('hidden');
    button.textContent = 'ვრცლად';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
