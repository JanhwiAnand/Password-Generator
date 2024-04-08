const password=document.querySelector('#password');
const background=document.querySelector('.background');
password.addEventListener('input',(e)=>{
    const input=e.target.value;
    const length=input.length;
    const blurval=(20-1.5*length);
    background.style.filter=`blur(${blurval}px)`;
})