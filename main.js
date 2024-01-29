let myLibrary = [];

const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("newBookForm");
const newBookBtn = document.getElementById("newBookBtn");

newBookBtn.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

document.getElementById("newBookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
  dialog.close();
});

dialog.addEventListener('click', e => {
  if(e.target.id == 'dialogCloseBtn'){
    dialog.close();
  }
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  console.log("toggleRead");
  myLibrary[index].toggleRead();
  renderLibrary();
}

function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  renderLibrary();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

function renderLibrary() {
  let bookshelf = document.getElementById("bookshelf");
  bookshelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "bookCard");
    bookElement.innerHTML = `
      <div class="cardHeader">
        <h3 class="title">${book.title}</h3>
        <h5 class="auther">${book.author}</h5>
      </div>
      <div class="cardBody">
        <p>${book.pages}</p>
        <p class="readStatus">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
        <button class="toggleReadBtn" onclick="toggleRead(${i})">Read?</button>
      </div>
      `;
    bookshelf.appendChild(bookElement);
  }
}
