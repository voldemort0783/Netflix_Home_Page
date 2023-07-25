const button = document.querySelector('button');
const h1E1 = document.querySelector('h1');
const bgE1 = document.querySelector('section');

button.addEventListener("click", ()=>{
    let color = '#';
    color += Math.random().toString(16).slice(2 ,8);
    bgE1.style.backgroundColor = color;
    h1E1.innerText = color;
    console.log(color)
})