const body = document.querySelector("body")
const getBox = [...document.querySelectorAll(".box")];
const playGround = new Array;
let k = 0;
for(let i = 0; i < 3; i++) {
    playGround.push([]);
    for(let j = 0; j < 3; j++) {
        playGround[i].push(getBox[k++]);
    }
}

getBox.forEach((box) => {
    box.addEventListener("click", () => {
        if(body.className == "white") {
            checkBox(box, "white");
        }
        else {
            checkBox(box, "black");
        }
    })
})

function checkBox(box, checkClass) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(box == playGround[i][j] && playGround[i][j].innerHTML.length == 0) {
                playGround[i][j].innerHTML = (checkClass === "white") ? "O" : "X";
                playGround[i][j].style["color"] = checkClass;
                body.classList = (checkClass === "white") ? "black" : "white";
            }
        }
    }
}

function startGame() {
    body.className = "white";
}

startGame();