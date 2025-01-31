// mobile view menu bar icon
const menuBarIcon = document.querySelector('#menu-bar-icon');
const navLinks = document.querySelector('.nav-links');

// toggle nav links menu on click 
menuBarIcon.onclick = () => {
    navLinks.classList.toggle('active');
}