// Get Computer Choice Output
function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Get Player Choice Output
function getPlayerChoice()
{
    let choice = prompt('Rock Paper or Scissors?');
    let finalChoice = choice.toLowerCase();
    return finalChoice;
}

// Write a function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection)
{
    if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        console.log('You Lose! Paper beats Rock');
        return 'You Lose!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
        console.log('You Win! Rock beats Scissors');
        return 'You Win!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        console.log('You Win! Scissors beats Paper'); 
        return 'You Win!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        console.log('You Lose! Rock beats Scissors');
        return 'You Lose!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        console.log('You Lose! Scissors beats Paper');
        return 'You Lose!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        console.log('You Win! Paper beats Rock');
        return 'You Win!';
    }
    else if(playerSelection === computerSelection)
    {
        console.log("It's a draw");
    }
    else
    {
        console.log('Enter a correct input')
    }
}

// Run the game
function game() {
    // Initialize
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3)
    {
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Player choose ${playerSelection}!`);
        console.log(`Computer choose ${computerSelection}!`);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'You Win!') 
        {
            playerScore++;
        } else if (roundResult === 'You Lose!') 
        {
            computerScore++;
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    if (playerScore > computerScore)
    {
        console.log('Player Win!');
    }
    else
    {
        console.log('Computer Win!');
    }
}

game();



