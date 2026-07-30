const words = [
    "Front-End Web Developer",
    "Robotics Educator",
    "AI Instructor",
    "Pictoblox Expert",
    "Creative Technologist"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, letterIndex++);
    } else {
        typing.textContent = current.substring(0, letterIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && letterIndex === current.length + 1) {
        deleting = true;
        speed = 1800;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();


// button effect
const buttons = document.querySelectorAll(".primary,.secondary,.nav-btn");

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x",x+"px");
        button.style.setProperty("--y",y+"px");

    });

});