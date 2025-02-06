const myLibrary = [];
const bookForm = document.querySelector(".book-form");
const submit = document.querySelector("#add-book");
const cardContainer = document.querySelector(".card-container")

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.changeStatus = function () {
    if (this.read == "Read") {
        this.read = "Unread";
    } else {this.read = "Read"};
}

const exampleBook = new Book ("Emma", "Jane Austen", 474, "Unread");
const exampleBook1 = new Book ("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, "Read");
const exampleBook2 = new Book("Behave: The Biology of Humans at Our Best and Worst", "Robert Sapolsky", 800, "Read")
myLibrary.push(exampleBook, exampleBook1, exampleBook2);
showBook();

function showBook() {
    cardContainer.innerHTML = "";
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++) {
        let cardCode = 
        `<div class="book-card">
            <h2 class="book-title">"${myLibrary[i].title}"</h2>
            <h3 class="book-author">by ${myLibrary[i].author}</h3>
                <div class="book-card-text">
                    <div class="book-emoji">📖</div>
                    <div class="text">
                        <p class="book-pages">${myLibrary[i].pages} pages</p>
                        <p class="book-status">${myLibrary[i].read}</p>
                    </div>
                </div>
            <div class="buttons">
                <button id="delete" class="${[i]}">✖</button>
                <button id="read-status" class="read-status-${[i]}">Change status</button>
            </div>
        </div>`;
        cardContainer.innerHTML += cardCode;
    }
}

function addBookToLibrary() {
    const title = document.querySelector("input[name=title]").value;
    const author = document.querySelector("input[name=author]").value;
    const pages = document.querySelector("input[name=pages]").value;
    const read = document.querySelector("input[name=read]").checked;
    console.log(read);
    let bookStatus;
    if (read == true) {
        bookStatus = "Read"
    } else {bookStatus = "Unread"}
    let newBook = new Book(title, author, pages, bookStatus);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(bookStatus);
    showBook();
    bookForm.reset();
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
})

cardContainer.addEventListener("click", e => {
    console.log(e);
    console.log(e.target.id)
    if (e.target.id == "delete") {
        console.log(e.target.className);
        myLibrary.splice(e.target.className, 1);
        console.log(myLibrary);
        showBook();
    } else {return};
})