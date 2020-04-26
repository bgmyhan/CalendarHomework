alert("Is This Thing on?");

// Quiz questions 
var quizQuestions = [
    {
        question: "What? \(a) \(b) \(c) \(d) all of the above"
        answer: "Yup"
    }, 
    {
        question: "What? \(a) \(b) \(c) \(d) all of the above"
        answer: "Yup"
    }, 
    {
        question: "What? \(a) \(b) \(c) \(d) all of the above"
        answer: "Yup"
    }, 
];

// Logic

var score = 0;

for (var i = 0; i< quizQuestions.length; i++){
    var userResponse = alert(quizQuestions[i].question)
    if(userResponse = question[i].answer){
        score ++;
        alert("Correct!");
    }
        else{
            alert("wrong...");
        }

        alert (score + "/" + quizQuestions.Questions.length);
    }
    

console.log(quizQuestions)
