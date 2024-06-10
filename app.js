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