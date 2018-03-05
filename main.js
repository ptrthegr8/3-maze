//activates arrow keys and moves player
var boxtop = 200;
var boxleft = 200;

'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if (keyName === "ArrowDown") {
        boxtop += 10;
    } else if (keyName === "ArrowUp") {
        boxtop -= 10;
    }
    if (keyName === "ArrowRight") {
        boxleft += 10;
    } else if (keyName === "ArrowLeft") {
        boxleft -= 10;
    }
    console.log(boxtop);
    document.getElementById("box").style.top = boxtop + "px";
    document.getElementById("box").style.left = boxleft + "px";
});

//map
const map = [
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