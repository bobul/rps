// function getComputerChoice(){
//     let items = ['Rock', 'Paper', 'Scissors']
//     return items[Math.floor(Math.random()*items.length)]
// }

// function playRound(playerSelection, computerSelection){
//     if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
//         console.log("You won! Rock beats Scissors");
//         return true;
//     }
//     else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
//         console.log("You lose! Paper beats Rock");
//         return false;
//     }
//     else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
//         console.log("You won! Paper beats rock");
//         return true;
//     }
//     else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
//         console.log("You won! Scissors beats Paper");
//         return true;
//     }
//     else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
//         console.log("You lose! Scissors beats Paper");
//         return false;
//     }
//     else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
//         console.log("You lose! Rock beats Scissors");
//         return false;
//     }
//     else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK') {
//         console.log("Tie game! Rock versus Rock");
//         return 2;
//     }
//     else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS') {
//         console.log("Tie game! Scissors versus Scissors");
//         return 2;
//     }
//     else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER') {
//         console.log("Tie game! Paper vs Paper");
//         return 2;
//     }
//     else{
//         console.error("Uncorrect value!");
//     }
// }



// function play(getUserChoice, getComputerChoice) {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     let userChoice
//     , computerChoice;
//     for (let i = 0; i < 5; i++) {
//         userChoice = getUserChoice();
//         computerChoice = getComputerChoice();
//         let check = playRound(userChoice, computerChoice);
//         if(check == true){
//             playerPoints++;
//             console.log("You get one more points. Your current points: ", playerPoints);
//         }
//         else if (check == false){
//             computerPoints++;
//             console.log("Computer get point. Current computer points: ", computerPoints);
//         }
//         else if(check == 2){
//             console.log('Try once more.');
//         }   
//     }
//     if(playerPoints>computerPoints){
//         console.log(`OMG! You won. The total score: ${playerPoints}:${computerPoints}.`);
//     }
//     else if (playerPoints<computerPoints){
//         console.log(`Unfortunately, you lose. The total score: ${playerPoints}:${computerPoints}. `);
//     }
//     else{
//         console.log(`It is tie game! The total score: ${playerPoints}:${computerPoints}. `);
//     }
// }

// play(getUserChoice, getComputerChoice);

let buttons = document.querySelectorAll('.btn');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');




buttons.forEach(function(item){
    item.addEventListener('click', getUserChoice);
    item.addEventListener('click', playRound);
})

function getUserChoice(e){
    let choice = e.target.id.toString(); 
    return choice;
}

function getComputerChoice(rock,paper,scissors){
    let items = [rock, paper, scissors]
    return items[Math.floor(Math.random()*items.length)].id; 
}

 function playRound(e){

    let userChoice =  getUserChoice(e); 
    let computerChoice =  getComputerChoice(rock,paper,scissors);
    let result = document.querySelector('.result');
    let userScore = document.querySelector('.user-score');
    let computerScore = document.querySelector('.computer-score');
    let userPoints = 0;
    let computerPoints = 0;

    if (userChoice === 'rock' && computerChoice === 'scissors') {
        userPoints++;
        result.innerHTML = "You won! Rock beats Scissors";
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        computerPoints++
        result.innerHTML = "You lose! Paper beats Rock";
    }
    else if (userChoice === 'rock' && computerChoice === 'rock') {
        userPoints++;
        result.innerHTML = "You won! Paper beats rock";
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userPoints++;
        result.innerHTML = "You won! Scissors beats Paper";
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        computerPoints++;
        result.innerHTML = "You lose! Scissors beats Paper";
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        computerPoints++;
        result.innerHTML = "You lose! Rock beats Scissors";
    }
    else if (userChoice === 'rock' && computerChoice === 'rock') {
        result.innerHTML = "Tie game! Rock versus Rock";
    }
    else if (userChoice === 'scissors' && computerChoice === 'scissors') {;
        result.innerHTML = "Tie game! Scissors versus Scissors";
    }
    else if(userChoice === 'paper' && computerChoice === 'paper') {
        result.innerHTML = "Tie game! Paper vs Paper";
    };
}
