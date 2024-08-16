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

const div = document.querySelector("div")
const pHuman = document.querySelector(".human");
const pComputer = document.querySelector(".computer");

const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissor = document.querySelector("#Scissor");

let humanChoice = "";

let humanScore = 0;
let computerScore = 0;

const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";

btnRock.addEventListener("click", () => {
    humanChoice = "rock";
    playRound(humanChoice);
})

btnPaper.addEventListener("click", () => {
    humanChoice = "paper";
    playRound(humanChoice);
})

btnScissor.addEventListener("click", () => {
    humanChoice = "scissor";
    playRound(humanChoice);
})


function playRound(_humanChoice){
    let _computerChoice = getComputerChoice();

    if(humanScore < 5 && computerScore < 5){
        if(_humanChoice == _computerChoice)
            {
             div.textContent = "draw";
            }
            else if(_humanChoice == "rock")
            {
             if(_computerChoice == "paper")
             {
                 div.textContent = "you loose! Paper beats Rock";
                 computerScore++;
                 pComputer.textContent = computerScore;
             }
             else
             {
                 div.textContent = "you win! Rock beats Scissor";
                 humanScore++;
                 pHuman.textContent = humanScore;
             }
            }
            else if(_humanChoice == "paper")
            {
             if(_computerChoice == "rock")
             {
                 div.textContent = "you win! Paper beats Rock";
                 humanScore++;
                 pHuman.textContent = humanScore;
             }
             else
             {
                 div.textContent = "you loose! Scissor beats Paper";
                 computerScore++;
                 pComputer.textContent = computerScore;
             }
            }
            else
            {
             if(_computerChoice == "rock")
             {
                 div.textContent = "you loose! Rock beats Scissor";
                 computerScore++;
                 pComputer.textContent = computerScore;
             }
             else
             {
                 div.textContent = "you win! Scissor beats Paper";
                 humanScore++;
                 pHuman.textContent = humanScore;
             }
            }
    }
    else if(humanScore >= 5){
        div.textContent = "human win";
        div.appendChild(restartBtn);
    
    }
    else if(computerScore >= 5){
        div.textContent = "computer win";
        div.appendChild(restartBtn);
    }
 }

restartBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    div.textContent = "";
    pComputer.textContent = "";
    pHuman.textContent = ""
    restartBtn.remove();
})





