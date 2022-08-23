const btnS=document.querySelector('#button');

btnS.addEventListener('click',()=>{
    document.body.classList.toggle('dark');  
    btnS.classList.toggle('active');

});