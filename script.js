window.addEventListener("DOMContentLoaded", () => {

    // typing effect
    const text = "Full Stack Developer_";
    let i = 0;
    const speed = 40;
    const typing = document.querySelector(".typing");

    function type(){
        if(i < text.length){
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(type,speed);
        }
    }
    if(typing) type();

// Navbar sliding
const icons = document.querySelectorAll(".nav-icon");
const slider = document.querySelector(".slider");

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {

    // remove active from all
    icons.forEach(i => i.classList.remove("active"));

    // add active to clicked
    icon.classList.add("active");

    // move slider
    slider.style.top = (index * 75) + 20 + "px";
  });
});


// Skills tab switch
const skillItems = document.querySelectorAll(".skill-item");
const contents = document.querySelectorAll(".content");

skillItems.forEach(item => {
    item.addEventListener("click", () => {

        skillItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        contents.forEach(c => c.classList.remove("active"));

        const target = item.getAttribute("data-skill");
        document.getElementById(target).classList.add("active");
    });
});

});

// Show default active skill content on load
window.addEventListener("DOMContentLoaded", () => {

    const activeSkill = document.querySelector(".skill-item.active");

    if (activeSkill) {
        const target = activeSkill.getAttribute("data-skill");
        document.querySelectorAll(".content").forEach(c => {
            c.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");
    }

});

// icon click switch
document.addEventListener("click", function(e){

    if(e.target.closest(".icon-box")){
        const box = e.target.closest(".icon-box");
        const parent = box.closest(".content");

        parent.querySelectorAll(".icon-box").forEach(i=>i.classList.remove("active"));
        box.classList.add("active");

        const target = box.getAttribute("data-desc");

        parent.querySelectorAll(".desc").forEach(d=>d.classList.remove("active"));
        parent.querySelector("#"+target).classList.add("active");
    }

});

document.addEventListener("click", function(e){

    if(e.target.closest(".icon-box")){
        const box = e.target.closest(".icon-box");
        const parent = box.closest(".content");

        parent.querySelectorAll(".icon-box").forEach(i=>i.classList.remove("active"));
        box.classList.add("active");

        parent.querySelectorAll(".desc").forEach(d=>{
            d.classList.remove("active");
        });

        const target = box.getAttribute("data-desc");
        parent.querySelector("#"+target).classList.add("active");
    }

});