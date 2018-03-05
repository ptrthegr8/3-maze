let gameBoard = document.getElementById("gameBoard");

let posX = 0;
let posY = 9;
winningPos = false;
let board = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

for (var r = 0; r < board.length; r++) {
    var row = document.createElement("div");
    row.classList.add("row");

    for (var c = 0; c < board[r].length; c++) {
        switch (board[r][c]) {
            case "F":
                var finish = document.createElement("div");
                finish.classList.add("finish", "cell", "column");
                row.appendChild(finish);
                break;
            case "W":
                var wall = document.createElement("div");
                wall.classList.add("wall", "cell", "column");
                row.appendChild(wall);
                break;
            case "S":
                var start = document.createElement("div");
                start.classList.add("start", "cell", "column");
                row.appendChild(start);
                break;
            case " ":
                var empty = document.createElement("div");
                empty.classList.add("cell", "column");
                row.appendChild(empty);

        }
    }
    gameBoard.appendChild(row)
}
//activates arrow keys and moves player
var boxtop = 458;
var boxleft = 19;

'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if (keyName === "ArrowDown") {
        if (posY < 14 && posY > 0) {
            if (board[posY + 1][posX] === " ") {
                boxtop += 50;
                posY += 1;
                document.getElementById("player").style.top = boxtop + "px";
            }
        } else if (board[posY + 1][posX] === "F") {
            winningPos = true;
        }
    }
    //
    if (keyName === "ArrowUp") {
        if (posY < 14 && posY > 0) {
            if (board[posY - 1][posX] === " ") {
                boxtop -= 50;
                posY -= 1;
                document.getElementById("player").style.top = boxtop + "px";
            }
        } else if (board[posY - 1][posX] === "F") {
            winningPos= true;
        }

    }
    //
    if (keyName === "ArrowRight") {
        if (posX < 21 && posX >= 0) {
            if (board[posY][posX + 1] === " ") {
                posX += 1;
                boxleft += 50;
                document.getElementById("player").style.left = boxleft + "px";
            }
        } else if (board[posY][posX + 1] === "F") { 
            winningPos === true;
        }

    }
    //
    if (keyName === "ArrowLeft") {
        if (posX < 21 && posX >= 0) {
            if (board[posY][posX - 1] === " ") {
                posX -= 1;
                boxleft -= 50;
                document.getElementById("player").style.left = boxleft + "px";
            }
        } else if (board[posY][posX - 1] === "F") {
            winningPos === true;
        }
    }
    if (winningPos) {
        alert("You win!")
    }
    // console.log(boxtop);
    // document.getElementById("player").style.top = boxtop + "px";
    // document.getElementById("player").style.left = boxleft + "px";
});