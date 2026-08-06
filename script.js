/* ===================================================
   FINNY PORTFOLIO
   SCRIPT.JS
===================================================*/

/*==================== LOADER ====================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/*==================== CUSTOM CURSOR ====================*/

const cursor = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/*==================== SCROLL PROGRESS ====================*/

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("scroll-progress").style.width =
        progress + "%";

});


/*==================== TYPING EFFECT ====================*/

const roles = [

    "Software Engineer",

    "Backend Developer",

    "Java Developer",

    "Spring Boot Developer",

    "Distributed Systems Engineer",

    "Kafka & Spark Enthusiast",

    "System Design Learner"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)

                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/*==================== COUNTERS ====================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let value = 0;

            const increment = target / 100;

            const update = () => {

                value += increment;

                if (value < target) {

                    counter.innerText = Math.ceil(value);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==================== SCROLL REVEAL ====================*/

const hiddenElements = document.querySelectorAll(

    ".stat-card,.timeline-card,.skill-card,.project-card,.certificate-card,.achievement-card,.learning-card,.contact-card,.service-card,.social-box,.education-card,.highlight-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

hiddenElements.forEach(el => {

    revealObserver.observe(el);

});


/*==================== ACTIVE NAV ====================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current)

            link.classList.add("active");

    });

});


/*==================== MOBILE MENU ====================*/

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("showMenu");

});


/*==================== PARALLAX HERO ====================*/

window.addEventListener("mousemove", (e) => {

    const profile = document.querySelector(".profile-wrapper");

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    profile.style.transform =

        `rotateY(${-x}deg) rotateX(${y}deg)`;

});


/*==================== BUTTON RIPPLE ====================*/

const buttons = document.querySelectorAll(".btn,.project-btn,.submit-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.clientX -

            this.getBoundingClientRect().left -

            radius + "px";

        circle.style.top = e.clientY -

            this.getBoundingClientRect().top -

            radius + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple)

            ripple.remove();

        this.appendChild(circle);

    });

});


/*==================== CONTACT FORM ====================*/

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(

            "Thank you! This form will be connected to EmailJS in the next version."

        );

    });

}


/*==================== CONSOLE MESSAGE ====================*/

console.log("%cWelcome Recruiter 👋",

    "color:#38BDF8;font-size:22px;font-weight:bold;");

console.log(

    "%cDesigned & Developed by Finny Novel Balagam",

    "color:#8B5CF6;font-size:14px;"
);


/*==================== EASTER EGG ====================*/

let logoClicks = 0;

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {

    logoClicks++;

    if (logoClicks === 5) {

        alert(

            "🚀 Developer Mode Activated"

        );

        logoClicks = 0;

    }

});


/*==================== YEAR ====================*/

const year = document.getElementById("year");

if (year)

    year.textContent = new Date().getFullYear();


/*==================== FINISHED ====================*/

console.log("Portfolio Loaded Successfully 🚀");