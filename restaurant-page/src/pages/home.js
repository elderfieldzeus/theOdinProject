import Company from "../app/homepage/company_name.js";
import Description from "../app/homepage/description.js";
import Logo from "../app/homepage/logo.js";

export default function Home() {
    const main = document.getElementById("content");

    main.appendChild(Company());
    main.appendChild(Logo());
    main.appendChild(Description());
}

