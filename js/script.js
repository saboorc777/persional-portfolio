/* ==========================================
   PORTFOLIO V2
   Abdul Saboor
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1200);

    });

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

    /* ==========================
       DARK / LIGHT MODE
    ========================== */

    const themeBtn = document.getElementById("themeToggle");

    const body = document.body;

    const icon = themeBtn.querySelector("i");

    if(localStorage.getItem("theme") === "light"){

        body.classList.add("light");

        icon.className = "fa-solid fa-sun";

    }

    themeBtn.addEventListener("click",()=>{

        body.classList.toggle("light");

        if(body.classList.contains("light")){

            localStorage.setItem("theme","light");

            icon.className="fa-solid fa-sun";

        }

        else{

            localStorage.setItem("theme","dark");

            icon.className="fa-solid fa-moon";

        }

    });

    /* ==========================
       TYPING EFFECT
    ========================== */

    const typing = document.getElementById("typing");

    const words = [

        "Frontend Developer",

        "Computer Science Student",

        "JavaScript Developer",

        "Creative Web Designer"

    ];

    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;

    function type(){

        const current = words[wordIndex];

        if(!deleting){

            typing.textContent = current.substring(0,letterIndex++);

            if(letterIndex > current.length){

                deleting = true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            typing.textContent = current.substring(0,--letterIndex);

            if(letterIndex===0){

                deleting=false;

                wordIndex++;

                if(wordIndex>=words.length){

                    wordIndex=0;

                }

            }

        }

        setTimeout(type,deleting?60:100);

    }

    type();

    /* ==========================
       SCROLL PROGRESS
    ========================== */

    const progress = document.getElementById("progressBar");

    window.addEventListener("scroll",()=>{

        const total =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

        const progressWidth =

        (window.pageYOffset/total)*100;

        progress.style.width=progressWidth+"%";

    });

    /* ==========================
       SCROLL TO TOP
    ========================== */

    const topBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.classList.add("show");

        }

        else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});
/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
".hero-content, .hero-image, .about-left, .about-right, .skill-card, .project-card, .timeline-item, .certificate-card, .stat-box, .contact-info, .contact-form"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            element.classList.add("active");

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    const section = document.querySelector(".stats");

    if(!section) return;

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const update = ()=>{

                count += increment;

                if(count >= target){

                    counter.innerText = target + "+";

                }

                else{

                    counter.innerText = count;

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

startCounter();

/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.getElementById("cursor");

const blur = document.getElementById("cursorBlur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

});

/* ==========================================
   CURSOR HOVER EFFECT
========================================== */

const hoverItems = document.querySelectorAll(

"a, button, .project-card, .skill-card, .info-card"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1.8)";
        cursor.style.background="rgba(212,175,55,.15)";
        cursor.style.borderColor="#D4AF37";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";
        cursor.style.background="transparent";

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   PARALLAX HERO IMAGE
========================================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =

    `translate(${x}px, ${y}px)`;

});

/* ==========================================
   CARD TILT
========================================== */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2)/18;

        const rotateX = -(y - rect.height/2)/18;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==========================================
   CONTACT FORM (Demo)
========================================== */

/* ==========================
   EMAILJS CONTACT FORM
========================== */

/* ==========================================
   EMAILJS CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        const originalText = button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.sendForm(
            "service_gujvtxr",
            "template_ge70t07",
            this
        )
        .then(function () {

            button.innerHTML = "✅ Message Sent";

            alert("Your message has been sent successfully!");

            contactForm.reset();

            setTimeout(function () {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("Failed to send message. Please try again.");

            button.innerHTML = originalText;
            button.disabled = false;

        });

    });

}





/* ==========================================
   END
========================================== */

console.log(
"%cPortfolio Developed by Abdul Saboor",
"color:#D4AF37;font-size:18px;font-weight:bold;"
);