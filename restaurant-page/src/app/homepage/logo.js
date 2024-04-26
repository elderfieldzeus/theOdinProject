export default class Logo {
    //link is relative to dist
    toImage = () => {
        const img = document.createElement("img");
        img.src = "../src/assets/images/logo.webp";
        //img.src = logoImage;
        img.className = "logo";
        return img;
    }
}