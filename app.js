// Global score variables
let humanScore=0;
let computerScore=0;

// Function to create and append elements to the body
function createElements(){
    const body=document.body;

    // Create and append title
    const title=document.createElement("h1");
    title.textContent="Rock Paper Scissors";
    body.appendChild(title);

    // Create and append buttons container
    const buttonsContainer=document.createElement("div");
    buttonsContainer.id="buttons";

    // Create and append buttons
    const rockButton=document.createElement("button");
    rockButton.id="rock";
    rockButton.textContent="Rock";
    buttonsContainer.appendChild(rockButton);

    const paperButton=document.createElement("button");
    paperButton.id="paper";
    paperButton.textContent="Scissors";
    buttonsContainer.appendChild(paperButton);

    const scissorsButton=document.createElement("button");
    scissorsButton.id="scissors";
    scissorsButton.textContent="Scissors";
    buttonsContainer.appendChild(scissorsButton);

    body.appendChild(buttonsContainer);

    // Create and append result div
    const resultDiv=document.createElement("div");
    resultDiv.id="result";
    body.appendChild(resultDiv);

    // Create and append score div
    const scoreDiv=document.createElement("div");
    scoreDiv.id="score";
    body.appendChild(scoreDiv);
}

// Function to get the computer choice
function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice){
    const computerChoice=getComputerChoice();

    if (humanChoice === computerChoice) {
        displayResult("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        displayResult(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
      } else {
        computerScore++;
        displayResult(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
      }

      updateScore();
      checkWinner();
}

