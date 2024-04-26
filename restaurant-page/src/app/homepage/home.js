import Logo from "./logo.js";
import Company from "./company_name.js";
import getDescription from "./description.js";

export default class Home {
    logo = new Logo();
    company = new Company();

    main = document.getElementById("content");

    render() {
        //add logo
        this.main.appendChild(this.logo.toImage());
        
        //create new div
        const div = document.createElement("div");
        div.classList.add("right");

        //add to DOM
        div.appendChild(this.company.toH1());
        div.appendChild(getDescription());
        this.main.appendChild(div);
    } 
}

