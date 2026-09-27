let questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Tool Markup Language"
        ],

        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",

        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],

        answer: 1
    },

    {
        question: "Which language is used to make web pages interactive?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 2
    },

    {
        question: "Which symbol is used for comments in JavaScript?",

        options: [
            "//",
            "<!-- -->",
            "#",
            "/* only */"
        ],

        answer: 0
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        options: [
            "variable",
            "let",
            "define",
            "int"
        ],

        answer: 1
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",

        options: [
            "<p>",
            "<h1>",
            "<br>",
            "<para>"
        ],

        answer: 0
    },

    {
        question: "Which property is used to change text color in CSS?",

        options: [
            "background",
            "font-color",
            "color",
            "text-color"
        ],

        answer: 2
    },

    {
        question: "Which method is used to select an element by ID?",

        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "findElement()"
        ],

        answer: 0
    },

    {
        question: "Which HTML tag is used to create a button?",

        options: [
            "<button>",
            "<btn>",
            "<inputbutton>",
            "<click>"
        ],

        answer: 0
    },

    {
        question: "Which keyword is used to define a function in JavaScript?",

        options: [
            "function",
            "method",
            "define",
            "fun"
        ],

        answer: 0
    }

];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let student = "";

let timeLeft = 60;

let timer;


// Start Exam

function startExam() {

    student =
        document.getElementById("studentName").value.trim();


    if (student === "") {

        alert("Please enter your name!");

        return;
    }


    document.getElementById("startScreen").style.display =
        "none";

    document.getElementById("examScreen").style.display =
        "block";


    showQuestion();

    startTimer();
}


// Display Question

function showQuestion() {

    let question = questions[currentQuestion];


    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;


    document.getElementById("question").textContent =
        question.question;


    let optionsDiv =
        document.getElementById("options");


    optionsDiv.innerHTML = "";


    selectedAnswer = null;


    question.options.forEach(function(option, index) {

        let div = document.createElement("div");

        div.classList.add("option");

        div.textContent = option;


        div.onclick = function() {

            selectOption(div, index);

        };


        optionsDiv.appendChild(div);

    });

}


// Select Answer

function selectOption(element, index) {

    let allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(function(option) {

        option.classList.remove("selected");

    });


    element.classList.add("selected");

    selectedAnswer = index;
}


// Next Question

function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please select an answer!");

        return;
    }


    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishExam();

    }
}


// Timer

function startTimer() {

    timer = setInterval(function() {

        timeLeft--;

        document.getElementById("time").textContent =
            timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            finishExam();

        }

    }, 1000);
}


// Finish Exam

function finishExam() {

    clearInterval(timer);


    document.getElementById("examScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "block";


    let percentage =
        (score / questions.length) * 100;


    document.getElementById("resultName").textContent =
        student;


    document.getElementById("score").textContent =
        score + " / " + questions.length;


    document.getElementById("percentage").textContent =
        percentage + "%";


    if (percentage >= 40) {

        document.getElementById("resultMessage").textContent =
            "🎉 PASS";

    } else {

        document.getElementById("resultMessage").textContent =
            "❌ FAIL";

    }

}


// Restart Exam

function restartExam() {

    clearInterval(timer);


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 60;

    student = "";


    document.getElementById("time").textContent =
        "60";


    document.getElementById("studentName").value =
        "";


    document.getElementById("resultScreen").style.display =
        "none";


    document.getElementById("startScreen").style.display =
        "block";

}