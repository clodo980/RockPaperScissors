// display alert "Game ended." missing on null (esc/exit)

function playRound() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * computerSelection.length);
    
    if (playerSelection === "rock" && computerSelection[random] === "rock") {
        alert("Computer throws rock. Tie!");
    } else if (playerSelection === "rock" && computerSelection[random] === "paper") {
        alert("Computer throws paper. You lose!");
    } else if (playerSelection === "rock" && computerSelection[random] === "scissors") {
        alert("Computer throws scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection[random] === "paper") {
        alert("Computer throws paper. Tie!");
    } else if (playerSelection === "paper" && computerSelection[random] === "scissors") {
        alert("Computer throws scissors. You lose!");
    } else if (playerSelection === "paper" && computerSelection[random] === "rock") {
        alert("Computer throws rock. You win!");
    } else if (playerSelection === "scissors" && computerSelection[random] === "scissors") {
        alert("Computer throws scissors. Tie!");
    } else if (playerSelection === "scissors" && computerSelection[random] === "rock") {
        alert("Computer throws rock. You lose!");
    } else if (playerSelection === "scissors" && computerSelection[random] === "paper") {
        alert("Computer throws paper. You win!");
    } else {
        alert("That’s not part of the game. Try again.")
    }

    console.log("Player throws " +
            playerSelection + " || " + "Computer throws " +
            computerSelection[random]);
};

function gameOf5() {
    let i = 1;
    const n = 5;
    while (i <= n + 1) {
        if (i <= n) {
            console.log("Game no. " + i + ": ")
            playRound();
            i++;
        } else {
            console.log("Game over!");
        };
    };
};

gameOf5();
