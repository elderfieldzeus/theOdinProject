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

console.log(add7(i));
console.log(multiply(j, k));
console.log(capitalize("hakdog"));
console.log(lastLetter("meow"));