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
    paperButton.textContent="Paper";
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

function displayResult(message){
    const resultDiv=document.getElementById("result");
    resultDiv.textContent=message;
}

// Function to update the score
function updateScore(){
    const scoreDiv=document.getElementById("score");
    scoreDiv.textContent=`Human: ${humanScore} - Computer: ${computerScore}`;
}

// Function to check if there's a winner
function checkWinner(){
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
      } else if (computerScore === 5) {
        alert("Sorry, you lost the game.");
        resetGame();
      }
}

// Function to reset the game
function resetGame(){
    humanScore=0;
    computerScore=0;
    updateScore();
    displayResult("");
}

// Ading event listeners to the buttons
function addEventListeners(){
    document.getElementById("rock").addEventListener("click",()=> playRound("rock"));
    document.getElementById("paper").addEventListener("click",()=>playRound("paper"));
    document.getElementById("scissors").addEventListener("click",()=> playRound("scissors"));
}

// Initialize the game
function initializeGame(){
    createElements();
    updateScore();
    addEventListeners();
}

// Start the game
initializeGame();