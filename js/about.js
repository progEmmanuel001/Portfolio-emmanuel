const particles = document.getElementById("particles");

for(let i=0;i<40;i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const size = Math.random()*8+2;

    particle.style.width = size+"px";
    particle.style.height = size+"px";

    particle.style.left = Math.random()*100+"%";

    particle.style.animationDuration =
        Math.random()*20+15+"s";

    particle.style.animationDelay =
        Math.random()*10+"s";

    particles.appendChild(particle);

}