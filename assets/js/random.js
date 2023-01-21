// Initialize variables
var currentQuestion = 0;
var score = 0;
var highscores = [];

// Function to display the first question when the "Start" button is pressed
function startQuiz() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  showQuestion();
}

// Function to display the current question and answers
function showQuestion() {
  var question = questions[currentQuestion];
  document.getElementById("question").innerHTML = question.question;
  document.getElementById("answer1").innerHTML = question.answers.a;
  document.getElementById("answer2").innerHTML = question.answers.b;
  document.getElementById("answer3").innerHTML = question.answers.c;
  document.getElementById("answer4").innerHTML = question.answers.d;
}

// Function to check the selected answer and move to the next question
function checkAnswer() {
  var userAnswer = document.querySelector('input[name="answer"]:checked').value;
  if (userAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    showScore();
  } else {
    showQuestion();
  }
}

// Function to display the final score and option to save the highscore
function showScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("score-container").style.display = "block";
  document.getElementById("final-score").innerHTML = "Your final score is: " + score + " out of " + questions.length;
}

// Function to save the highscore
function saveHighscore() {
  var initial = document.getElementById("initials").value;
  highscores.push({initials: initial, score: score});
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });
  highscores.splice(5);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  showHighscores();
}

// Function to display the highscores
function showHighscores() {
  document.getElementById("score-container").style.display = "none";
  document.getElementById("highscores-container").style.display = "block";
  var highscoresList = document.getElementById("highscores-list");
  highscoresList.innerHTML = "";
  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];
    var li =
