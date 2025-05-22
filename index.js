let humanScore = 0;
let computerScore = 0;
let ties = 0;


function getComputerChoice(){
    dictionary = {0: "rock", 1: "paper", 2:"scissors"}
    decision = Math.round(Math.random()*2);
    return dictionary[decision];
}

function playRound (computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    buttons = document.querySelector("div .buttons")
    choices = document.querySelectorAll("td")
    text = document.querySelector("div .text")
    console.log(choices)
    if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "paper" && humanChoice == "rock"){
        computerScore ++;
        choices.item(1).innerText = computerScore;
        if (computerScore == 5){
            text.innerText = `Computer wins!`;
            buttons.style.display = "none";
        } else {
            text.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        } 
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
        humanScore ++;
        choices.item(0).innerText = humanScore;
        if (humanScore == 5){
            text.innerText = `Human wins!`;
            buttons.style.display = "none";
        } else {
            text.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        } 
    } else {
        ties ++;
        choices.item(2).innerText = ties;
        text.innerText = "Tie!";
    }
}

buttons = document.querySelector("div .buttons")
buttons.addEventListener("click",(e) => {
    humanChoice = e.target.innerText;
    computerChoice = getComputerChoice();
    console.log(humanChoice+" "+computerChoice)
    playRound(computerChoice,humanChoice)
})