const heightWidth = document.getElementById('heightWidth');
// const width = document.getElementById('width');
const dispSize = document.getElementById('dispSize');

  
heightWidth.addEventListener("click",() =>{
let height = window.innerHeight;
    let width = window.innerWidth;

    dispSize.innerHTML = `The Screen is Height <mark>${height}</mark>  and Width is 
   <mark>${width}</mark> `;



})