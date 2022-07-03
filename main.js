let user = 0; // player choice variable
let comp = Math.floor(Math.random() * 3) + 1; // computer choice variable

function computerPlay() { // computer choice function
  if (comp == 1) {
    console.log("Rock");
    return comp;
  } else if (comp == 2) {
    console.log("Paper");
    return comp;
  } else {
    console.log("Scissors");
    return comp;
  }
}

