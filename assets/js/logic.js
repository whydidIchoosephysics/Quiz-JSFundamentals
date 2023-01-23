buttonStart = document.getElementById("start");
timerShow = document.getElementById("time");

questionArea = document.getElementById("questions");
questionText = document.getElementById("question-title");
questionChoices = document.getElementById("choices");

purple = "#8570a5";


// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 120;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // renderBlanks()
    // startTimer()
};






// Displaying a question:

let qNum = 0;

// Get Question Information
// Chooses one of the saved questions and returns all the options within it, Q Number can be changed when calling the function

function getQuestion(qNum) {
    let question = Questions[qNum];

    let questionText = question.question;
    let ans1 = question.answer1;
    let ans2 = question.answer2;
    let ans3 = question.answer3;
    let ans4 = question.answer4;
    let corr = question.correct;


    return { questionText, ans1, ans2, ans3, ans4, corr };
};

console.log(getQuestion(qNum).questionText, getQuestion(qNum).ans3)
console.log("---")

// Dynamically created Question ELements - <h3> Question Text + <li> elements in an <ul>

// function createQuestion() {

    questionArea.setAttribute("class", "visible");

    let questionList = document.createElement("ol");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");


    questionText.textContent = getQuestion(qNum).questionText;
    li1.textContent = getQuestion(qNum).ans1;
    li2.textContent = getQuestion(qNum).ans2;
    li3.textContent = getQuestion(qNum).ans3;
    li4.textContent = getQuestion(qNum).ans4;

    questionChoices.appendChild(questionList);
    questionList.appendChild(li1);
    questionList.appendChild(li2);
    questionList.appendChild(li3);
    questionList.appendChild(li4);


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

        li1.style.color = "white";
        li1.style.backgroundColor = "purple";
    };


    // object.addEventListener("click", myScript);
    // setAttribute('data-foo', 'Hello World!')
    // li1.addEventListener("click", selectAnswer)
    // li2.addEventListener("click", selectAnswer)
    li3.style.color = "white";
    li3.style.backgroundColor = "purple";

    // selectAnswer()

// };



// // Questions.forEach(createQuestion(qNum))
// createQuestion();



// event.preventDefault don't forget


// Attach event listener to start button to call startGame function on click
buttonStart.addEventListener("click", startGame);