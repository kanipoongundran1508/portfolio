window.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       Typing Effect
    ============================== */

    const text = "Full Stack Developer";
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


    /* ==============================
       Navbar Slider
    ============================== */

    const icons = document.querySelectorAll(".nav-icon");
    const slider = document.querySelector(".slider");

    icons.forEach((icon, index) => {

        icon.addEventListener("click", () => {

            icons.forEach(i => i.classList.remove("active"));
            icon.classList.add("active");

            // vertical navbar
            slider.style.top = (index * 75) + 20 + "px";

        });

    });


    /* ==============================
       Skills Section Tabs
    ============================== */

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


    /* ==============================
       Show default skill
    ============================== */

    const activeSkill = document.querySelector(".skill-item.active");

    if(activeSkill){
        const target = activeSkill.getAttribute("data-skill");

        contents.forEach(c => c.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    }


    /* ==============================
       Skill Icon Description Switch
    ============================== */

    const iconBoxes = document.querySelectorAll(".icon-box");

    iconBoxes.forEach(box => {

        box.addEventListener("click", () => {

            const parent = box.closest(".content");

            parent.querySelectorAll(".icon-box").forEach(i => i.classList.remove("active"));
            box.classList.add("active");

            parent.querySelectorAll(".desc").forEach(d => d.classList.remove("active"));

            const target = box.getAttribute("data-desc");
            parent.querySelector("#" + target).classList.add("active");

        });

    });

});