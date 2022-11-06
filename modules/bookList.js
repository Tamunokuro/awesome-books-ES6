const bookNav = document.getElementById('booklist');

const booklist = () => {
  bookNav.addEventListener('click', () => {
    document.getElementById('book-list').style.display = 'block';
    document.getElementById('add-book').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('footer').style.position = '';
  });
};

export default booklist;
