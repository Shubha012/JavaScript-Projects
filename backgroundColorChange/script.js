
// METHOD 1 --- HAVING ONLY NUM
// function generateColorCode(){
//     // console.log(Math.floor(Math.random()*1000000))
//     let color = '#' + Math.floor(Math.random()*1000000)
//     console.log(color)
//     console.log(typeof color)

//     return color;
// }


// METHOD 2 --- CONTAINS ALPHANUMERIC HEXA CODE 
function generateColorCode(){
    let color = '#'
    let array = 'ABCDEF0123456789'

    for(let i=0; i<6; i++){
        let ind = Math.floor(Math.random() * (16))
        color += array[ind];
    }

    return color
}

function changeColor(){
    let color = generateColorCode();

    let body = document.querySelector('body')
    let hexCode = document.querySelector('h3')
    body.style.backgroundColor = color
    hexCode.innerHTML = color;
}

document.querySelector('button').addEventListener('click', changeColor);