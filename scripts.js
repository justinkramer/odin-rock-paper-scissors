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