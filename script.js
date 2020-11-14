//Global variables 
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn"); 
const playerDiv = document.querySelector("#player-selection");
const compDiv = document.querySelector("#computer-selection"); 
const resultsDiv = document.querySelector("#results");
const scoreboardDiv = document.querySelector("#scoreboard");
const resetBtn = document.querySelector("#reset");

// Function for computers choice
function computerPlay() {

    // Generate random number between 0-2 
    let choice = Math.floor(Math.random() * 3);
    
    // Return rock, paper, or scissors based on random number
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to end game
function endGame(result) {
    if (result == "player") {
        resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
        scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
        resetBtn.innerHTML = "Play Again";
    }
    else if (result == "computer") {
        resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
        scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
        resetBtn.innerHTML = "Play Again";
    }
}

// Function to play round 
function playRound(playerSelection, computerSelection) {


    // Convert player input to lowercase
    playerSelection = playerSelection.toLowerCase();

    
    // If player choice is rock
    if (playerSelection == "rock" && (playerScore != 5 && computerScore != 5)) {
       
        // Clear player, computer and results divs
        playerDiv.textContent = "";
        compDiv.textContent = "";
        resultsDiv.textContent = "";

        switch(computerSelection) {
            case "rock":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose ROCK";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose ROCK";
                }, 1000);
                setTimeout(function(){
                    resultsDiv.textContent = "It's a tie!";
                }, 1500);
                return;
            case "paper":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose ROCK";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose PAPER";
                }, 1000);
                setTimeout(function() {
                    resultsDiv.textContent = "You lose! Paper beats Rock";
                    computerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`; 
                }, 1500);
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");
                    }
                    else if (computerScore == 5) {
                        endGame("computer"); 
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
            case "scissors":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose ROCK";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose SCISSORS";
                }, 1000);
                setTimeout(function() {
                    resultsDiv.textContent = "You win! Rock beats Scissors";
                    playerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                }, 1500);
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");
                    }
                    else if (computerScore == 5) {
                        endGame("computer"); 
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
        }
    }

    // If players choice is paper
    else if (playerSelection == "paper" && (playerScore != 5 && computerScore != 5)) {

        // Clear player, computer and results divs
        playerDiv.textContent = "";
        compDiv.textContent = "";
        resultsDiv.textContent = "";

        switch(computerSelection) {
            case "paper": 
                setTimeout(function() {
                    playerDiv.textContent = "You Chose PAPER";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose PAPER";
                }, 1000);
                setTimeout(function(){
                    resultsDiv.textContent = "It's a tie!";
                }, 1500);
                return;
            case "rock":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose PAPER";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Comptuer Chose ROCK";
                }, 1000);
                setTimeout(function() {
                    resultsDiv.textContent = "You win! Paper beats Rock";
                    playerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                }, 1500);
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");  
                    }
                    else if (computerScore == 5) {
                        endGame("comptuer");  
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;
            case "scissors":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose PAPER";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose SCISSORS";
                }, 1000); 
                setTimeout(function() {
                    resultsDiv.textContent = "You lose! Scissors beats Paper";
                    computerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                }, 1500); 
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");  
                    }
                    else if (computerScore == 5) {
                        endGame("computer");  
                    }
                    else {
                        return; 
                    }
                }, 2000);
                return;           
        }
    }

    // If players choice is scissors
    else if (playerSelection == "scissors" && (playerScore != 5 && computerScore != 5)){

        // Clear player, computer and results divs
        playerDiv.textContent = "";
        compDiv.textContent = "";
        resultsDiv.textContent = "";

        switch(computerSelection) {
            case "scissors": 
                setTimeout(function() {
                    playerDiv.textContent = "You Chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Comptuer Chose SCISSORS";
                }, 1000);
                setTimeout(function() {
                    resultsDiv.textContent = "It's a tie!";
                }, 1500);
                return;
            case "rock": 
                setTimeout(function() {
                    playerDiv.textContent = "You Chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose ROCK";
                }, 1000); 
                setTimeout(function() {
                    resultsDiv.textContent = "You lose! Rock beats Scissors";
                    computerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                }, 1500); 
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");
                        return; 
                    }
                    else if (computerScore == 5) {
                        endGame("computer");
                        return; 
                    }
                    else {
                        return; 
                    }
                }, 2000); 
                return;  
            case "paper":
                setTimeout(function() {
                    playerDiv.textContent = "You Chose SCISSORS";
                }, 500);
                setTimeout(function() {
                    compDiv.textContent = "Computer Chose PAPER";
                }, 1000);
                setTimeout(function() {
                    resultsDiv.textContent = "You win! Scissors beats Paper";
                    playerScore += 1;
                    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                }, 1500);
                setTimeout(function() {
                    if (playerScore == 5) {
                        endGame("player");
                        return;  
                    }
                    else if (computerScore == 5) {
                        endGame("computer");
                        return; 
                    }
                    else {
                        return; 
                    }
                }, 2000); 
                return;      
        }
    }
    else {
        return;
    }
}


// Function to reset game
function resetGame() {

    // Set scores to zero
    playerScore = 0;
    computerScore = 0;

    // Update DOM
    playerDiv.textContent = "";
    compDiv.textContent = "";
    resultsDiv.textContent = "Make a choice to play! First to 5 points wins!";
    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
    resetBtn.innerHTML = "Reset Game";
}

// Add event listener to each choice button 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, computerPlay());
    });
});

// Add event listener to reset button
const reset = document.querySelector("#reset");

reset.addEventListener("click", resetGame);