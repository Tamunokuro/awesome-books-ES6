const contactNav = document.getElementById('contact');

const contact = () => {
  contactNav.addEventListener('click', () => {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('add-book').style.display = 'none';
    document.getElementById('contact-section').style.display = 'block';
  });
}

export default contact;
