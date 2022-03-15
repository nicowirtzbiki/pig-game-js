let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 1;
const scoreLimit = 50;
let pile = 0;
let computerPlayer = false;
let computerTurns = 0;

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
    setTimeout(turnPlayer, 1500);
  } else {
    pile += dice;
    pilingUp.innerText = String(pile);
    if (currentPlayer == 2) {
      computerTurns += 1;
    }
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
      if (computerPlayer === true) {
        setTimeout(computerPlayerLogic, 2000);
      }
    }
  } else {
    scorePlayer2 += pile;
    scorePlayer2Label.innerText = String(scorePlayer2);
    if (scorePlayer2 >= scoreLimit) {
      winGame();
    } else {
      currentPlayer = 1;
      currentPlayerLabel.innerText = "É A SUA VEZ, JOGADOR 1!";
      buttonsOn();
      zeroPile();
    }
  }
}

function winGame() {
  buttonsOff();
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
  computerTurns = 0;
  currentPlayer = 1;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scorePlayer1Label.innerText = String(scorePlayer1);
  scorePlayer2Label.innerText = String(scorePlayer2);
  currentPlayerLabel.innerText = "COMECE, JOGADOR 1!";
  pointsMessage.innerText = "ACUMULADO NA RODADA:";
  zeroPile();
  buttonsOn();
  TwoPlayersMode();
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
  document.getElementById("one-player").className = "button is-danger";
  document.getElementById("two-players").className =
    "button is-danger is-outlined";
  computerPlayer = true;
  let nomeJ2 = document.getElementById("nomeJ2");
  nomeJ2.innerText = "💻 PONTOS JOGADOR 2:";
}

function TwoPlayersMode() {
  document.getElementById("one-player").className =
    "button is-danger is-outlined";
  document.getElementById("two-players").className = "button is-danger";
  computerPlayer = false;
  let nomeJ2 = document.getElementById("nomeJ2");
  nomeJ2.innerText = "🧍 PONTOS JOGADOR 2:";
}

function computerPlayerLogic() {
  console.log("Começou!"); //AVISO DE CONSOLE
  buttonsOff();
  let dice;

  function computerDice() {
    computerTurns += 1;
    dice = 1;
    dice = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice").src = "images/" + dice + ".png";
    console.log("o dado saiu:" + dice); //AVISO DE CONSOLE
    return dice;
  }

  function imagemQualquer() {
    document.getElementById("dice").src = "images/3.png";
  }

  function promessDice() {
    return new Promise(function (resolve) {
      document.getElementById("dice").src = "images/rodando-dados.gif";
      setTimeout(imagemQualquer, 10000);
      resolve();
    });
  }
  promessDice().then(function () {
    computerDice();
    if (dice == 1) {
      zeroPile();
      currentPlayerLabel.innerText = "SAIU O NÚMERO 1, PERDEU A RODADA!";
      setTimeout(turnPlayer, 2000);
    } else {
      pile += dice;
      pilingUp.innerText = String(pile);
      if (computerTurns < 4 || pile < 15) {
        computerPlayerLogic();
      } else {
        setTimeout(turnPlayer, 2000);
      }
    }
  });
}

// function computerPlayerLogic() {
//   function shout() {
//     console.log("rodou o gif"); //AVISO DE CONSOLE
//   }
//   buttonsOff();
//   document.getElementById("dice").src = "images/rodando-dados.gif";
//   setTimeout(shout, 10000);
// }

//-----BOTÕES-----//
const roll = document.getElementById("roll");
roll.addEventListener("click", rollDice);

const hold = document.getElementById("hold");
hold.addEventListener("click", turnPlayer);

const rebooter = document.getElementById("reboot");
rebooter.addEventListener("click", reboot);

//habilita modo one player
const onePlayer = document.getElementById("one-player");
onePlayer.addEventListener("click", OnePlayerMode);

//const two players desabilita modo one player
const twoPlayers = document.getElementById("two-players");
twoPlayers.addEventListener("click", TwoPlayersMode);
