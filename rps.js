// display alert "Game ended." missing on null (esc/exit)

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length); // choose between the first, second, or third string in the array
    computerSelection = choices[random];

    if (playerSelection === "rock" &&  computerSelection === "rock") {
        alert("Computer throws rock. Tie!");
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("Computer throws paper. You lose!");
        computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("Computer throws scissors. You win!");
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Computer throws paper. Tie!");

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("Computer throws scissors. You lose!");
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("Computer throws rock. You win!");
        playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Computer throws scissors. Tie!");

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("Computer throws rock. You lose!");
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("Computer throws paper. You win!");
        playerScore += 1;
    } else {
        alert("That’s not part of the game. Try again.");
        
    }

    console.log("Player throws " +
            playerSelection + " || " + "Computer throws " +
            computerSelection + ". Player score: " + playerScore +
            " || " + "Computer score: " + computerScore);
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
            if (playerScore > computerScore) {
                console.log("Player wins!")
            } else {
                console.log("Computer wins!")
            }
            break;
        };
    };
};

gameOf5();
