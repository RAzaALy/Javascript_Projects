const container = document.getElementById("container");

const SQUARES = 500
for(let i = 0 ; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('squares');
    square.addEventListener('mouseover' , () => setColor(square))
    square.addEventListener('mouseleave' , () => removeColor(square))
    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background =  '#1d1d1d';
    element.style.boxShadow = '0 0 .2rem #000'
}


function getRandomColor(){
    const components = 'a1b2c3d4f5678e9'
    let color = "#"
    for(let i = 1;i<=6;i++){
        color += components[Math.floor(Math.random() * components.length)]
    }
    return color
}