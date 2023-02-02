// DOM
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerCtr = document.querySelector(".player-ctr");
const computerCtr = document.querySelector(".computer-ctr");
const log = document.querySelector('#result-log');

rockBtn.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});

// Get Computer Choice Output
function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Write a function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection)
{
    if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        log.textContent = 'You Lose! Paper beats Rock';
        computerCtr.textContent = Number(computerCtr.textContent) + 1;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
        log.textContent = 'You Win! Rock beats Scissors';
        playerCtr.textContent = Number(playerCtr.textContent) + 1;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        log.textContent = 'You Win! Scissors beats Paper';
        playerCtr.textContent = Number(playerCtr.textContent) + 1;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        log.textContent = 'You Lose! Rock beats Scissors';
        computerCtr.textContent = Number(computerCtr.textContent) + 1;
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        log.textContent = 'You Lose! Scissors beats Paper';
        computerCtr.textContent = Number(computerCtr.textContent) + 1;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        log.textContent = 'You Win! Paper beats Rock';
        playerCtr.textContent = Number(playerCtr.textContent) + 1;
    }
    else if(playerSelection === computerSelection)
    {
        log.textContent = "It's a draw";
    }
    else
    {
        alert('Enter a correct input');
    }

    if (Number(playerCtr.textContent) >= 5 || Number(computerCtr.textContent) >= 5) {
        log.textContent = "Game Over";
        if(Number(playerCtr.textContent) >= 5)
        {
            playerCtr.textContent = 5;
            setTimeout(() => {            
                if (confirm("Player Won! Do you want to start over?")) {
                    playerCtr.textContent = 0;
                    computerCtr.textContent = 0;
                    log.textContent = '';
            }}, 100);
        }
        else
        {
            setTimeout(() => {  
            if (confirm("Computer Won! Do you want to start over?")) {
                playerCtr.textContent = 0;
                computerCtr.textContent = 0;
                log.textContent = '';
            }},100)
        }
    }
}
