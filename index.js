document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.playerChoice').addEventListener('click', event => getPlayerChoice(event));
    document.querySelector('#playAgain').addEventListener('click', () => restartGame())
});

function getPlayerChoice (event) {
    if (event.target.alt === undefined) return;
    return playGame(event.target.alt, getComputerChoice())
};

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissor'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.computer .${choice}`).classList.add(`played${choice}`)
    return choice
};

let playerCount = 0;
let computerCount = 0;


function playGame(playerChoice, computerChoice) {

    console.log(`Player: ${playerChoice}`)
    console.log(`Computer: ${computerChoice}`)

    const winner = document.querySelector('.whoWon');    

    if (playerChoice === computerChoice) {
        winner.innerHTML = 'TIE'
    } else {
        switch (playerChoice + computerChoice) {
            case 'rockscissor':
                winner.innerHTML = 'Player Won';
                playerCount += 1;
                break;
            case 'paperrock':
                winner.innerHTML = 'Player Won';
                playerCount += 1;
                break;
            case 'scissorpaper':
                winner.innerHTML = 'Player Won';
                playerCount += 1; 
                break; 
            default:
                winner.innerHTML = 'Computer Won';
                computerCount += 1; 
        }
    };

    document.querySelector('#computerScore').innerHTML = `Computer ${computerCount}`;
    document.querySelector('#playerScore').innerHTML = `Player ${playerCount}`;
    document.querySelector(`.played${computerChoice}`).addEventListener('transitionend', event => {
        event.target.classList.remove(`played${computerChoice}`)
    });

    if (playerCount >= 5 || computerCount >= 5) {
        document.querySelector('.modal-body').innerHTML = (playerCount > computerCount ? 'You Won!': 'You Lost!');
        $('#endGame').modal('show');
    };
}


function restartGame() {
    playerCount = 0;
    computerCount = 0;
    document.querySelector('#computerScore').innerHTML = `Computer ${computerCount}`;
    document.querySelector('#playerScore').innerHTML = `Player ${playerCount}`;
};