const myLibrary = [];
const bookForm = document.querySelector(".book-form");
const submit = document.querySelector("#add-book");
const cardContainer = document.querySelector(".card-container");

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
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h2");
        const bookAuthor = document.createElement("h3");
        const bookCardText = document.createElement("div");
        const emoji = document.createElement("div");
        const textDiv = document.createElement("div");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");
        const buttons = document.createElement("div");
        const deleteButton = document.createElement("button");
        const readStatus = document.createElement("button");
        cardContainer.appendChild(bookCard);
        bookCard.setAttribute("class", "book-card");
        bookCard.appendChild(bookTitle);
        bookTitle.setAttribute("class", "book-title");
        bookCard.appendChild(bookAuthor);
        bookAuthor.setAttribute("class", "book-author");
        bookCard.appendChild(bookCardText);
        bookCardText.setAttribute("class", "book-card-text");
        bookCardText.appendChild(emoji);
        emoji.setAttribute("class", "book-emoji");
        emoji.textContent = "📖";
        bookCardText.appendChild(textDiv);
        textDiv.setAttribute("class", "text");
        textDiv.appendChild(bookPages);
        bookPages.setAttribute("class", "book-pages");
        textDiv.appendChild(bookRead);
        bookRead.setAttribute("class", "book-status");
        bookCard.appendChild(buttons);
        buttons.setAttribute("class", "buttons");
        buttons.appendChild(deleteButton);
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "✖";
        buttons.appendChild(readStatus);
        readStatus.setAttribute("id", "read-status");
        readStatus.textContent = "Change status";
        bookTitle.textContent = `"${myLibrary[i].title}"`;
        bookAuthor.textContent = `by ${myLibrary[i].author}`;
        bookPages.textContent = `${myLibrary[i].pages} pages`;
        bookRead.textContent = myLibrary[i].read;
        deleteButton.setAttribute("class", `${[i]}`);
        readStatus.setAttribute("class", `${[i]}`);
    }
}

function addBookToLibrary() {
    const title = document.querySelector("input[name=title]").value;
    const author = document.querySelector("input[name=author]").value;
    const pages = document.querySelector("input[name=pages]").value;
    const read = document.querySelector("input[name=read]").checked;
    let bookStatus;
    if (read == true) {
        bookStatus = "Read"
    } else {bookStatus = "Unread"}
    let newBook = new Book(title, author, pages, bookStatus);
    myLibrary.push(newBook);
    showBook();
    bookForm.reset();
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
})

cardContainer.addEventListener("click", e => {
    if (e.target.id == "delete") {
        myLibrary.splice(e.target.className, 1);
        showBook();
    } else {return};
})

cardContainer.addEventListener("click", e => {
    if (e.target.id == "read-status") {
        myLibrary[e.target.className].changeStatus();
        showBook();
    } else {return};
})