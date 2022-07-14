const cards = document.querySelectorAll('.memory-card'); // all card elements
let hasFlippedCard = false; // logic for first click and second click
let lockBoard = false; // prevent multiple clicks
let firstCard, secondCard; // variables to store and compare selected cards
let pairCoutnter = 0; // game end when all cards flipped
let person; // name  of the player

// alert on page load
window.onload = function() {
    function getName() {
        let text;
        person = prompt("This is a simple memory game. Flip cards to find pairs. \n \n Please enter your name:", "Emoji 😉");
        if (person == null || person == "") {
          text = "Hello NoName!";
          person = "NoName"
        } else {
          text = "Hello " + person + "!";
        }
        document.getElementById("insert-name").innerHTML = text;
    };
    getName();      
  }

// flip cards
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');
    // first click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    // second click
    else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    // check cards match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // cards match
        disableCards();
    }// not a match
    else {
       unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    pairCoutnter ++;
    resetBoard();
}

function unflipCards() {
    // prevent clicking untill timeout
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        }, 1500);

}

function resetBoard() {
    // game end 
    if (pairCoutnter == 6) {
        alert("Congratulations " + person + "! You have won the game.")
        quitGame();
    }
    else {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    }
}

(function shuffleCards() {
    let cards = document.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 100); // returns random number between 0-1 and, multiply to get num 0-100, floor makes it integer 
        card.style.order =randomPos;
    });
})();

function quitGame() {
    window.open("gameOver.html","_self");
}

cards.forEach(card => card.addEventListener('click', flipCard));
