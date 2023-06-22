let getComputerChoice = () => {
    let randomSelection = Math.floor(Math.random() * 3); // 0, 1, or 2 to match array index
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

let judgeWinner = (playerChoice, computerChoice) => {
    let winner;
    let result;
    let results = {};

    if(playerChoice === computerChoice){
        winner = 'tie';
    }
    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            result = "Paper covers rock! Computer wins!";
            winner = 'computer';
        }
        else{
            result = "Rock breaks scissors! Player wins!";
            winner = 'player';
        }
    }
    else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            result = "Paper covers rock! Player wins!";
            winner = 'player';
        }
        else{
            result = "Scissors cuts paper! Computer wins!";
            winner = 'computer';
        }
    }
    else{
        if(computerChoice === 'rock'){
            result = "Rock breaks scissors! Computer wins!";
            winner = 'computer';
        }
        else{
            result = "Scissors cuts paper! Player wins!";
            winner = 'player';
        }
    }
    results.resultMessage = (winner == 'tie') ? "It's a tie!" : result;
    results.winner = winner;
    return results;
}

let tallyScore = (winner) => {
    let score = Number(document.querySelector(`#${winner}`).getAttribute('data-score'));
    score++;

    let scoreTextHolder = document.querySelector(`#${winner}`);
    let resultTextHolder = document.querySelector('#result');
    scoreTextHolder.setAttribute('data-score',`${score}`);
    scoreTextHolder.textContent = score;
    if(score === 5){
        resultTextHolder.textContent = winner.charAt(0).toUpperCase() + winner.slice(1) + " wins the game!";
        let buttons = document.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.disabled = true;
        });
        let resetButton = document.querySelector('#reset');
        resetButton.style.display = 'block';
        resetButton.addEventListener('click', (e) => {
            let scoreTextHolders = document.querySelectorAll('span.score');
            scoreTextHolders.forEach((scoreTextHolder) => {
                scoreTextHolder.setAttribute('data-score', '0');
                scoreTextHolder.textContent = '0';
            });
            resetButton.style.display = 'none';
            buttons.forEach((button) => {
                button.disabled = false;
            });
        });
    }
}

let resetScore = () => {

}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = button.id;
        let computerChoice = getComputerChoice();
        let result = judgeWinner(playerChoice, computerChoice);
        let resultTextHolder = document.querySelector('#result');
        resultTextHolder.textContent = result.resultMessage;
        if(result.winner !== 'tie'){
            tallyScore(result.winner);
        }
    });
});



//playGame();