const buttonStart = document.getElementById("start");
const timerShow = document.getElementById("time");

const questionArea = document.getElementById("questions");
const questionText = document.getElementById("question-title");
const questionChoices = document.getElementById("choices");
let qNum = 0;

purple = "#8570a5";

// The startGame function is called when the start button is clicked

// Displaying a question:

// Get Question Information
// Chooses one of the saved questions and returns all the options within it, Q Number can be changed when calling the function

function getQuestion(qNum) {
  questionText.innerText = "";
  choices.innerHTML = "";

  let question = Questions[qNum];

  questionText.innerText = question.question;

  let questionList = document.createElement("div");
  questionChoices.appendChild(questionList);

  question.answers.forEach(function (question) {
    let questionButton = document.createElement("button");
    questionButton.textContent = question;
    questionList.appendChild(questionButton);

    questionButton.addEventListener("click", function (event) {
      const isAnswerCorrect = correctAnswers.includes(event.target.innerText);

      qNum++;
      getQuestion(qNum);

      if (!isAnswerCorrect) {
        console.log("false Answer");
        // subtract time from timer here
      }
    });
  });
}

getQuestion(qNum);

function startGame() {
  isWin = false;
  timerCount = 120;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // renderBlanks()
  // startTimer()
}

// Dynamically created Question ELements - <h3> Question Text + <li> elements in an <ul>

// function createQuestion() {

questionArea.setAttribute("class", "visible");

let buttonSubmit = document.createElement("BUTTON");
buttonSubmit.classList.add("submit");
buttonSubmit.textContent = "Next";

questionArea.append(buttonSubmit);

function selectAnswer() {
  // let listElements = questionArea.querySelectorAll("li");
  //     for (let k = 0, k < listElements.listElements.length: k++) {
  //         listElements[k].addEventListener("click", function() {
  //             for (let j in listElements) {
  //                 listElements[j].style.color = "grey";
  //             }
  //             this.style.color = "purple";
  //         });
  //     }
  //   li1.style.color = "white";
  //   li1.style.backgroundColor = "purple";
}

// object.addEventListener("click", myScript);
// setAttribute('data-foo', 'Hello World!')
// li1.addEventListener("click", selectAnswer)
// li2.addEventListener("click", selectAnswer)
// li3.style.color = "white";
// li3.style.backgroundColor = "purple";

// selectAnswer()

// };

// // Questions.forEach(createQuestion(qNum))
// createQuestion();

// event.preventDefault don't forget

// Attach event listener to start button to call startGame function on click
buttonStart.addEventListener("click", startGame);
