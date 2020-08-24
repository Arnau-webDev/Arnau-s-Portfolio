
// Select DOM Items

const header = document.getElementById("header");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");


// Highlight LI that refers to the page beeing seen by the user

for (const link of navLinks) {
    link.addEventListener("click", (e) => {
        if (link == e.target) {
            navLinks.forEach((link) => link.classList.remove("current"));
            e.target.classList.add("current");
        }
    })
}

// Set initial state of the menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        if(screen.width > 600){
            header.style.width = "350px";
        }
        else {
            header.style.width = "100vw";
        }
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");

        navItems.forEach(item => {
            item.classList.add("show");
        });

        // Set Menu State
        showMenu = true;

    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");

        navItems.forEach(item => {
            item.classList.remove("show");
        });

        navLinks.forEach((link) => link.classList.remove("current"));

        // Set Menu State
        showMenu = false;

        setTimeout(() => {
            header.style.width = "50px";
        }, 500);
    }
}