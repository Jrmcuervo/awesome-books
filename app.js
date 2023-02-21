const books = JSON.parse(localStorage.getItem('books')) || [];

function addBook(title, author) {
    const book = { title, author };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
}

function removeBook(title) {
    const newBooks = books.filter(book => book.title !== title);
    localStorage.setItem('books', JSON.stringify(newBooks));
    books.length = 0;
    books.push(...newBooks);
    displayBooks();
}

function displayBooks() {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `<div>${book.title}</div> <div>${book.author}</div>`;
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(book.title);
        });
        li.appendChild(removeButton);
        booksList.appendChild(li);
        li.style.listStyleType = 'none';
        const hr = document.createElement('hr');
        booksList.appendChild(hr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks();

    const form = document.getElementById('add-book-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        addBook(title, author);
        form.reset();
    });
});