const form = document.getElementById('form');
const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('Closebtn');

closebtn.addEventListener('click',()=>{
    form.style.display='none';
})

openbtn.addEventListener('click',()=>{
    form.style.display='block';
})