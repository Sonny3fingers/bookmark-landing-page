// Import our custom CSS
import "./scss/styles.scss";
// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";
// import "bootstrap/js/dist/util";
import "bootstrap/js/dist/collapse";

let hamburgerMenu = document.querySelector(".hamburger-menu");
let logo = document.querySelector(".logo");
const mobileMenu = document.querySelector(".mobile-menu");
const featuresList = document.querySelector(".features-list");
const featuresItems = featuresList.querySelectorAll(".features-item");
const featuresSlides = document.querySelectorAll(".slide");
const preloaderWrapper = document.querySelector(".preloader-wrapper");

// Window loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    preloaderWrapper.classList.add("fade-out-animation");
  }, 1000);
});

// features list add active class to item
featuresList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("active")) {
    for (const item of featuresItems) {
      item.classList.remove("active");
    }
    e.target.classList.add("active");
    for (const slide of featuresSlides) {
      if (e.target.className.includes(slide.id)) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    }
  }
});
// Check for window resize and remove all reset all classes for mobile navigation
window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    hamburgerMenu.classList.remove("is-active");
    logo.classList.remove("logo-mobile");
    mobileMenu.classList.remove("show-mobile-menu");
    mobileMenu.classList.remove("hide-mobile-menu");
  }
});
// Hamburger menu add event listener to show and hide mobile menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("is-active");
  logo.classList.toggle("logo-mobile");
  if (hamburgerMenu.classList.contains("is-active")) {
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.add("show-mobile-menu");
    // Prevent scrolling
    document.body.style.overflowY = "hidden";
  } else {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
    // Enable scrolling
    document.body.style.overflowY = "visible";
  }
});
