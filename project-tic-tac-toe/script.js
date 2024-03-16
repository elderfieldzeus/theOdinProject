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
});

class Player {
    constructor() {
        this.horizontal = [0, 0, 0]; //
        this.vertical = [0, 0, 0];
        this.diagonal = [0, 0];
    }
}

function checkBox(box, checkClass) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(box == playGround[i][j] && playGround[i][j].innerHTML.length == 0) {
                const element = document.createElement("span");
                element.className = (checkClass == "white") ? "circle" : "cross";
                playGround[i][j].appendChild(element);
                body.classList = (checkClass === "white") ? "black" : "white";
            }
        }
    }
}

function startGame() {
    body.className = "white";
    const white = new Player();
    const black = new Player();
    let turns = 0;
    
}

startGame();