document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newReadingList = document.createElement('div');
    newReadingList.classList.add('entry')
    const newReadingListItem = document.createElement('p');
    const  title = event.target.title.value;
    const  author = event.target.author.value;
    const  category = event.target.category.value;
    const readingList = document.querySelector('#reading-list');
    newReadingListItem.textContent = `${title}, ${author}, ${category}`;
    newReadingList.appendChild(newReadingListItem);
    readingList.appendChild(newReadingList);
  form.reset();
  });

  const button = document.querySelector('#button')
  button.addEventListener('click', () => {
    const readingList = document.querySelector('#reading-list');
    while (readingList.hasChildNodes()) {
     readingList.removeChild(readingList.firstChild)
    }
  });
})
