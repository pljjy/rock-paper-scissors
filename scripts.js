// CONSTANTS
const emojis = {"rock": "🪨", "paper": "📃", "scissors": "✂️"}
const choices = {0: "rock", 1: "paper", 2: "scissors"};
// apparently there are no enums in js💀

const state = document.querySelector(".state");
const userEmoji = document.querySelector("#user-emoji");
const computerEmoji = document.querySelector("#computer-emoji");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// EVERYTHING ELSE
rockBtn.addEventListener("click", e => play(e.target.id));
paperBtn.addEventListener("click", e => play(e.target.id));
scissorsBtn.addEventListener("click", e => play(e.target.id))

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function play(userChoice) {
    if (state.classList.contains("green"))
        state.classList.remove("green");

    if (state.classList.contains("red"))
        state.classList.remove("red");

    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    computerEmoji.innerHTML = emojis[computerChoice];
    userEmoji.innerHTML = emojis[userChoice];

    if (winner === "user") {
        userScore.innerHTML++;
        state.innerHTML = "Congratulations! You won!";
        state.classList.add("green");
    } else if (winner === "computer") {
        computerScore.innerHTML++;
        state.innerHTML = "Oh no, you lost!";
        state.classList.add("red");
    } else {
        state.innerHTML = "A draw!";
    }
}

// returns either "user" or "computer" or "draw"
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice)
        return "draw";

    if (userChoice === "rock") {
        if (computerChoice === "scissors")
            return "user";
        return "computer";
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock")
            return "user";
        return "computer";
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper")
            return "user";
        return "computer";
    }
}