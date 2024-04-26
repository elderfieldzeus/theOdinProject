import Logo from "../app/homepage/logo.js";
import Company from "../app/homepage/company_name.js";
import getDescription from "../app/homepage/description.js";

export default class Home {
    logo = new Logo();
    company = new Company();

    main = document.getElementById("content");

    render() {
        //add to DOM
        this.main.appendChild(this.company.toH1());
        this.main.appendChild(getDescription());
    } 
}

