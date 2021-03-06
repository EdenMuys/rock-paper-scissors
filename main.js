let playerScore = 0;
let compScore = 0;


function computerPlay() { // declare computer choice function
  const comp = Math.floor(Math.random() * 3) + 1;
  if (comp === 1) {
    return "rock";
  } else if (comp === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw! Play again.");
  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log("You lose the round!");
    compScore++;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
    console.log("You win the round!");
    playerScore++;
  } else {
    console.log("Invalid selection.");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
 }
 if (playerScore > compScore) {
  console.log("You win the game!");
 } else if (playerScore < compScore) {
  console.log("You lose the game!");
 } else if (playerScore === compScore) {
  console.log("Draw! Play again?");
 }
}

game();