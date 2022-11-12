const sideBarDOM=document.querySelector(".sidebar");
const hamburgerDOM=document.querySelector(".hamburger");
const navbarLinks=document.querySelector(".navbar-links");
const iELement=document.querySelector('i');

hamburgerDOM.addEventListener('click',()=>{
    sideBarDOM.classList.toggle("active");
    navbarLinks.classList.toggle('active');
    

})
