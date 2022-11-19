// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// import images
import heroImage from "../images/illustration-hero.svg";
import featuresImage1 from "../images/illustration-features-tab-1.svg";
import featuresImage2 from "../images/illustration-features-tab-2.svg";
import featuresImage3 from "../images/illustration-features-tab-3.svg";

let hamburgerMenu = document.querySelector(".hamburger-menu");
let logo = document.querySelector(".logo");
const mobileMenu = document.querySelector(".mobile-menu");
const heroImageDIV = document.querySelector(".hero-image");
const featuresList = document.querySelector(".features-list");
const featuresItems = featuresList.querySelectorAll(".features-item");
const featuresImgDOM_1 = document.querySelector(".features-img-1");
const featuresImgDOM_2 = document.querySelector(".features-img-2");
const featuresImgDOM_3 = document.querySelector(".features-img-3");
const featuresSlides = document.querySelectorAll(".slide");

// const slides = document.querySelectorAll(".slide");

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
  } else {
    return;
  }
});
// features section
// list.addEventListener("click", (event) => {
//   if (event.target.classList.contains("active")) {
//     return;
//   } else {
//     for (const item of items) {
//       item.classList.remove("active");
//     }
//     event.target.classList.add("active");
//     slides.forEach((slide) => {
//       if (event.target.className.includes(slide.id)) {
//         slide.classList.add("active");
//       } else {
//         slide.classList.remove("active");
//       }
//     });
//   }
// });

// Add hero image
window.addEventListener("DOMContentLoaded", () => {
  provideDOMImage(heroImage, heroImageDIV);
  provideDOMImage(featuresImage1, featuresImgDOM_1);
  provideDOMImage(featuresImage2, featuresImgDOM_2);
  provideDOMImage(featuresImage3, featuresImgDOM_3);
});
// provide DOM images
function provideDOMImage(img, elementDOM) {
  // Check for DIV dom element or img dom element
  if (elementDOM.tagName === "DIV") {
    const image = document.createElement("img");
    image.src = img;
    image.classList.add("img-fluid");
    elementDOM.append(image);
  } else {
    elementDOM.src = img;
    elementDOM.classList.add("img-fluid");
  }
}
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
