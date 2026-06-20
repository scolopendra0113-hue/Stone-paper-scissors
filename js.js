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

    let humanScore = 0
    let computerScore = 0

    let stone = document.querySelector(".stone")
    let paper = document.querySelector(".paper")
    let scissors = document.querySelector(".scissors")
    let result = document.querySelector(".result")
    let resultAll = document.querySelector(".resultAll")



function playRound(human) {

    if (humanScore === 5 || computerScore === 5) return

    const computer = getComputerChoice()

    if ((human === "Stone" && computer === "Scissors") 
    || (human === "Paper" && computer === "Stone")
    || (human === "Scissors" && computer === "Paper")) {
        humanScore++
        result.textContent = "You wins this round" + computerScore + humanScore
    } else if ((human === "Stone" && computer === "Paper") 
    || (human === "Paper" && computer === "Scissors")
    || (human === "Scissors" && computer === "Stone")) {
        computerScore++
        result.textContent = "Computer wins this round" + computerScore + humanScore
    } else if (human === computer) {
        result.textContent = "Draw" + computerScore + humanScore
    }

    getResult()
}

function getResult() {
    if (humanScore === 5) {
        resultAll.textContent = "you wins"
    } else if (computerScore === 5) {
        resultAll.textContent = "you lose"
    } 
}




stone.addEventListener("click", () => playRound("Stone"))
paper.addEventListener("click", () => playRound("Paper"))
scissors.addEventListener("click", () => playRound("Scissors"))