const para = document.querySelector(".test");
const btn = document.querySelector("button");
const compScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");
const header = document.querySelector("h1");
let counter = 0;

function getComputerChoice() {
    let result = Math.round(Math.random() * 3);
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock Paper or Scissors?", "");

    if (userChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (userChoice.toLowerCase() == "paper") {
        return "paper";
    } else if (userChoice.toLowerCase() == "scissors") {
        return "scissors";
    }
    else {
        const error=document.createElement("p");
        const message=document.createTextNode("Please Enter either Rock, Paper or Scissors");
        try{
            throw new error
        }
    }

}

function playGame() {

    let humanScore = 0,
        computerScore = 0;
    function playRound() {
        counter++;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "rock")) {
            humanScore++;
            para.textContent = `You win! ${humanSelection.charAt(0).toUpperCase()+humanSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}`;
        } else if ((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            para.textContent = `You Lose! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${humanSelection.charAt(0).toUpperCase()+humanSelection.slice(1)}`;
        } else {
            para.textContent = `It is a draw.`;
        }
    }
    playRound();
    if (counter === 5) {
        playerScore.textContent = `Player Score: ${humanScore}`;
        compScore.textContent = `Computer Score: ${computerScore}`;
        if (humanScore > computerScore) {
            header.textContent = "You Win! Congratulations";
        } else if (humanScore < computerScore) {
            header.textContent = "You've Lost! Better Luck Next Time";
        } else {
            header.textContent = "It ended at a Draw.";
        }
    }

}

btn.addEventListener("click", playGame);