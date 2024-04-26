export default class Logo {
    //link is relative to dist
    link = `../src/assets/images/logo.webp`; 

    toImage = () => {
        const img = document.createElement("img");
        img.src = this.link;
        img.className = "logo";
        return img;
    }
}