//Declaration varaibles
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const resultsContainer = document.querySelector("#result");
const userChoise = document.createElement("p");
const computerChoice = document.createElement("p");
const result = document.createElement("h2");
const count = document.createElement("span");

let playerWin = 0;
let computerWin = 0;
let roundsPlayed = 0;

function playGame(playerSelection){
  //Increase round played
    roundsPlayed++;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    computerChoice.textContent = `Computer choice: ${computerSelection}`;
    resultsContainer.appendChild(computerChoice);

    count.textContent = `Computer score: ${computerWin}` + " " + `Your score: ${playerWin}`;
    count.style.fontWeight = "bold";
    resultsContainer.appendChild(count);

    if(roundsPlayed === 5){
      showWinner();
    }

};


btnRock.addEventListener("click",()=>{
  playGame(playerSelection = "Rock");
});

btnPaper.addEventListener("click",()=>{
  playGame(playerSelection = "Paper"); 
});
btnScissors.addEventListener("click",() =>{
  playGame(playerSelection = "Scissors");
});


function getComputerChoice(){
  let computerMove = Math.random()

  if (computerMove > 0 && computerMove < 0.3) {
    return "Rock"
  } else if (computerMove > 0.3 && computerMove < 0.6){
    return  "Paper"
  } else if(computerMove > 0.6 && computerMove < 1){
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection){ 
  const tieTitle = result.textContent = "This was a tie!"
  resultsContainer.appendChild(result)

  if(playerSelection == "Rock" && computerSelection == "Rock"){
    tieTitle;
    computerWin++;
    playerWin++;
  } else if (playerSelection == "Rock" && computerSelection == "Paper"){
    result.textContent = "Computer wins!"
    resultsContainer.appendChild(result)
    computerWin++;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
    result.textContent = "Player wins!"
    resultsContainer.appendChild(result)
    playerWin++;
  }

  if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerWin++;
    result.textContent = "Player wins!"
    resultsContainer.appendChild(result)
  } else if (playerSelection == "Paper" && computerSelection == "Paper"){
    computerWin++;
    playerWin++;
    tieTitle;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
    computerWin++;
    result.textContent = "Computer wins!"
    resultsContainer.appendChild(result)
  }

  if(playerSelection == "Scissors" && computerSelection == "Rock"){
    computerWin++;
    result.textContent = "Computer wins!"
    resultsContainer.appendChild(result)
  } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
    playerWin++;
    result.textContent = "Player wins!"
    resultsContainer.appendChild(result)
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
    computerWin++;
    playerWin++;
    tieTitle;
  }

  console.log(`Computer wins ${computerWin}`);
  console.log(`Player wins ${playerWin}`);
}

function showWinner(){
    let winner;
    if(playerWin > computerWin){
      winner = "You won the game!";
    } else if(computerWin > playerWin){
      winner = "You lost the game!";
    } else {
      winner = "This game it's a tie!";
    }
    result.textContent = `${winner}`;
    resultsContainer.removeChild(count);
    resultsContainer.removeChild(computerChoice);
    resultsContainer.appendChild(result);
}