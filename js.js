function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)

    if (compChoice === 0) {
        return "Paper"
    } else if (compChoice === 1) {
        return "Stone"
    } else if (compChoice === 2) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Stone, scissors or paper").toLowerCase()
    
    if (humanChoice === "paper") {
        return "Paper"
    } else if (humanChoice === "stone") {
        return "Stone"
    } else if (humanChoice === "scissors") {
        return "Scissors"
    }
}

let humanScore = 0
let computerScore = 0

function playRound(human, computer) {

    if ((human === "Stone" && computer === "Scissors") 
    || (human === "Paper" && computer === "Stone")
    || (human === "Scissors" && computer === "Paper")) {
        humanScore++
        return "Human wins"
    } else if ((human === "Stone" && computer === "Paper") 
    || (human === "Paper" && computer === "Scissors")
    || (human === "Scissors" && computer === "Stone")) {
        computerScore++
        return "Computer wins"
    } else if (human === computer) {
        return "Draw"
    }
}

function playGame() {

    let round = 0

    while (round < 6) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
        console.log("Human Score:" + humanScore + " Computer Score:" + computerScore)
        round++
    }
}

playGame()