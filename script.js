

function getComputerChoice(){
    let a = Math.random()
    if(a <= 0.33){
        return "rock"
    }
    else if (a > 0.33 && a <= 0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let useInput = prompt("What's yout choice");
    return useInput.toLowerCase();
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(_humanChoice, _computerChoice){
        if(_humanChoice == _computerChoice)
        {
         console.log("draw")
        }
     
        if(_humanChoice == "rock")
        {
         if(_computerChoice == "paper")
         {
             console.log("you loose! Paper beats Rock")
             computerScore++;
         }
         else
         {
             console.log("you win! Rock beats Scissor");
             humanScore++;
         }
        }
        else if(_humanChoice == "papper")
        {
         if(_computerChoice == "rock")
         {
             console.log("you win! Paper beats Rock");
             humanScore++;
         }
         else
         {
             console.log("you loose! Scissor beats Paper");
             computerScore++;
         }
        }
        else
        {
         if(_computerChoice == "rock")
         {
             console.log("you loose! Rock beats Scissor")
             computerScore++;
         }
         else
         {
             console.log("you win! Scissor beats Paper")
             humanScore++;
         }
        }
     }

    for(i = 0; i < 5; i++)
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);


        playRound(humanChoice, computerChoice);
    }
    
}


playGame();


