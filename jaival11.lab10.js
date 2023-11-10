document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rock").addEventListener("click", function() { playGame('rock'); });
    document.getElementById("paper").addEventListener("click", function() { playGame('paper'); });
    document.getElementById("scissors").addEventListener("click", function() { playGame('scissors'); });
});

//GPT Prompt:  Explain the functioning and purpose of this JavaScript code for a Rock-Paper-Scissors game. Event listeners for user interactions, logic for randomly generating the computer's option, a function to select the winner based on the game's rules, 
// and a way to show the game results are all included in the code. Highlight how the game works from the user's point of view, as well as the internal workings of the JavaScript code.

function playGame(userChoice) {
    var computerChoice = getComputerChoice();
    var result = determineWinner(userChoice, computerChoice);
    displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
}

function displayResult(result, userChoice, computerChoice) {
    var resultDisplay = document.getElementById("gameResult");
    resultDisplay.innerHTML = "You chose " + userChoice + ". Computer chose " + computerChoice + ". <strong>" + result + "</strong>";
}
