let humanScore=0,
    computerScore=0;

function getComputerChoice(){
    let result = Math.round(Math.random()*3);
    if(result===0){
        return "rock";
    } else if(result===1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    const choices=["rock","paper","scissors"];
    let userChoice=prompt("rock paper or scissors?","");
    var userChoice1=userChoice.toLowerCase();
    if(choices.includes(userChoice1))
        {
            if(userChoice1=="rock")
                {
                    return "rock";
                } else if(userChoice1=="paper")
                    {
                        return "paper";
                    } else if(userChoice1=="scissors")
                    {
                        return "scissors";
                    }
        } else{
            alert("Please enter either rock, paper or scissors");
        }
    
}

function playRound(humanChoice,computerChoice)
{
    if((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="scissors" && computerChoice==="paper")||(humanChoice==="paper" && computerChoice==="rock"))
        {
            alert(`You Win! ${humanChoice.charAt(0).toUpperCase()} beats ${computerChoice.charAt(0).toUpperCase()}`);
        } else if((humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="scissors")||(humanChoice==="scissors" && computerChoice==="rock"))
            {
                alert(`You Lose! ${humanChoice.charAt(0).toUpperCase()} beats ${computerChoice.charAt(0).toUpperCase()}`);
            } else{
                alert("It's a draw");
            }
}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection,computerSelection);