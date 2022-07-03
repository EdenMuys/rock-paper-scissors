function computerPlay() { // declare computer choice function
  const comp = Math.floor(Math.random() * 3) + 1;
  if (comp === 1) {
    return "rock";
  } else if (comp === 2) {
    return "paper";
  } else {
    return "scissors"
  }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw! Play again.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win the round!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win the round!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win the round!";
  } else {
    alert("Invalid selection, try again.");
  }
}

console.log(playRound(playerSelection, computerSelection));