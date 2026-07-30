const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");
        navLinks.classList.toggle("show");

    });

}

document.querySelectorAll("#navLinks a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("active");
        navLinks.classList.remove("show");

    });

});