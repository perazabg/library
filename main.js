const myLibrary = [
  {
    title: "",
    author: "",
    pages: 69,
    read: false
  }
];
const btn = document.getElementById('btn');
const dialog = document.getElementById('dialog');

//show dialog via button
btn.addEventListener('click', () => {
  dialog.showModal();
})
// book constructor 
function book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function  addBook(){
  // need to get book info first 
  let title = $titleInput.value;
  let author = $authorInput.value;
  let pages = $pagesInput.value;
  let read = getReadValue();
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function getBookInfo(){
  
}