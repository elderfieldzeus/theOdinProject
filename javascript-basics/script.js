console.log(23 + 97);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

const MAX = 57;
let actual = MAX - 13, percentage = actual / MAX;
console.log(percentage);
console.log(actual / 0);

const meow = document.getElementById("Meow");

let sum = 1;

const addOne = (num) => {
    return () => {
        num += 1;
        console.log(num);
    }
}

meow.addEventListener("click", addOne(sum)); // (must return function)

let i = 1, j = 2, k = 3;

const add7 = (num) => {
    return num + 7;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const capitalize = (string) => {
    string[0] = string[0].toUpperCase();
    return string;
}

const lastLetter = (string) => {
    //let last = string.slice(-1);
    let last = string.substr(-1, 1);
    return last;
}


//ADDING ELEMENTS TO THE DOM
console.log(add7(i));
console.log(multiply(j, k));
console.log(capitalize("hakdog"));
console.log(lastLetter("meow"));
const container = document.querySelector('body');
const red = document.createElement('p');
const blue = document.createElement('h3');
const black = document.createElement('div');
const head1= document.createElement('h1');
const par = document.createElement('p');

blue.style.cssText = ['color: blue;'];
red.style['color'] = 'red'; 
black.style.cssText = ['border: 2px solid black;'];
black.style['background-color'] = 'pink';

blue.textContent = "I'm a blue h3!";
red.textContent = "Hey I'm red!";
head1.textContent = "I'm in a div";
par.textContent = "ME TOO!";

container.appendChild(red);
container.appendChild(blue);
container.appendChild(black);
black.appendChild(par);
black.insertBefore(head1, par);

//Adding event listener

const buttons = document.querySelectorAll('#Meow');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.style.backgroundColor == 'pink')
            event.target.style.cssText = ['background-color: none;'];
        else 
        event.target.style.cssText = ['background-color: pink;'];
    })
});