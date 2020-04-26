
// Quiz questions 
var quizQuestions = [
    {
        question: "Where does the Javascript go? \r A <javascript> \r B) <span> \r C) <SCRIPT> \r D) <script>",
        answer: "D"
    }, 
    {
        question: "Is this the easiest quiz you've ever taken? \r A) Yes \r B) no \r C)Maybe \r D) Do I plan on improving this? Yes I understand my grade is reflected at the time of grading.",
        answer: "A"
    }, 
    {
        question: "Did Brandon try real hard at progaming me? \r A) Yes \r B) No \r C) Maybe \r D) If you tried I feel bad",
        answer: "A"
    }, 
];

// Logic

var score = 0;

for (var i = 0; i< quizQuestions.length; i++){
    var userResponse = prompt(quizQuestions[i].question);
    if(userResponse == quizQuestions[i].answer){
        score ++;
        alert("Correct!");
    }
        else{
            alert("That's just like, your opinion man!");
        }
       
     
    }


    alert ("Your Score is" + ' ' + score + "/" + quizQuestions.length);
