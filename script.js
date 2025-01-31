// mobile view menu bar icon
const menuBarIcon = document.querySelector('#menu-bar-icon');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a'); 

// toggle nav links menu on click 
menuBarIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// close menu after user selects menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close the menu
    });
});