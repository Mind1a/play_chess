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
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var video = document.getElementById("video1");

  page1.style.display = "none";
  page2.style.display = "block";

  if (!video.paused && video.currentTime > 0 && !video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

// Function to switch to page 1
function goToPage1() {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var video = document.getElementById("video1");

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
