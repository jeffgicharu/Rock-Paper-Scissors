let humanScore,computerScore;


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
    if(choices.includes(userChoice))
        {
            if(userChoice==="rock")
                {
                    return "rock";
                } else if(userChoice==="paper")
                    {
                        return "paper";
                    } else
                    {
                        return "scissors";
                    }
        } else{
            alert("Please enter either rock, paper or scissors");
        }
    
}
