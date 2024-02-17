const myLibrary = [];

const addButton = document.querySelector(".add");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const dateInput = document.getElementById("date");

const inputs = [titleInput, authorInput, dateInput];

titleInput.placeholder = "Harry Pota";
authorInput.placeholder = "JK Labajo";
dateInput.placeholder = "September 11, 2001";

function Book(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
}

function reset() {
    titleInput.value = authorInput.value = dateInput.value = "";
}

function display(newBook) {
    let mainDiv = document.querySelector(".books");
    let container = document.createElement("div");
    let newTitle = document.createElement("h1");
    let newAuthor = document.createElement("h3");
    let newDate = document.createElement("h5");
    container.classList = "bookContainer";

    mainDiv.appendChild(container);
    container.appendChild(newTitle);
    container.appendChild(newAuthor);
    container.appendChild(newDate);

    newTitle.innerHTML = newBook.title;
    newAuthor.innerHTML = newBook.author;
    newDate.innerHTML = newBook.date;

    reset();
}

function addBookToLibrary() {
    if(titleInput.value === "" || authorInput.value === "" || dateInput.value === "") {
        alert("LACKING INPUT");
        return;
    }

    let newBook = new Book(titleInput.value, authorInput.value, dateInput.value);
    myLibrary.push(newBook);
    display(newBook);
}

addButton.addEventListener("click", () => addBookToLibrary());
inputs.forEach((input) => {
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            addBookToLibrary();
        }
    }); 
});