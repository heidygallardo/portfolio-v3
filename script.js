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

// contact form
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});