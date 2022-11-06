const addBookNav = document.getElementById('addbook');

const addBook = () => {
  addBookNav.addEventListener('click', () => {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('add-book').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('footer').style.position = 'absolute';
  });
};

export default addBook;
