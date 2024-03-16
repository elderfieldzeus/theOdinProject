//CLASSES
class Player {
    constructor(token) {
        this.token = token;
    }
}

class Scoreboard {
    constructor() {
        this.horizontal = [0,0,0]; //top, mid, bottom
        this.vertical = [0,0,0]; //left, mid, right
        this.diagonal = [0,0]; //up-down, down-up
        this.turns = 0;
        //to win, one element must be 3 or -3
    }
}

class Node {
    constructor(box, x, y) {
        this.box = box;
        this.x = x;
        this.y = y;
    }
}

class Gameboard {
    constructor(getBox) {
        this.boxes = [];
        for(let i = 0, k = 0; i < 3; i++) {
            this.boxes.push([]);
            for(let j = 0; j < 3; j++) {
                const newNode = new Node(getBox[k++], j, i);
                this.boxes[i].push(newNode);
            }
        }

        this.turns = 0;
    }
}

function Game() {
    //INITIALIZE DOCUMENT VARIABLES
    const body = document.querySelector("body");
    const getBox = [...document.querySelectorAll(".box")];
    const restart = document.getElementById("restart");
    const dialog = document.querySelector("#dialog");

    //INITIALIZE GAMEBOARD W/ DIVS
    const GameBoard = new Gameboard(getBox);
    const ScoreBoard = new Scoreboard();
    const playerOne = new Player(1);
    const playerTwo = new Player(-1);

    //ADD EVENT LISTENER TO BOXES
    GameBoard.boxes.forEach((row) => {
        row.forEach((node) => {
            node.box.addEventListener("click", () => {
                const player = (body.className == "white") ? playerOne : playerTwo;
                addSymbol(node.box, player);
                updateScoreBoard(ScoreBoard, node, player);
                const status = checkScoreBoard(ScoreBoard);
                ScoreBoard.turns++;
                if(status == 1) {
                    winnerPage(player);
                }
                else if(ScoreBoard.turns === 9) {
                    drawPage();
                }
            });
        })
    })

    //ADD RELOAD FUNCTION
    resetButton(restart);

    //add symbol when clicked
    function addSymbol(box, player) {
        if(box.innerHTML == 0) {
            const element = document.createElement("span");
            element.className = (player.token === 1) ? "circle" : "cross";
            box.appendChild(element);
            body.classList = (player.token === 1) ? "black" : "white";
        }
    }

    function updateScoreBoard(ScoreBoard, node, player) {
        ScoreBoard.horizontal[node.y] += player.token;
        ScoreBoard.vertical[node.x] += player.token;
        if(node.y == node.x) {
            ScoreBoard.diagonal[0] += player.token;
        }
        if(node.y == node.x + 2 || node.x == node.y + 2 || node.x == 1 && node.y == 1) {
            ScoreBoard.diagonal[1] += player.token;
        }
        console.log(ScoreBoard);
    }

    function checkScoreBoard(ScoreBoard) {
        //check horizontal 
        let status = 0;
        for(let i = 0; i < 3 && status === 0; i++) {
            if(Math.abs(ScoreBoard.horizontal[i]) === 3) status = 1;
        }
        for(let i = 0; i < 3 && status === 0; i++) {
            if(Math.abs(ScoreBoard.vertical[i]) === 3) status = 1;
        }
        for(let i = 0; i < 2 && status === 0; i++) {
            if(Math.abs(ScoreBoard.diagonal[i]) === 3) status = 1;
        }
        return status;
    }

    function winnerPage(player) {
        const div = document.createElement("div");
        const winner = document.createElement("h1");
        const exit = createExitButton();
        exit.innerHTML = "Play Again!";
        winner.innerHTML = `${player.token === 1 ? "WHITE" : "BLACK"} is our winner!!!`;
        div.appendChild(winner);
        div.appendChild(exit);
        dialog.appendChild(div);
        dialog.open = true;
        dialog.className = "win";
    }

    function drawPage() {
        const div = document.createElement("div");
        const draw = document.createElement("h1");
        const exit = createExitButton();
        exit.innerHTML = "Play Again!";
        draw.innerHTML = `It is a DRAW!!!`;
        div.appendChild(draw);
        div.appendChild(exit);
        dialog.appendChild(div);
        dialog.open = true;
        dialog.className = "draw";
    }

    function createExitButton() {
        const exitButton = document.createElement("button");
        resetButton(exitButton);
        return exitButton;
    }

    function resetButton(button) {
        button.addEventListener("click", () => {
            window.location.reload();
        });
    }

    function startGame() {
        body.className = "white";
    }

    return {startGame};
}

const game = new Game();
game.startGame();