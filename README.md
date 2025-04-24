# Pig Game 🎲

[**Live Demo on GitHub Pages**](https://nicowirtzbiki.github.io/pig-game-js/)

A simple virtual dice game built with HTML, CSS, and JavaScript.

---

## 🎮 About the Game

Pig Game is a two-player turn-based dice game where each player tries to reach a total score of 50 points first. The gameplay is straightforward and fun, focusing on risk management and chance.

### How to Play:

- **🎲 Roll Dice**:  
  The active player rolls a dice. If the result is **not 1**, the value is added to their **Current Score**. If the result **is 1**, the player loses their current score and it's the other player’s turn.
- **📥 Hold**:  
  The player can choose to "Hold", which adds the current score to their **Total Score**. If the Total Score reaches **50 or more**, the player wins the game.

- **🔁 Restart Game**:  
  Resets all scores and sets Player 1 as the starting player.

---

## 🛠️ Tech Stack

- **HTML** – Structure and layout
- **CSS + Bulma** – Styling, responsiveness, and layout helpers
- **JavaScript** – Game logic and interactivity

---

## 📌 Notes

- This project was created as part of my learning journey in JavaScript.
- It’s fully responsive and playable directly in the browser.
- Feel free to fork the repository and enhance the game further!

---

## 📁 Project Structure

pig-game-js/ ├── index.html # HTML layout ├── style.css # CSS styling ├── script.js # Game logic └── dice.png # Dice image used in the UI

<ul>
  <li>HTML File (index.html)</li>
  <li>CSS File (style.css)</li>
  <li>JavaScript File (script.js file)</li></li>
  <li>Images (dice.png file)</li>
</ul>

## <!--

<p>There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.</p>

<ol>
  <li> Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section. Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa. </li>
  <li> Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.</li>
  <li> Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player). </li>
</ol>
  
<h4>Making of Game:</h4>
<p>Being a game rendered by the web browser, it is built by the help of HTML, CSS (for the Front-end) and JavaScript (for the Back-end). The main logic of the game lies in the JS file whereas the appearance and the User Interface is rendered by HTML and CSS. In this project, there are basically four types of files:</p>
  
<ul>
  <li>HTML File (index.html)</li>
  <li>CSS File (style.css)</li>
  <li>JavaScript File (script.js file)</li></li>
  <li>Images (dice.png file)</li>
</ul>
-->
