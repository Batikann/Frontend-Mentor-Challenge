const btn=document.querySelector('.btn');
const error=document.querySelector('.error');
const input=document.querySelector('.input-box');
const emailRegex = 
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
btn.addEventListener('click',(e)=>{
    if (input.value=="") {
        e.preventDefault();
        error.textContent="Eposta alanı boş geçilemez!"
        error.classList="display-div";
    }
    else if (emailRegex.test(input.value) !=true) {
        e.preventDefault();
        error.textContent="Please provide a valid email address";
        error.classList="display-div";
    }    
})

console.log(input.value);



