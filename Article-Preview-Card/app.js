const shareBtn=document.querySelector('button');
const tooltip=document.querySelector('.tooltip');

shareBtn.addEventListener('click',()=>{
   tooltip.classList.toggle('hidden')
})
