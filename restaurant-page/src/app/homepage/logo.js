import LogoImage from "../../assets/images/file.png";

export default function Logo() {
    const img = document.createElement("img");
    // img.src = "../src/assets/images/logo.webp";
    img.src = {LogoImage};
    img.className = "logo";
    return img;
}