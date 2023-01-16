// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}


//contact button
const scriptURL = 'https://script.google.com/macros/s/AKfycbzsD9--zAuZYC7J-sz4ShwsMSk8Ee8bK7ascbjad4vILnEgZYy0y9uw8k_a3DBx_DWwvw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Thanks for messaging!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})