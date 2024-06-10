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
