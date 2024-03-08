const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-links");
const icon = menuBtn.querySelector("img");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.src = menu.classList.contains("active") ? "./images/icon-close.svg" : "./images/icon-hamburger.svg";
    document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
});