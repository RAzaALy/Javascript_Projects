//popup script:

$(document).ready(function () {
    setTimeout(() => {
        $('#popUp').css('visibility','visible');
    }, 5000);

    $('.submit').click(function(){
            $('#popUp').css('visibility', 'hidden');
    });
});
//Array of object for Questions:\
const quizDb = [
    {
        question: "Q1: What does HTML stand for?",
        a: " Hyper Text Markup Language",
        b: " Hyperlinks and Text Markup Language",
        c: " Home Tool Markup Language",
        d: "Hello Text Markup Language",
        ans: "ans1"
    },
    {
        question: "Q2: What does CSS stand for?",
        a: " Colorful Style Sheets",
        b: " Creative Style Sheets",
        c: " Cascading Style Sheets",
        d: "Computer Style Sheets",
        ans: "ans3"
    },
    {
        question: "Q3: Inside which HTML element do we put the JavaScript?",
        a: "javascript",
        b: "scripting",
        c: "script",
        d: "js",
        ans: "ans3"
    },
    {
        question: 'Q4: What is a correct syntax to output "Hello World" in Python?',
        a: ' print("Hello World");',
        b: ' print("Hello World")',
        c: ' echo("Hello World");',
        d: ' console.log("Hello World");',
        ans: "ans2"
    },
    {
        question: 'Q5: What does PHP stand for?',
        a: "Hypertext Preporcessor",
        b: "Private Home Page",
        c: "Personal Hypertext Processor",
        d: "Public Hypertext Processor",
        ans: "ans1"
    },
    {
        question: 'Q6: What does SQL stand for?',
        a: "Strong Question Language",
        b: "Structured Query Language",
        c: "Structured Question Language",
        d: "Solid Query Language",
        ans: "ans2"
    },
    {
        question: 'Q7: What is a correct syntax to output "Hello World" in JavaScript?',
        a: "print('Hello World');",
        b: "echo('Hello World');",
        c: "System.out.printIn('Hello World');",
        d: "console.log('Hello World');",
        ans: "ans4"
    }

];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answer = document.querySelectorAll('.answer');
const submit = document.querySelector('#submit');
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDb[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let ans;
    answer.forEach((elem) => {
        if (elem.checked) {
            ans = elem.id;
        }
    });
    return ans;
};
const deselectAll = () => {
    answer.forEach((elem) => elem.checked = false);
};

submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    // console.log(checkAnswer);
    if (checkAnswer === quizDb[questionCount].ans) {
        score++;
    }
    if (score === quizDb.length) {
        alert("Congratulations Your Performance is Excellent!!!");
    }
    questionCount++;
    deselectAll();
    if (questionCount < quizDb.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> Your scored ${score}/${quizDb.length} ✌</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});