function getComputerChoice(){
    let items = ['Rock', 'Paper', 'Scissors']
    return items[Math.floor(Math.random()*items.length)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        console.log("You won! Rock beats Scissors");
        return true;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        console.log("You lose! Paper beats Rock");
        return false;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        console.log("You won! Paper beats rock");
        return true;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        console.log("You won! Scissors beats Paper");
        return true;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        console.log("You lose! Scissors beats Paper");
        return false;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        console.log("You lose! Rock beats Scissors");
        return false;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK') {
        console.log("Tie game! Rock versus Rock");
        return 2;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS') {
        console.log("Tie game! Scissors versus Scissors");
        return 2;
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER') {
        console.log("Tie game! Paper vs Paper");
        return 2;
    }
    else{
        console.error("Uncorrect value!");
    }
}

function getUserChoice(){
    let item = prompt("Choose rock, paper or scissors: ");
    return item;
}

function play(getUserChoice, getComputerChoice) {
    let playerPoints = 0;
    let computerPoints = 0;
    let userChoice
    , computerChoice;
    for (let i = 0; i < 5; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        let check = playRound(userChoice, computerChoice);
        if(check == true){
            playerPoints++;
            console.log("You get one more points. Your current points: ", playerPoints);
        }
        else if (check == false){
            computerPoints++;
            console.log("Computer get point. Current computer points: ", computerPoints);
        }
        else if(check == 2){
            console.log('Try once more.');
        }   
    }
    if(playerPoints>computerPoints){
        console.log(`OMG! You won. The total score: ${playerPoints}:${computerPoints}.`);
    }
    else if (playerPoints<computerPoints){
        console.log(`Unfortunately, you lose. The total score: ${playerPoints}:${computerPoints}. `);
    }
    else{
        console.log(`It is tie game! The total score: ${playerPoints}:${computerPoints}. `);
    }
}

play(getUserChoice, getComputerChoice);