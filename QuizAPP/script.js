ques = ["Which of the following is Markup language", "Which is not a fruit", "Find wild animal"]

ans = ["HTML", "Potato", "Lion"]

options = [["C++", "Python", "HTML", "JS"], ["Potato", "Apple", "Mango", "Banana"], ["Cat", "Cow", "Dog", "Lion"]];

const len = ques.length;
const parent = document.querySelector('.root');
let i = 0;
let score = 0;


const div = document.createElement('div')
div.id = "QuestionBox"
div.style.alignItems = "center"
// div.style.margin = "80px"

const h3 = document.createElement('h3')
h3.id = "Question"

const list = document.createElement('ul')
list.id = "options"

const restartBtn = document.createElement('button')
restartBtn.id = "restart"

parent.appendChild(div)
div.appendChild(h3)
div.appendChild(list)
div.appendChild(restartBtn);
restartBtn.style.display = "none"; // hide initially

function addQuestions(){
    list.innerHTML = ""
    h3.innerText = ques[i];    
    for(let op=0; op<4; op++){
        const li = document.createElement('li')
        li.innerText = options[i][op];
        list.appendChild(li)
    }   
}

function showScore(){
    // document.querySelector("h3").remove();
    document.querySelector("#options").remove();

    h3.innerText = `Your total Score = ${score}/${len}`
    div.appendChild(restartBtn)
    restartBtn.style.display = "block"
    restartBtn.innerText = 'Restart';   

}

document.getElementById('start').addEventListener('click', function() {
    document.querySelector('#start').remove() // removes the start button

    addQuestions();
})

document.getElementById('options').addEventListener('click', function(event) {
    const selectedoption = event.target.innerText;
    // console.log(selectedoption)

    if(selectedoption === ans[i]) score++;
    // console.log(score)
    i++;

    if(i<len){
        addQuestions();
    }
    else {
        showScore();
    }
    
})


document.getElementById('restart').addEventListener('click', function() {
    i = 0;
    score = 0;
    // console.log("clicked")
    document.querySelector("#restart").remove()
    div.appendChild(list)
    addQuestions();
})