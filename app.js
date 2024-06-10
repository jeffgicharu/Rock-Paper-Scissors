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
