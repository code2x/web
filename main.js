/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["SQA Engineer", "Manual QA", "Automation Engineer", "QA Lead", "QA Analyst"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function downloadCV() {
    // Replace 'M.Salman%20Resume.pdf' with the actual name of your CV file
    var cvUrl = 'M.Salman%20Resume.pdf';

    // Create a temporary link element
    var link = document.createElement('a');

    // Set the href attribute with the file URL
    link.href = cvUrl;

    // Set the download attribute with the desired file name
    link.download = 'M.Salman%20Resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

function scrollToContact() {
    const contactSection = document.getElementById("contact");

    // Scroll smoothly to the contact section
    contactSection.scrollIntoView({ behavior: "smooth" });
}

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Display a success message or perform additional actions here
        alert('Form submitted successfully!');
    });
});

function downloadCV() {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    var googleFormUrl = 'YOUR_GOOGLE_FORM_URLhttps://docs.google.com/forms/d/e/1FAIpQLSccSifpZ5gn78Rw_UNh7z75kp-JWDqrTpWpED0wSITDwwJvxQ/viewform?usp=sf_link';

    // Open the Google Form link
    window.open(googleFormUrl, '_blank');
}

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Submit the form asynchronously
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        })
            .then(response => {
                // Display a success message or perform additional actions here
                alert('Form submitted successfully!');
            })
            .catch(error => {
                // Handle errors
                console.error('Error submitting form:', error);
            });
    });
});
function downloadCV() {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    var googleFormUrl = 'YOUR_GOOGLE_FORM_URL';

    // Redirect to the Google Form link
    window.location.href = googleFormUrl;
}


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to update the icon based on the current theme
function updateThemeIcon() {
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('uil-sun'); // Remove sun icon
        themeIcon.classList.add('uil-moon');   // Add moon icon
    } else {
        themeIcon.classList.remove('uil-moon'); // Remove moon icon
        themeIcon.classList.add('uil-sun');     // Add sun icon
    }
}

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
    } else {
        document.body.classList.add('light-theme'); // Default theme
    }
    updateThemeIcon(); // Set the correct icon on page load
});

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Save the user's preference in localStorage
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    // Update the icon
    updateThemeIcon();
});

