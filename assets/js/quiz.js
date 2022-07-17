let counter = 0;
window.addEventListener("load", function (event) {

    console.log(questions);
    document.getElementById("quiz").innerHTML = questions[0].question;
    document.getElementById("answer1").innerHTML = questions[0].options[0];
    document.getElementById("answer2").innerHTML = questions[0].options[1];
    document.getElementById("answer3").innerHTML = questions[0].options[2];
});

function next() {
    //Next button should not be displayed on the end of the questions array
    counter++;
    console.log(questions[counter]);
    console.log(questions[counter].question);
    document.getElementById("quiz").innerHTML = questions[counter].question;
    document.getElementById("answer1").innerHTML = questions[counter].options[0];
    document.getElementById("answer2").innerHTML = questions[counter].options[1];
    document.getElementById("answer3").innerHTML = questions[counter].options[2];
}

//this could be done by DOM manipulation too.. 
function checkAnswer() {
    console.log('checkAnswer called');
}