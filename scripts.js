let getComputerChoice = () => {
    let randomSelection = Math.floor(Math.random() * 3);
    switch(randomSelection) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}


let getPlayerChoice = () => {
    let playerChoice =  prompt('Choose rock, paper, or scissors: ');
    const choices = ['rock', 'paper', 'scissors'];
    if(playerChoice !== null && choices.includes(playerChoice.toLowerCase())){
        return playerChoice.toLowerCase();
    }
    else if(playerChoice === null){
        return;
    }
    return getPlayerChoice();
}

let judgeWinner = (playerChoice, computerChoice) => {
    let winner;
    console.log("playerChoice: " + playerChoice);
    console.log("computerChoice: " + computerChoice);
    if(playerChoice === computerChoice){
        winner = 'tie';
    }
    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log("Paper covers rock! Computer wins!");
            winner = 'computer';
        }
        else{
            console.log("Rock breaks scissors! Player wins!");
            winner = 'player';
        }
    }
    else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            console.log("Paper covers rock! Player wins!");
            winner = 'player';
        }
        else{
            console.log("Scissors cuts paper! Computer wins!");
            winner = 'computer';
        }
    }
    else{
        if(computerChoice === 'rock'){
            console.log("Rock breaks scissors! Computer wins!");
            winner = 'computer';
        }
        else{
            console.log("Scissors cuts paper! Player wins!");
            winner = 'player';
        }
    }
    return winner;
}

let playGame = (playerScore=0,computerScore=0) => {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let winner = judgeWinner(playerChoice, computerChoice);
    if(winner === 'tie'){
        console.log("It's a tie!");
    }
    else if(winner === 'player'){    
        playerScore++;
        console.log("Player Score: " + playerScore);
        if(playerScore === 5){
            console.log("Player wins the game!");
            return "Player wins the game!";
        }
    }
    else if(winner === 'computer'){
        computerScore++;
        console.log("Computer Score: " + computerScore);
        if(computerScore === 5){   
            console.log("Computer wins the game!");
            return "Computer wins the game!";
        }    
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore);
    playGame(playerScore, computerScore);
}



playGame();