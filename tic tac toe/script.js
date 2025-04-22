let musicM = new Audio("./music.mp3");
let turnM = new Audio("./ting.mp3");
let gameoverM = new Audio("./gameover.mp3");
let turn = "X"
let isgameover = false
console.log("welcom")

//Function to change turn
const changeTurn = () => {
    return turn == "X" ? "0" : "X";
}

//Function to check win
const checkWin = () => {
    let boxes = document.getElementsByClassName("textbox");
    console.log(boxes)
    let winCases = [
        [1, 2, 3, 0, 5, 0],
        [4, 5, 6, 0, 15, 0],
        [7, 8, 9, 0, 25, 0],
        [1, 4, 7, -10, 15, 90],
        [2, 5, 8, 0, 15, 90],
        [3, 6, 9, 10, 15, 80],
        [1, 5, 9, 1, 16, 45],
        [3, 5, 7, -1, 16, 135]
    ];

    for (let j = 0; j < winCases.length; j++) {
        let a = boxes[winCases[j][0] - 1].innerHTML;
        let b = boxes[winCases[j][1] - 1].innerHTML;
        let c = boxes[winCases[j][2] - 1].innerHTML;
        let i1 = winCases[j][3];
        let i2 = winCases[j][4];
        let i3 = winCases[j][5];

        if (a === b && b === c && a !== '') {
            document.querySelector(".gameinfo").innerHTML = a + " WON";
            isgameover = true
            document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "150px";
            document.querySelector(".line").style.transform = `translate(${i1}vw,${i2}vw) rotate(${i3}deg)`;
            document.querySelector(".line").style.width = "30vw";
        }
    }

}

//Logic 
//musicM.play();
let rooms = document.getElementsByClassName("room");
for (let i = 0; i < rooms.length; i++) {
    let box = rooms[i].querySelector(".textbox");
    rooms[i].addEventListener('click', (e) => {
        if (box.innerHTML == '') {
            box.innerHTML = turn;
            turnM.play();
            turn = changeTurn();
            document.querySelector(".gameinfo").innerHTML = "Turn for " + turn;
            document.querySelector("h1").innerHTML = "Gova.com";
            checkWin();
        }
    })
}

document.getElementById("reset").addEventListener('click', () => {
    location.reload();
})