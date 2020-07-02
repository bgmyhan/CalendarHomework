// Assigning variables to HTML elements //
const generateBtn = document.getElementById("startQuizBtn");
const elQuiz = document.getElementById("quizHere");
const answerSpaceA = document.getElementById("choice1");
const answerSpaceB = document.getElementById("choice2");
const answerSpaceC = document.getElementById("choice3");
const answerSpaceD = document.getElementById("choice4");
const questionSpace = document.getElementById("question");
let state = 0;
// Creating quiz questions and answers //

 var quizQuestions = [
  {
    question: "What is Javascript?",
    choices: ["What", "Where", "When", "Why"],
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

//  functions that begins the quiz//
var showQuestion = function showQuestion(){
    let elQuestion = document.createElement('h3')
    elQuestion.innerHTML = quizQuestions[state].question
    elQuiz.appendChild(elQuestion)
   
}
var showAnswers = function showAnswers(){
    for (i=0; i<quizQuestions[state].choices.length; i++){
        let elAnswers = document.createElement('button')
        elAnswers.id = "AnswerButton";
        elAnswers.innerHTML = quizQuestions[state].choices[i]
        elQuiz.appendChild(elAnswers)



    }
   
}
// Creating functionality for the Start Quiz Button//
generateBtn.addEventListener("click", function(){

    // Generating html elements to contain te questions and answers//
  showQuestion()
  showAnswers()


   
});





// let answerChoices = document.getElementById("AnswerButton")
// answerChoices.addEventListener("click", function(){
//    console.log("yup")
// });


// if (answerCoices === quizQuestions.answer){
//     console.log("Good JOb")
// }else{
//     console.log("Bad JOb")
// }
// }

        // if (answerButton = quizQuestions.answer.val()){
        //     console.log("You did it")
        // }else {
        //     console.log("You suck")
        // }
        // let answerChoices = document.getElementById("AnswerButton")
        // answerChoices.addEventListener("click", function(){
        //     console.log("Hans Briggs")
    
        // });







//     var showAnswer = function showAnswer(){

//     }
//     answerSpace = "";
//     questionSpace = ""
//     state++;
    
// });
// // if(state === 0){

// // }
//         let elQuestion = document.createElement('h3')
//         elQuestion.innerHTML = arQuestions[state]
//         questionSpace.appendChild(elQuestion)
        
//         let elAnswer = document.createElement('button')
//         elAnswer.innerHTML = arAnswers0
//         answerSpace.appendChild(elAnswer)

//         let nextButton = document.createElement("button")
//         elQuiz.appendChild(nextButton)

//             nextButton.addEventListener("click", function(){
                

//         });

  


// function showQuestion(){
//     console.log(question[1])
// }


// function showAnswer(){
//     console.log(answer[2])
// }



// function showQuestion(){
//     console.log("Question")
// }




// const startButton = document.getElementById("startQuiz");
// const questionel = document.getElementById("question");
// const answer = document.getElementById("answer");
// const questionArr = ["What is Javascript", "How is Javascript", "Who is Javascript", "Why is Javascript", "Where is Javascript", "When is Javascript"];
// const answerArr = ["What is Javascripts", "How is Javascripts", "Who is Javascripts", "Why is Javascripts", "Where is Javascrips", "When is Javascripts"];

// var state = 0;

// // Add questions onto the page

// // async function processArray(questionArr) {
// //     questionArr.forEach(async () => {
// //       await func();
// //     })
// //     console.log(item);
// //   }


// startButton.addEventListener('click', function (){
      
//     let elQuestion = document.createElement('h3')
//     elQuestion.innerHTML = questionArr[state]
//     question.appendChild(elQuestion)
    
//     let elAnswer = document.createElement('button')
//     elAnswer.innerHTML = answerArr.splice(state)
//     answerEl.appendChild(elAnswer)

//         elAnswer.addEventListener('click', function (){
//         state ++;
//         let elQuestion = document.createElement('h3')
//         elQuestion.innerHTML = questionArr[state]
//         question.appendChild(elQuestion)
        
//         let elAnswer = document.createElement('button')
//         elAnswer.innerHTML = answerArr[state]
//         answer.appendChild(elAnswer)


//     });
// });

      
//         console.log(state)


// -----------++++__------___---_---_-_____---__--___-----_-_
// var fullQuiz = document.getElementById("fullQuiz")

// takeQuizBtn.addEventListener("click", function(){
//     fullQuiz.style.display = "block";


// });
    
// (var i = 0; i < quizQuestion.length)
// })

// question : "Where does the Javascript go?"
// answer : "Is this the easiest quiz you've ever taken"

//  function startQuiz(){
    
// }

// // Quiz questions 
// var quizQuestions = [
//     {
//         question: "<Where does the Javascript go? \r A <javascript> \r B) <span> \r C) <SCRIPT> \r D) <script>",
//         answer: "D"
//     }, 
//     {
//         question: "Is this the easiest quiz you've ever taken? \r A) Yes \r B) no \r C)Maybe \r D) Do I plan on improving this? Yes I understand my grade is reflected at the time of grading.",
//         answer: "A"
//     }, 
//     {
//         question: "Did Brandon try real hard at progaming me? \r A) Yes \r B) No \r C) Maybe \r D) If you tried I feel bad",
//         answer: "A"
//     }, 
// ];

// // Logic

// var score = 0;

// for (var i = 0; i< quizQuestions.length; i++){
//     var userResponse = prompt(quizQuestions[i].question);
//     if(userResponse == quizQuestions[i].answer){
//         score ++;
//         alert("Correct!");
//     }
//         else{
//             alert("That's just like, your opinion man!");
//         }
       
     
//     }


//     alert ("Your Score is" + ' ' + score + "/" + quizQuestions.length);
