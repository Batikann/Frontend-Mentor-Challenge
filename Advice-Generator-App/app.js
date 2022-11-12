const URL = "https://api.adviceslip.com/advice";
const btn=document.querySelector('.btn');
const advice_numb=document.querySelector('.advice-number');
const p_text=document.querySelector('.p-text');


btn.addEventListener('click',()=>{
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        advice_numb.textContent=`#${data.slip.id}`;
        p_text.textContent=data.slip.advice;
    });
})


