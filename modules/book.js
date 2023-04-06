const booksArray = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(newTitle, newAuthor) {
    if (newTitle.value !== '' && newAuthor.value !== '') {
      const book = new Book(newTitle.value, newAuthor.value);
      booksArray.push(book);
      localStorage.setItem('added-books', JSON.stringify(booksArray));
      newTitle.value = '';
      newAuthor.value = '';
    }
  }

  static removeBook(index) {
    booksArray.splice(index, 1);
    localStorage.setItem('added-books', JSON.stringify(booksArray));
  }

  static render(addedBooks) {
    addedBooks.innerHTML = '';
    for (let i = 0; i < booksArray.length; i += 1) {
      const html = `
        <div class="book">
          <div class="book-details">
            <div class="title">"${booksArray[i].title}" by&nbsp;</div>
            <div class="author"> ${booksArray[i].author}</div>
          </div>
          <div class="remove-container">
            <button class="remove-book">Remove</button>
          </div>
        </div>
      `;
      addedBooks.innerHTML += html;
    }

    const removeButtonArray = document.querySelectorAll('.remove-book');
    for (let i = 0; i < removeButtonArray.length; i += 1) {
      removeButtonArray[i].addEventListener('click', () => {
        Book.removeBook(i);
        Book.render(addedBooks);
      });
    }
  }
}

export default Book;