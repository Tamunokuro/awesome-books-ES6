// Remove Button
const removeBook = (btnAddress, bookArray, btnIndex, parentDiv) => {
  btnAddress.addEventListener('click', () => {
    bookArray.splice(btnIndex, 1);
    localStorage.setItem('book', JSON.stringify(bookArray));
    parentDiv.remove();
    window.location.reload();
  });
};

export default removeBook;