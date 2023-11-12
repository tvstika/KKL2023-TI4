// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});