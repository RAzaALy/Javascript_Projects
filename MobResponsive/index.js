const color = () => {
    const components = 'abcdef123456789'
    let colors = '#'
    for(let i =  1 ; i<=6 ; i++){
        colors += components[Math.floor(Math.random() * components.length)]
    }

    return colors
}

const brad = document.querySelector('.brand')

brad.innerHTML = brad.innerText
.split('')
.map((letter,idx) => `<span style = ' color : ${color()}'>${letter}</span>`)
.join('')

function colorTrick(){

    const spans = document.querySelectorAll('span')
    spans.forEach(span =>{
        span.style.color = color()

    })
    

}
    





function companyColor(){

    const color = ['#9a4967' , "#787464" , "#8e576e"  , "#895183","#a6553a" , "#57311a;"]
    
    const company = document.querySelector('.companyInfo')
    const button = document.getElementById('button');

    let choseColor = color[Math.floor(Math.random() * color.length)]

    button.style.backgroundColor = choseColor
    
    company.style.backgroundColor = choseColor
}


setInterval(() => {
    colorTrick()
}, 300);

setInterval(() => {
    companyColor()
}, 1000);