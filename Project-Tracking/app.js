const menuBtn = document.getElementById("menu-button");
const navbar = document.querySelector("nav");
const menuBtnImg=document.querySelector('.menu');
const close=document.querySelector('.close');


menuBtn.addEventListener("click", () => {
 if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    close.style.display="none"
    menuBtnImg.style.display="block"
 }
 else{
    navbar.classList.add("open");
    close.style.display="block"
    menuBtnImg.style.display="none"
 }

});

