import Company from "../components/homepage/company_name.js";
import HomeDescription from "../components/homepage/description.js";
import Logo from "../components/homepage/logo.js";

export default function Home() {
    const main = document.getElementById("content");
    main.className = "home";

    main.appendChild(Company());
    main.appendChild(HomeDescription());
}

