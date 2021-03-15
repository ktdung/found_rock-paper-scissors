// console.log("Hello World!");

function computerPlay() {
  let computerRound = Math.floor(Math.random() * 3);
  if (computerRound === 0) {
    return "rock";
  } else if (computerRound === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  let newPlayerSelection = playerSelection.toLowerCase();

  if (newPlayerSelection === "rock") {
    if (computerSelection === "rock") {
      computerScore = computerScore + 0.5;
      playerScore = playerScore + 0.5;
      return `It's a tie`;
    } else if (computerSelection === "paper") {
      computerScore = computerScore + 1;
      return `You lose! Paper beats Rock`;
    } else {
      playerScore = playerScore + 1;
      return `You win! Rock beats Scissors`;
    }
  } else if (newPlayerSelection === "paper") {
    if (computerSelection === "paper") {
      computerScore = computerScore + 0.5;
      playerScore = playerScore + 0.5;
      return `It's a tie`;
    } else if (computerSelection === "rock") {
      playerScore = playerScore + 1;
      return `You will! Paper beats Rock`;
    } else {
      computerScore = computerScore + 1;
      return `You lose! Scissors beats Paper`;
    }
  } else if (newPlayerSelection === "scissors") {
    if (computerSelection === "scissors") {
      computerScore = computerScore + 0.5;
      playerScore = playerScore + 0.5;
      return `It's a tie`;
    } else if (computerSelection === "Rock") {
      computerScore = computerScore + 1;
      return `You lose! Rock beats Scissors`;
    } else {
      playerScore = playerScore + 1;
      return `You win! Scissors beats Paper`;
    }
  }
}
var playerScore = 0;
var computerScore = 0;
function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = window.prompt(
      "What is your choice < Paper || Rock || Scissors >?"
    );
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
console.log(`Player score: ${playerScore} vs Computer score: ${computerScore}`);
