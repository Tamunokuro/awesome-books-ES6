const bookNav = document.getElementById('booklist');

export default function booklist() {
  bookNav.addEventListener('click', () => {
    document.getElementById('book-list').style.display = 'block';
    document.getElementById('add-book').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
  });
}
