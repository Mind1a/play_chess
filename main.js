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
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

function goToPage1() {
  document.getElementById("page1").style.display = "block";
  document.getElementById("page2").style.display = "none";
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
