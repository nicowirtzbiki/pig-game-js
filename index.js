let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 1;
const scoreLimit = 20;
let pile = 0;

//ids de textos
let currentPlayerLabel = document.getElementById("turn-message");
let pilingUp = document.getElementById("piling");
let scorePlayer1Label = document.getElementById("scoreP1");
let scorePlayer2Label = document.getElementById("scoreP2");

function rollDice() {
  let dice = 1;
  dice = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("dice").src = "images/" + dice + ".png";
  if (dice == 1) {
    zeroPile();
    turnPlayer();
  } else {
    pile += dice;
    pilingUp.innerText = String("Acumulado: " + pile);
  }
}

function turnPlayer() {
  if (currentPlayer === 1) {
    scorePlayer1 += pile;
    scorePlayer1Label.innerText = String("Score Jogador 1: " + scorePlayer1);
    if (scorePlayer1 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 2;
      currentPlayerLabel.innerText = "É A SUA VEZ, JOGADOR 2!";
      zeroPile();
    }
  } else {
    scorePlayer2 += pile;
    scorePlayer2Label.innerText = String("Score Jogador 2: " + scorePlayer2);
    if (scorePlayer2 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 1;
      currentPlayerLabel.innerText = "É A SUA VEZ, JOGADOR 1!";
      zeroPile();
    }
  }
}

function winGame() {
  currentPlayerLabel.innerText = String(
    "VOCÊ GANHOU, JOGADOR " + currentPlayer + "!"
  );
  if (currentPlayer == 1) {
    pilingUp.innerText = String("Total de Pontos: " + scorePlayer1);
  } else {
    pilingUp.innerText = String("Total de Pontos: " + scorePlayer2);
  }
}

function zeroPile() {
  pile = 0;
  pilingUp.innerText = String("Acumulado: " + pile);
}

function reboot() {
  currentPlayer = 1;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scorePlayer1Label.innerText = String("Score Jogador 1: " + scorePlayer1);
  scorePlayer2Label.innerText = String("Score Jogador 2: " + scorePlayer2);
  currentPlayerLabel.innerText = "É A SUA VEZ, JOGADOR 1!";
  zeroPile();
}

//-----BOTÕES-----//
const roll = document.getElementById("roll");
roll.addEventListener("click", rollDice);

const hold = document.getElementById("hold");
hold.addEventListener("click", turnPlayer);

const rebooter = document.getElementById("reboot");
rebooter.addEventListener("click", reboot);
