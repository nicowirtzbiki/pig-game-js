let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 1;
const scoreLimit = 50;
let pile = 0;
let computerPlayer = false;
let computerPlayerTurns = 0;

//ids de textos
let currentPlayerLabel = document.getElementById("turn-message");
let pilingUp = document.getElementById("piling");
let scorePlayer1Label = document.getElementById("scoreP1");
let scorePlayer2Label = document.getElementById("scoreP2");
let pointsMessage = document.getElementById("points-message");

function setDiceValue() {
  let dice = 1;
  dice = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("dice").src = "images/" + dice + ".png";
  if (dice == 1) {
    console.log("saiu 1, perdeu a jogada");
    zeroPile();
    currentPlayerLabel.innerText = "IT'S NUMBER 1, LOST YOUR TURN!";
    setTimeout(turnPlayer, 2000);
  } else {
    pile += dice;
    pilingUp.innerText = String(pile);
    if (currentPlayer == 2 && computerPlayer == true) {
      console.log("entrou no if do dice");
      computerPlayerTurns += 1;
      if (computerPlayerTurns < 3 || pile < 10) {
        console.log("entrou no if do dice pra rodar de novo");
        rollDice();
      } else {
        console.log("caiu fora das consições e passou o player");
        turnPlayer();
      }
    }
  }
}

function rollDice() {
  document.getElementById("dice").src = "images/rodando-dados.gif";
  setTimeout(setDiceValue, 1500);
}

function turnPlayer() {
  buttonsOn();
  if (currentPlayer === 1) {
    scorePlayer1 += pile;
    scorePlayer1Label.innerText = String(scorePlayer1);
    if (scorePlayer1 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 2;
      currentPlayerLabel.classList.remove("has-text-primary");
      currentPlayerLabel.classList.add("has-text-danger");
      currentPlayerLabel.innerText = "IT'S YOUR TURN, PLAYER 2!";
      zeroPile();
      if (computerPlayer === true) {
        console.log("entrou o computador");
        buttonsOff();
        setTimeout(rollDice, 2000);
      }
    }
  } else {
    scorePlayer2 += pile;
    scorePlayer2Label.innerText = String(scorePlayer2);
    if (scorePlayer2 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 1;
      currentPlayerLabel.classList.remove("has-text-danger");
      currentPlayerLabel.classList.add("has-text-primary");
      currentPlayerLabel.innerText = "IT'S YOUR TURN, PLAYER 1!";
      buttonsOn();
      zeroPile();
    }
  }
}

function winGame() {
  buttonsOff();
  document.getElementById("dice").src = "images/fireworks.gif";
  currentPlayerLabel.innerText = String(
    "THE WINNER IS PLAYER " + currentPlayer + "!"
  );
  pointsMessage.innerText = "GAME IS OVER!";
  if (currentPlayer == 1) {
    pilingUp.innerText = String("Total Score: " + scorePlayer1);
  } else {
    pilingUp.innerText = String("Total Score: " + scorePlayer2);
  }
}

function zeroPile() {
  pile = 0;
  pilingUp.innerText = String(pile);
}

function reboot() {
  computerTurns = 0;
  currentPlayer = 1;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scorePlayer1Label.innerText = String(scorePlayer1);
  scorePlayer2Label.innerText = String(scorePlayer2);
  currentPlayerLabel.innerText = "START, PLAYER 1!";
  currentPlayerLabel.classList.remove("has-text-danger");
  currentPlayerLabel.classList.add("has-text-primary");
  pointsMessage.innerText = "ACCUMULATED IN THE ROUND:";
  document.getElementById("dice").src = "images/roll-the-dice.png";
  zeroPile();
  buttonsOn();
}

function buttonsOn() {
  document.getElementById("roll").disabled = false;
  document.getElementById("hold").disabled = false;
}

function buttonsOff() {
  document.getElementById("roll").disabled = true;
  document.getElementById("hold").disabled = true;
}

//---GAME MODE---//

function OnePlayerMode() {
  document.getElementById("one-player").className = "button is-primary";
  document.getElementById("two-players").className =
    "button is-primary is-outlined";
  computerPlayer = true;
  let nameJ2 = document.getElementById("nameJ2");
  nameJ2.innerText = "💻 POINTS PLAYER 2:";
  if (pile > 0 || scorePlayer1 > 0 || scorePlayer2 > 0) {
    reboot();
  }
}

function TwoPlayersMode() {
  document.getElementById("one-player").className =
    "button is-primary is-outlined";
  document.getElementById("two-players").className = "button is-primary";
  computerPlayer = false;
  let nameJ2 = document.getElementById("nameJ2");
  nameJ2.innerText = "🧍 POINTS PLAYER 2:";
  if (pile > 0 || scorePlayer1 > 0 || scorePlayer2 > 0) {
    reboot();
  }
}

//-----BUTTONS-----//
const roll = document.getElementById("roll");
roll.addEventListener("click", rollDice);

const hold = document.getElementById("hold");
hold.addEventListener("click", turnPlayer);

const rebooter = document.getElementById("reboot");
rebooter.addEventListener("click", reboot);

//activates mode one player
const onePlayer = document.getElementById("one-player");
onePlayer.addEventListener("click", OnePlayerMode);

//deactivates mode one player
const twoPlayers = document.getElementById("two-players");
twoPlayers.addEventListener("click", TwoPlayersMode);
