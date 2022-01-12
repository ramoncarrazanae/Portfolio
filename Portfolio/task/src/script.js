let openWindow  = document.querySelectorAll(".open-window");
const closeWindow = document.querySelector(".close");
const windowMod = document.querySelector(".window");

closeWindow.addEventListener("click", function (){
    windowMod.classList.remove("show");
})

openWindow.forEach(item => {
    item.addEventListener("click", function (){
        windowMod.classList.add("show");
    })
})

const hamburger = document.querySelector(".hamburguer-menu");
const hamburgerMenu = document.getElementById("hamburger");
hamburger.addEventListener("click", function (){
    if (hamburgerMenu.style.visibility === "hidden") {
        console.log("Hello");
        hamburgerMenu.style.visibility = "visible";
    } else {
        hamburgerMenu.style.visibility = "hidden";
    }
});

