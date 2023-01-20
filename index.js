/* command used so the prompt works on the vscode terminal */
const prompt = require("prompt-sync")({ sigint: true});

const choices = ['rock', 'paper', 'scissor'];


function getComputerChoice (choices) {
    return choices[Math.floor(Math.random() * choices.length)];
};


function getPlayerChoice () {
    return prompt('What is your choice?: ').toLowerCase();
};


function playRound(playerSelection, computerSelection) {

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'won';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'won';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'won';
    } else {
        return 'lose';
    };
};


let i = 0;
let playerCount = 0;
let computerCount = 0;

while (playerCount < 5 && computerCount < 5) {

    let roundPlayed = playRound(getPlayerChoice(), getComputerChoice(choices));

    if (roundPlayed === 'won') {
        playerCount += 1;
        i += 1;
    } else if (roundPlayed === 'lose') {
        computerCount += 1;
        i += 1;
    };
};

console.log(`player counter: ${playerCount}`)
console.log(`computer counter: ${computerCount}`)

if (playerCount < computerCount) {
    console.log("Computer Won")
} else {
    console.log("You Won")
};