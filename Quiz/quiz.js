(function () {
    const myQuestions = [
        {
            question: "Which sea creature has three hearts?",
            answers: {
                a: "Octopus",
                b: "Blue Whale",
                c: "Sea Turtle"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the Italian word for pie means?",
            answers: {
                a: "Donut",
                b: "pie cake",
                c: "Pizza"
            },
            correctAnswer: "c"
        },
        {
            question: "In which city is Minar-e-pakistan situated?",
            answers: {
                a: "Karachi",
                b: "Lahore",
                c: "Faislabad"
            },
            correctAnswer: "b"
        }
    ];
    function buildQuiz() {
        //we'll need to store html output:
        const output = [];
        //for each loop for questions:
        myQuestions.forEach((currentQuestion, questionNumber) => {
            //we'll want to store the answer choice
            const answer = [];
            //for each available answers:
            for (letter in currentQuestion.answers) {
                //add an html radio button
                answer.push(
                    `<label for="radioBtn" id="${questionNumber}${letter}">
                        <input class="w3-radio" type="radio" name="question${questionNumber}" value="${letter}" id="${questionNumber}">
                        ${letter}:
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //Added this question and its answer to the output
            output.push(
                `<div class="slide">
                    <div class="question">${currentQuestion.question}</div>
                    <div class="answers">${answer.join("")}</div>
                    </div>`
            );
        });
        //finally combine over output list into the string of html and puts into page
        quizContainer.innerHTML = output.join();
    }
    function showResults() {
        //gather answers container form our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        //keep track of user answers
        let numCorrect = 0;
        //for each question
        myQuestions.forEach((currentQuestion, questionNumber) => {
            //for selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `label input[name="question${questionNumber}"]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const answerID = (answerContainer.querySelector(selector) || {}).id;
            const selector1 = `label [id="${answerID}"]`;//select user's answer
            var answerElem = (answerContainer.querySelector(selector1));
            const selector2 = `label[id="${questionNumber}${currentQuestion.correctAnswer}"]`;
            var answerElem1 = answerContainer.querySelector(selector2);
            //if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                //add to the number of correct answers
                numCorrect++;
                //color the answer green
                // console.log(answerElem);
                answerElem.style.background = "green";
                answerElem.style.fontweight = "900";
            } 
            else {
                //if answer is wrong or blank
                //color the answer red
                answerElem1.style.color = "black";
                answerElem1.style.background = "red";
                answerElem1.style.fontweight = "900";
                // console.log(answerContainers);

            }
        });
        //show number of correct answer out of total:
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = 'none';
        }
    }
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    //display quiz right way
    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    //on submit show Results
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

})();



