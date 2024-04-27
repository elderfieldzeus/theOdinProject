import Home from "./pages/home.js";
import ClearPage from "./functions/clearPage.js";
import "./styles/main.css";

//default
Home();

const home_button = document.getElementById("home_button");
const about_button = document.getElementById("about_button");
const menu_button = document.getElementById("menu_button");

home_button.addEventListener("click", () => {
    ClearPage();
    Home();
});

about_button.addEventListener("click", () => {
    ClearPage();
    //code here
})

menu_button.addEventListener("click", () => {
    ClearPage();
    //code here
})