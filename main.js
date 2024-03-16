// -------swiper-slider-----
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

// -------swiper-workers-card-slider--------
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
      if (this.isBeginning) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }

      if (this.isEnd) {
        this.allowSlideNext = false;
      } else {
        this.allowSlideNext = true;
      }
    },
  },
});

// Global variable to keep track of the active page
let activePage = 1;

// Function to update active class
function updateActiveClass() {
  const navButtons = document.querySelectorAll('.navbtn');
  const navPopupButtons = document.querySelectorAll('.navbtn-popup');

  // Update nav buttons
  navButtons.forEach((button, index) => {
    button.classList.toggle('active', index === activePage - 1);
  });

  // Update nav popup buttons
  navPopupButtons.forEach((button, index) => {
    button.classList.toggle('active-popup', index === activePage - 1);
  });
}

// Function to switch pages
function switchPage(pageNumber) {
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const video = document.getElementById('video1');

  if (pageNumber === 1) {
    page2.style.display = 'none';
    page1.style.display = 'block';
    video.pause();
  } else if (pageNumber === 2) {
    page1.style.display = 'none';
    page2.style.display = 'block';
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
document.querySelectorAll('.navbtn').forEach((button, index) => {
  button.addEventListener('click', () => switchPage(index + 1));
});
document.querySelectorAll('.navbtn-popup').forEach((button, index) => {
  button.addEventListener('click', () => switchPage(index + 1));
});
