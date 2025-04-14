let humanScore = 0;
let computerScore = 0;
let ties = 0;

playGame(playRound(getComputerChoice(),getHumanChoice()),5);

function getComputerChoice(){
    dictionary = {0: "rock", 1: "paper", 2:"scissors"}
    decision = Math.round(Math.random()*2);
    return dictionary[decision];
}

function getHumanChoice (){
    decision = prompt("rock, paper, scissors: ");
    return decision;
}

function playRound (computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "paper" && humanChoice == "rock"){
        computerScore ++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
        humanScore ++;
        console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
    } else {
        ties ++;
        console.log("Tie!")
    }
}

function playGame(func, times){
    for(let i = 0; i<times; i++){}
        func();
        console.log(`Computer: ${computerScore} | Human: ${humanScore} | Ties: ${ties}`);
}