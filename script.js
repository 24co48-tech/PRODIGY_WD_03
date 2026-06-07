let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playGame(index) {
    if (board[index] !== "" || gameActive === false) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;

    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("message").innerHTML = "Player " + currentPlayer + "'s Turn";
    }
}

function checkWinner() {
    for (let i = 0; i < winningPatterns.length; i++) {
        let pattern = winningPatterns[i];

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            document.getElementById("message").innerHTML = "Player " + currentPlayer + " Wins!";
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("message").innerHTML = "Game Draw!";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    let cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    document.getElementById("message").innerHTML = "Player X's Turn";
}