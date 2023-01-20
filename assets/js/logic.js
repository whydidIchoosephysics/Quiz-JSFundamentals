buttonStart = document.getElementById("start");
timerShow = document.getElementById("time");

questionArea = document.getElementById("questions");
questionText = document.getElementById("question-title");
questionChoices = document.getElementById("choices");




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


    return { questionText, ans1, ans2, ans3, ans4 };
};

console.log(getQuestion(qNum).questionText, getQuestion(qNum).ans3)

// Dynamically created Question ELements - <h3> Question Text + <li> elements in an <ul>

function createQuestion() {

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

};


    
Questions.forEach(createQuestion())
createQuestion();



// event.preventDefault don't forget