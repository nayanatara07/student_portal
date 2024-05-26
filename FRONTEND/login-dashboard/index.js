const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const body = document.body;

menuBtn.addEventListener('click', () => {
   sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    if(username) {
        document.getElementById("usernamePlaceholder").textContent = username;
    }
});
