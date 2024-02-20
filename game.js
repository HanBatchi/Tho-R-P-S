let playerWin = 0;
let computerWin = 0;

function getComputerChoice(){
  let computerMove = Math.random()

  if (computerMove > 0 && computerMove < 0.3) {
    return "Rock"
  } else if (computerMove > 0.3 && computerMove < 0.6){
    return  "Paper"
  } else if(computerMove > 0.6 && computerMove < 0.9){
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection){ 

  if(playerSelection == "rock" && computerSelection == "Rock"){
    console.log("This was a tie!")
    computerWin++;
    playerWin++;
  } else if (playerSelection == "rock" && computerSelection == "Paper"){
    computerWin++;
    console.log("Computer wins!")
  } else if (playerSelection == "rock" && computerSelection == "Scissors"){
    playerWin++;
    console.log("Player wins!")
  }

  if(playerSelection == "paper" && computerSelection == "Rock"){
    playerWin++;
    console.log("Player wins!")
  } else if (playerSelection == "paper" && computerSelection == "Paper"){
    computerWin++;
    playerWin++;
    console.log("This was a tie!")
  } else if (playerSelection == "paper" && computerSelection == "Scissors"){
    computerWin++;
    console.log("Computer wins!")
  }

  if(playerSelection == "scissors" && computerSelection == "Rock"){
    computerWin++;
    console.log("Computer wins!")
  } else if (playerSelection == "scissors" && computerSelection == "Paper"){
    playerWin++;
    console.log("Player wins!!")
  } else if (playerSelection == "scissors" && computerSelection == "Scissors"){
    computerWin++;
    playerWin++;
    console.log("This was a tie!")
  }

  console.log(`Computer wins ${computerWin}`);
  console.log(`Player wins ${playerWin}`);
}


function playGame(){
  let playerSelection = (prompt("Choose your hand", "").toLowerCase());
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();