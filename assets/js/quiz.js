let counter = 0;
window.addEventListener("load", function (event) {

    console.log(questions);
    document.getElementById("quiz").innerHTML = questions[0].question;
});
function next() {
    //Next button should not be displayed on the end of the questions array
    counter++;
    console.log(questions[counter]);
    console.log(questions[counter].question);
    document.getElementById("quiz").innerHTML = questions[counter].question;
}