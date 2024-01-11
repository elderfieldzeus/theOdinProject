const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const indigo = document.querySelector('#indigo');
const violet = document.querySelector('#violet');
const black = document.querySelector('#black');
const white = document.querySelector('#white');
const clear = document.querySelector('#clear');

const colors = [red, orange, yellow, green, blue, indigo, violet, black, white];
const canva = document.querySelector('.canva');
const lengthOfCanva = 400;

let color = "white";
let graphContainer = [];
let graphBox = [];

//initialize
firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'graphBox');
firstDiv.style.cssText = [`height: 400px; width: 400px;`];
firstDiv.addEventListener("mouseover", (e) => addColor(e));
canva.appendChild(firstDiv);


//FUNCTIONS

const sliderChange = (val) => {
    document.querySelector('#slider').innerHTML = `${val} x ${val}`;
    addDivs(val);
}

const changeColor = (newColor) => {
    color = newColor;
}

const addColor = (e) => {
    e.target.style['background-color'] = color;
}

const deleteAll = (toBeRemoved) => {
    toBeRemoved.forEach((removal) => {
        removal.parentNode.removeChild(removal);
    })
}

const addDivs = (val) => {
    const removeContainer = document.querySelectorAll('.graphContainer');
    const removeBoxes = document.querySelectorAll('.graphBox');

    deleteAll(removeContainer);
    deleteAll(removeBoxes);

    for(let i = 0; i < val; i++){
        graphContainer[i] = document.createElement('div');
        graphContainer[i].setAttribute('class', 'graphContainer');
        canva.appendChild(graphContainer[i]);
        graphBox[i] = [];
        for(let j = 0; j < val; j++){
            graphBox[i][j] = document.createElement('div');
            graphBox[i][j].setAttribute('class', 'graphBox');
            graphBox[i][j].style.cssText = [`height: ${lengthOfCanva / val}px; width: ${lengthOfCanva / val}px;`];
            graphBox[i][j].addEventListener("mouseover", (e) => addColor(e));
            graphContainer[i].appendChild(graphBox[i][j]);
        }
    }
}

const clearScreen = () => {
    const clearVar = document.querySelectorAll('.graphBox');
    clearVar.forEach((variable) => {
        variable.style['background-color'] = "white";
    })
}

colors.forEach((specificColor, index) => {
    const choices = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "white"];
    specificColor.addEventListener("click", () => changeColor(choices[index]));
});

clear.addEventListener("click", () => clearScreen());

