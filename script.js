const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

navLinks.forEach(n => n.addEventListener("click", closeMenu));

// Optional: Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        closeMenu();
    }
});