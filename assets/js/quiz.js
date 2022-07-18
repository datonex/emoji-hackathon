let counter = 0;
window.addEventListener("load", function (event) {

    console.log(questions);
    document.getElementById("question").innerHTML = questions[0].question;
    
    document.getElementById("answer1").innerHTML = questions[0].options[0];
    document.getElementById("inlineRadio1").value = questions[0].options[0];
    document.getElementById("answer2").innerHTML = questions[0].options[1];
    document.getElementById("inlineRadio2").value = questions[0].options[1];
    document.getElementById("answer3").innerHTML = questions[0].options[2];
    document.getElementById("inlineRadio3").value = questions[0].options[2];
});

function next() {
    //Next button should not be displayed on the end of the questions array

    
    if(counter+1 == questions.length){
        return false;
    }
    counter++;
    console.log(questions[counter]);
    console.log(questions[counter].question);
    document.getElementById("question").innerHTML = questions[counter].question;
    document.getElementById("answer1").innerHTML = questions[counter].options[0];
    document.getElementById("inlineRadio1").value = questions[counter].options[0];
    document.getElementById("answer2").innerHTML = questions[counter].options[1];
    document.getElementById("inlineRadio2").value = questions[counter].options[1];
    document.getElementById("answer3").innerHTML = questions[counter].options[2];
    document.getElementById("inlineRadio3").value = questions[counter].options[2];

    document.getElementById("result-message").innerHTML = "";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;

}

//this could be done by DOM manipulation too.. 
function checkAnswer(event) {
    
    console.log(event.value);
    console.log(questions[counter].answer);
    if(event.value == questions[counter].answer ) {
        document.getElementById("result-message").innerHTML = "Your answer is correct";
    }else{
        document.getElementById("result-message").innerHTML = "Your answer is wrong";
    }

}