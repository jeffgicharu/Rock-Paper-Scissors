function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice=prompt("Please enter your choice (rock, paper or scissors):");
    return choice.toLowerCase();
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();

    if(humanChoice===computerChoice){
        console.log("It's a tie");
        return "tie";
    } else if(
        (humanChoice==="rock" && computerChoice==="scissors") ||
        (humanChoice==="paper" && computerChoice==="rock") ||
        (humanChoice==="scissors" && computerChoice==="paper")
    ){
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice}.`);
        return "human";
    } else{
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice}.`);
        return "computer";
    }
}

function playGame(){
    humanScore=0;
    computerScore=0;

    for(let i=0;i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    console.log(`Final scores - Human: ${humanScore}, Computer: ${computerScore}`);

    if(humanScore>computerScore){
        console.log("Congratulations! You won the game!");
    } else if(humanScore<computerScore){
        console.log("Sorry, you lost the game.");
    } else{
        console.log("The game is a tie.");
    }
}

const btn=document.querySelector("button");
btn.addEventListener("click",playGame);