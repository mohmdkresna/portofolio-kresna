//  Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Contact Form

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit",function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url,{
        method: "POST",
    body: formData,
    mode: "no-cors",
    })
        .then(() => {
        // url thank you
        window.location.href = "thankyou.html";
    })
    .catch((e) => alert("Error occured"));
})