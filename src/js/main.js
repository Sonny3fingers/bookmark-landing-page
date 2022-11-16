// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// import hero image
import heroImage from "../images/illustration-hero.svg";

let hamburgerMenu = document.querySelector(".hamburger-menu");
let logo = document.querySelector(".logo");
const mobileMenu = document.querySelector(".mobile-menu");
const heroImageDIV = document.querySelector(".hero-image");

// Add hero image
window.addEventListener("DOMContentLoaded", () => {
  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("img-fluid");
  heroImageDIV.append(image);
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
  } else {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  }
});
