const myLibrary = [
  {
    title: "title",
    author: "author",
    pages: 69,
    read: false
  }
];
const openBtn = document.getElementById('openBtn');
const dialog = document.getElementById('dialog');
const closeBtn = document.getElementById('closeBtn')

//show dialog via button
openBtn.addEventListener('click', () => {
  dialog.showModal();
})

closeBtn.addEventListener('click', () => {
  dialog.close();
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