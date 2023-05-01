const navList = document.querySelector('.nav-list');
const navAdd = document.querySelector('.nav-add');
const navContact = document.querySelector('.nav-contact');
const listSection = document.querySelector('.list');
const addANewSection = document.querySelector('.add-a-new-book');
const contactSection = document.querySelector('.contact');

navList.addEventListener('click', () => {
  listSection.classList.remove('hide');
  addANewSection.classList.add('hide');
  contactSection.classList.add('hide');
});

navAdd.addEventListener('click', () => {
  listSection.classList.add('hide');
  addANewSection.classList.remove('hide');
  contactSection.classList.add('hide');
});

navContact.addEventListener('click', () => {
  listSection.classList.add('hide');
  addANewSection.classList.add('hide');
  contactSection.classList.remove('hide');
});

export default function setupNavigation() {
}