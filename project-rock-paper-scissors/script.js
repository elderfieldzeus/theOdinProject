const playRound = (playerSelection = "NONE", computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    let choice = -1;
    if(playerSelection == "rock") choice = 0;
    else if(playerSelection == "paper") choice = 1;
    else if(playerSelection == "scissors") choice = 2;
    else return -1;

    if(computerSelection === choice) return 1;
    else if(computerSelection === choice + 1 || (computerSelection === 0 && choice === 2)) return 0;
    else return 2;
}

const getComputerChoice = () => {
    return Math.floor((Math.random() * 10) % 3);
}

const game = () => {
    let playerChoice = prompt("Enter choice");
    let computerChoice = getComputerChoice();
    let decision = playRound(playerChoice, computerChoice);
    let status;
    
    switch(computerChoice){
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        case 2: computerChoice = "scissors"; break;
    }

    switch (decision){
        case 0: status = "YOU LOST!!!"; break;
        case 1: status = "IT IS A DRAW!!!"; break;
        case 2: status = "YOU WONNNN!!!"; 
    }
    decision != -1 ? console.log(`You picked ${playerChoice.toLowerCase()}, Computer picked ${computerChoice}. ${status}`) : console.log("TRY AGAIN!");
    return decision;
}

let times = 0, playerScore = 0, computerScore = 0;

do{
    let result = game();
    if(result === 0 || result === 2) {
        times++;
        result === 2 ? playerScore ++ : computerScore ++;
    }
    console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
}while(times < 5);
