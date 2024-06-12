console.log(getComputerChoice())

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