let humanScore = 0
let computerScore = 0

let humanChoice = "rock"
let computerChoice = "rock"

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");
const humanScoreDiv = document.querySelector(".humanScore");
const computerScoreDiv = document.querySelector(".computerScore");



rockButton.addEventListener("click", () => {
    resultDiv.textContent = (playRound("rock", getComputerChoice()));
    humanScoreDiv.textContent = ("Human score: " + humanScore);
    computerScoreDiv.textContent = ("Computer score: " + computerScore);
    checkWinner();
});

paperButton.addEventListener("click", () => {
    resultDiv.textContent = (playRound("paper", getComputerChoice()));
    humanScoreDiv.textContent = ("Human score: " + humanScore);
    computerScoreDiv.textContent = ("Computer score: " + computerScore);
    checkWinner();
});

scissorsButton.addEventListener("click", () => {
    resultDiv.textContent = (playRound("scissors", getComputerChoice()));
    humanScoreDiv.textContent = ("Human score: " + humanScore);
    computerScoreDiv.textContent = ("Computer score: " + computerScore);
    checkWinner();
});




function getHumanChoice() {
    humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'")
    if (humanChoice != null) {
        humanChoice.toLowerCase()
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice
        } else {
            return getHumanChoice()
        }
    } else {
        return getHumanChoice()
    }
}

function checkWinner() {
    if (humanScore === 5) {
        humanScoreDiv.textContent = ("You win!");
        computerScoreDiv.textContent = ("");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        humanScoreDiv.textContent = ("You lose!");
        computerScoreDiv.textContent = ("");
        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice() {
    numChoice = Math.floor(Math.random() * 3)
    if (numChoice === 0) {
        return "rock"
    } else if (numChoice === 1) {
        return "paper"
    } else if (numChoice === 2) {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        return "You both chose " + humanChoice + " - It's a draw!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice
    }
}

// function playGame() {
//     for (i = 0; i < 5; i++) {
//         console.log(playRound(getHumanChoice(), getComputerChoice()))
//         console.log("Your score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//     }
// }