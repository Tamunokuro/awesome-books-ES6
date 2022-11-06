import addBook from './addBooks.js';

const bookContainer = document.getElementById('book-store');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('adding-book-form');
let bookList = [];

export default class AwesomeBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Displaying Books
  displayBooks() {
    const book = {
      title: this.title.value,
      author: this.author.value,
    };
    bookList.push(book);
    localStorage.setItem('book', JSON.stringify(bookList));
    bookContainer.innerHTML = '';
    addBook();
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}

const bookObj = new AwesomeBook(bookTitle, bookAuthor);

if (localStorage.getItem('book') !== null) {
  bookList = JSON.parse(localStorage.getItem('book'));
  addBook();
}

// Add Button and create local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookObj.displayBooks();
});