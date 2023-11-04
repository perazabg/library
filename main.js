const myLibrary = [];

// book constructor 
function book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function  addBook(){
  // need to get book info first 
  const newBook = new book()
  myLibrary.push(newBook);
}

function getBookInfo(){
  
}