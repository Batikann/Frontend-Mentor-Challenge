const shareBtn=document.querySelector('.share-icon-div');
const tooltip=document.querySelector('.tooltip-container');

shareBtn.addEventListener('click',()=>{
   tooltip.classList.toggle('opacity')
})
