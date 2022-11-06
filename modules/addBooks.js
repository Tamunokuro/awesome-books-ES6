import removeBook from './removeBook.js';

const bookContainer = document.getElementById('book-store');

// Adding Books
const addBook = () => {
  const bookData = JSON.parse(localStorage.getItem('book'));
  bookData.forEach((item, index) => {
    const bookDiv = document.createElement('div');
    const bookItem = document.createElement('p');
    const removeButton = document.createElement('button');
    bookItem.appendChild(document.createTextNode(`${item.title} by ${item.author}`));
    removeButton.setAttribute('class', 'remove');
    bookItem.setAttribute('class', 'book');
    bookDiv.setAttribute('class', 'book-card');
    removeButton.appendChild(document.createTextNode('Remove'));
    // Remove Button Logic
    removeBook(removeButton, bookData, index, bookDiv);
    bookDiv.append(bookItem, removeButton);
    bookContainer.appendChild(bookDiv);
  });
};

export default addBook;