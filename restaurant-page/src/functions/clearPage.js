export default function ClearPage() {
    const content = document.getElementById("content");

    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
}