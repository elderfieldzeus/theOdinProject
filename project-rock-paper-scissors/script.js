let computerScore = 0, playerScore = 0, round = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.querySelector('#restart');
const scoreContainer = document.querySelector('.scoreboard');
const statusContainer = document.querySelector('.status');
const roundStatus = document.createElement('h1');
const playScore = document.createElement('h1');
const compScore = document.createElement('h1');
const battleStatus = document.createElement('h1');

battleStatus.setAttribute('id', 'battleStatus')
roundStatus.setAttribute('id', 'roundStatus');
playScore.setAttribute('id', 'playerScore');
compScore.setAttribute('id', 'computerScore');

battleStatus.textContent = "";
roundStatus.textContent = "";
playScore.textContent = `Your score: ${playerScore}`;
compScore.textContent = `Computer score: ${computerScore}`;

scoreContainer.appendChild(playScore);
scoreContainer.appendChild(compScore);
statusContainer.appendChild(battleStatus);
statusContainer.appendChild(roundStatus);

const choices = [rock, paper, scissors]

const playRound = (playerSelection, computerSelection) => {
    round++;

    let playSelectInWords, compSelectInWords;
    
    switch(playerSelection){
        case 0: playSelectInWords = "Rock"; break;
        case 1: playSelectInWords = "Paper"; break;
        case 2: playSelectInWords = "Scissors";
    }

    switch(computerSelection){
        case 0: compSelectInWords = "Rock"; break;
        case 1: compSelectInWords = "Paper"; break;
        case 2: compSelectInWords = "Scissors";
    }

    if(computerSelection === playerSelection){
        roundStatus.textContent = "IT IS A DRAW :|";
    }
    else if(computerSelection === playerSelection + 1 
        || (computerSelection === 0 
            && playerSelection === 2)) {
            computerScore++;
            roundStatus.textContent = "YOU LOST :(";
        }
    else {
        playerScore++;
        roundStatus.textContent = "YOU WON :)";
    }

    battleStatus.textContent = `You picked ${playSelectInWords}, Computer picked ${compSelectInWords}.`;
    playScore.textContent = `Your score: ${playerScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
}

const getComputerChoice = () => {
    let answer = Math.floor(Math.random() * 10 % 3);
    console.log(answer);
    return answer;
}

const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    playScore.textContent = `Your score: ${playerScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
    battleStatus.textContent = ``;
    roundStatus.textContent = ``;
}

choices.forEach((choice, index) => {
    choice.addEventListener("click", () => playRound(index, getComputerChoice()));
})  

restart.addEventListener("click", () => restartGame());