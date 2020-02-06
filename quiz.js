// Variables for timer, questions, and starting the quiz.
var timer;
var timeLeft = 75;
var score = 0;
var start = document.querySelector("#start");
var replay = document.querySelector("#startAgain");
var Initials = document.querySelector("#Initials");
var questions = document.getElementById("#questionLoop")
var choice0 = document.getElementById("#answer0");
var choice1 = document.getElementById("#answer1");
var choice2 = document.getElementById("#answer2");
var choice3 = document.getElementById("#answer3");
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices0: "strings", choices1: "booleans", choices2: "alerts", choices3: "numbers",
      correct: 'answer2'
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices0: "quotes", choices1: "curly brackets", choices2:"parentheses", choices3:"square brackets",
      correct: 'answer2'
    },
    {
        title: "Arrays in JavaScript can be used to store ______.",
        choicess0: "numbers and strings", choices1: "other arrays", choices2: "booleans", choices3: "all of the above",
        correct: 'answer3'
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices0: "commas", choices1:"curly brackets", choices2:"quotes", choices3:"parentheses",
        correct: 'answer3'
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices0: "JavaScript", choices1:"terminal/bash", choices2:"for loops", choices3:"console log",
        correct: 'answer3'
    },
  ];

// Function that starts the timer.
function whenStart() {
    if (start) {
        start.addEventListener("click", runTimer);
        start.addEventListener("click", console.log("timer is on!"));
        }
    }
    whenStart();

// Q&A Structure
let runningQuestionIndex= 0;

function showQuestions() {
    let q = questions[runningQuestionIndex];
    questionLoop.innerHTML = "<h3>" + q.title + "<h3>";
    answer0.innerHTML = q.choices0;
    answer1.innerHTML = q.choices1;
    answer2.innerHTML = q.choices2;
    answer3.innerHTML = q.choices3;
}


for (var i = 0; i <= questions.length; i++) {
    showQuestions(); 
}

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        console.log("Correct!");
        runningQuestionIndex++;
        accuracy.innerHTML="Correct!";

        if(runningQuestionIndex > 4) {
            stopQuiz();
            clearInterval(time);
            localStorage.setItem("user", JSON.stringify(user));
     console.log(user);
            localStorage.setItem(user, timeLeft);

        } else {
            showQuestions();
        }

    } else {
        timeLeft -= 10; 
        console.log("Incorrect!");
        accuracy.innerHTML="Incorrect! Try again.";
    }
}


function stopQuiz () {
    console.log("No more questions!");
     $(".newQuestion").css("display", "none");
     $(".finalResults").css("display", "block");
     yourResults.innerHTML = timeLeft + 1;
}



// Shows the time decreasing by 1 second. Hides the original div. Displays first question. Displays message when time is up.
function runTimer() {
    time = setInterval(function() {
    countdown.innerHTML=timeLeft;
    timeLeft--;
     $(".quizIntro").css("display", "none");
    $(".newQuestion").css("display", "block");

    if(timeLeft <= -1) {
        // clearInterval(time);
        alert("Time is Up!");
        $(".newQuestion").css("display", "none");
        $(".finalResults").css("display", "block");
        }
        
    },1000);
}
var InitialsInput = document.querySelector("#Initials").value;

var user = {
    Initials: InitialsInput.value,
    Score: timeLeft,
  };

  console.log(user);
  localStorage.setItem(user, timeLeft + 1);
