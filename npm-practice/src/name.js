import sayName from "./index.js";

const win = document.querySelector("body");

function element(name) {
    const el = document.createElement("h1");
    el.textContent = sayName(name);
    return el;
}

win.appendChild(element("ZEUS"));