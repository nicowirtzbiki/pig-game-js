let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 1;
const scoreLimit = 50;
let pile = 0;

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
    zeroPile();
    currentPlayerLabel.innerText = "SAIU O NÚMERO 1, PERDEU A RODADA!";
    setTimeout(turnPlayer, 2000);
  } else {
    pile += dice;
    pilingUp.innerText = String(pile);
  }
}

function rollDice() {
  document.getElementById("dice").src = "images/rodando-dados.gif";
  setTimeout(setDiceValue, 1500);
}

function turnPlayer() {
  if (currentPlayer === 1) {
    scorePlayer1 += pile;
    scorePlayer1Label.innerText = String(scorePlayer1);
    if (scorePlayer1 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 2;
      currentPlayerLabel.innerText = "É A SUA VEZ, JOGADOR 2!";
      zeroPile();
    }
  } else {
    scorePlayer2 += pile;
    scorePlayer2Label.innerText = String(scorePlayer2);
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
  document.getElementById("roll").disabled = true;
  document.getElementById("hold").disabled = true;
  currentPlayerLabel.innerText = String(
    "O VENCEDOR É O JOGADOR " + currentPlayer + "!"
  );
  pointsMessage.innerText = "JOGO FINALIZADO!";
  if (currentPlayer == 1) {
    pilingUp.innerText = String("Total de Pontos: " + scorePlayer1);
  } else {
    pilingUp.innerText = String("Total de Pontos: " + scorePlayer2);
  }
}

function zeroPile() {
  pile = 0;
  pilingUp.innerText = String(pile);
}

function reboot() {
  currentPlayer = 1;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scorePlayer1Label.innerText = String(scorePlayer1);
  scorePlayer2Label.innerText = String(scorePlayer2);
  currentPlayerLabel.innerText = "COMECE, JOGADOR 1!";
  zeroPile();
  document.getElementById("roll").disabled = false;
  document.getElementById("hold").disabled = false;
}

//-----BOTÕES-----//
const roll = document.getElementById("roll");
roll.addEventListener("click", rollDice);

const hold = document.getElementById("hold");
hold.addEventListener("click", turnPlayer);

const rebooter = document.getElementById("reboot");
rebooter.addEventListener("click", reboot);
