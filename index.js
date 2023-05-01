import Book from './modules/book.js';
import setupNavigation from './modules/nav.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addedBooks = document.querySelector('.added-books');

window.addEventListener('load', () => {
  if (localStorage.getItem('added-books')) {
    Book.render(addedBooks);
  }
});

const alertMessage = document.querySelector('.alert-message');
const addButton = document.querySelector('.add-button');
const newTitle = document.querySelector('.add-title');
const newAuthor = document.querySelector('.add-author');

addButton.addEventListener('click', () => {
  let theBookAlreadyExists = false;
  const booksArray = JSON.parse(localStorage.getItem('added-books')) || [];
  for (let i = 0; i < booksArray.length; i += 1) {
    if (booksArray[i].title === newTitle.value && booksArray[i].author === newAuthor.value) {
      theBookAlreadyExists = true;
      alertMessage.innerHTML = 'That book already exists, please add another title or author';
      newTitle.addEventListener('click', () => {
        newTitle.value = '';
      });
      newAuthor.addEventListener('click', () => {
        newAuthor.value = '';
      });
    }
  }
  if (!theBookAlreadyExists) {
    Book.addBook(newTitle, newAuthor);
    alertMessage.innerHTML = '';
  }
  Book.render(addedBooks);
});

setupNavigation();

const currentDateElement = document.querySelector('#current-date');
const currentDate = DateTime.local().toLocaleString(DateTime.DATE_FULL);
currentDateElement.innerHTML = currentDate;