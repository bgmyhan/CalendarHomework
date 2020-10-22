// Assigning variables to HTML elements //
const startBtn = document.getElementById("startQuizBtn");
const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const buttonDiv = document.getElementById("nextButton");

let state = 0;

// Creating quiz questions and answers //

 var quizQuestions = [
  {
    question: "What is Javascript?",
    choices: ["What", "how", "When", "Why"],
    answer: "What"
  },
  {
    question: "Where is Javascript?",
    choices: ["What", "Where", "When", "Why"],
    answer: "Where"
  },
  {
    question: "When is Javascript?",
    choices: ["What", "Where", "When", "Why"],
    answer: "When"
  },
  {
    question: "Why is Javascript?",
    choices: ["What", "Where", "When", "Why so serious"],
    answer: "Why so serious"
  }
 ]
 
startBtn.addEventListener("click", function(){
 hideButton()
 showQuestion()
 showchoices()
 nextButton()
})

// Ability to hide the start button after the quiz has started
const hideButton = () => {startBtn.style.display = "none"}

// Display Each Question //
const showQuestion = ()  => {
  let questionEl = document.createElement('h3');
  questionEl.innerHTML = quizQuestions[state].question
  questionDiv.appendChild(questionEl)
}

const showchoices = ()  => {
 for (let i=0; i<quizQuestions[state].choices.length; i++){
  let choices = `
    <input 
    type="radio" 
    id="choices" 
    name=${quizQuestions[state].question} 
    value=${quizQuestions[state].question}
    >
    <label 
    for=${quizQuestions[state].question}>
    ${quizQuestions[state].choices[i]}
    </label>
    <br>
  `

  let choice = document.createElement('li');
  choice.innerHTML = choices;
  answerDiv.appendChild(choice)
 }
}

const nextButton = () => {
  let nextButton = document.createElement('button');
  nextButton.innerHTML = "Next";
  buttonDiv.appendChild(nextButton);

  nextButton.addEventListener("click", function(){
      state += 1
     
  })

}
