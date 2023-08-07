const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav");


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});