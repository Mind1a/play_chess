// -------swiper-slider-----
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,

  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------navbar-pages-------

function goToPage2() {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let video = document.getElementById("video1");

  page1.style.display = "none";
  page2.style.display = "block";
}

// Function to switch to page 1
function goToPage1() {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let video = document.getElementById("video1");

  page2.style.display = "none";
  page1.style.display = "block";

  video.pause();
}

// ----------navbar-hovers------

document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".navbtn");
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      navButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

// ----------popup----------
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".burger-menu button");
  const popupContainer = document.querySelector(
    ".burger-menu .popup-conteiner"
  );
  const closeButton = document.querySelector(".burger-menu .close_button");
  function togglePopup() {
    if (
      popupContainer.style.display === "none" ||
      popupContainer.style.display === ""
    ) {
      popupContainer.style.display = "flex";
      burgerMenuButton.style.display = "none";
    } else {
      popupContainer.style.display = "none";
      burgerMenuButton.style.display = "block";
    }
  }

  burgerMenuButton.addEventListener("click", togglePopup);

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
    burgerMenuButton.style.display = "block";
  });
});

// ----------popup navbar-hovers-----------
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".navbtn-popup");
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      navButtons.forEach((btn) => {
        btn.classList.remove("active-popup");
      });
      this.classList.add("active-popup");
    });
  });
});

function popupgoToPage2() {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let video = document.getElementById("video1");

  page1.style.display = "none";
  page2.style.display = "block";
}

// Function to switch to page 1
function popupgoToPage1() {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let video = document.getElementById("video1");

  page2.style.display = "none";
  page1.style.display = "block";

  video.pause();
}

// ---------- see more -----------
function resetText() {
  const secondPart = document.getElementById("second-part");
  const button = document.querySelector(".see-more button");

  secondPart.classList.add("hidden");
  button.textContent = "ვრცლად";
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 481) {
    resetText();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  resetText();
});

// ---------------------------
function toggleText() {
  const secondPart = document.getElementById("second-part");
  const button = document.querySelector(".see-more button");

  if (secondPart.classList.contains("hidden")) {
    secondPart.classList.remove("hidden");
    button.textContent = "აკეცვა";
  } else {
    secondPart.classList.add("hidden");
    button.textContent = "ვრცლად";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
