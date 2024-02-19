const myLibrary = [];

const openDialog = document.getElementById("openDialog");
const dialog = document.getElementById("main");

const addButton = document.querySelector(".add");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const dateInput = document.getElementById("date");
const error = document.getElementById("error");

const inputs = [titleInput, authorInput, dateInput];

titleInput.placeholder = "Harry Pota";
authorInput.placeholder = "JK Labajo";

class Book {
    constructor(title, author, date) {
        this.title = title;
        this.author = author;
        this.date = date;
    }
}

function reset() {
    titleInput.value = authorInput.value = dateInput.value = "";
}

function display(newBook) {
    let mainDiv = document.querySelector(".books");
    let container = document.createElement("div");
    let bookStub = document.createElement("div");
    let newTitle = document.createElement("h1");
    let newAuthor = document.createElement("h3");
    let newDate = document.createElement("h5");
    let deleteButton = document.createElement("button");
    container.classList = "bookContainer";
    bookStub.classList = "bookStub";

    mainDiv.appendChild(container);
    container.appendChild(bookStub);
    container.appendChild(newTitle);
    container.appendChild(newAuthor);
    container.appendChild(newDate);
    container.appendChild(deleteButton);

    newTitle.innerHTML = newBook.title;
    newAuthor.innerHTML = newBook.author;
    newDate.innerHTML = newBook.date;
    deleteButton.innerHTML = "Remove!";

    //reset();

    newBook.index = myLibrary.length - 1;

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(newBook.index, 1);
        mainDiv.removeChild(container);
        myLibrary.forEach((book) => {
            if(book.index > newBook.index) book.index--;
        })
    });
}

function addBookToLibrary() {
    if(titleInput.value === "" || authorInput.value === "" || dateInput.value === "") {
        error.innerHTML = "Warning: Lacking input."
        return;
    }
    dialog.close();
    error.innerHTML = "";
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

openDialog.addEventListener("click", () => {
    dialog.showModal();
})