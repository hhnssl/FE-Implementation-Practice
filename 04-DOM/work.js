// const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.btn-select');
const menu = document.querySelector('.list-member');
const options = document.querySelectorAll('.list-options');
// const nextButton = document.querySelector('.next-button')

toggleButton.addEventListener('click', function () {
  toggleButton.classList.toggle('on');
});

menu.addEventListener('blur', function () {
  toggleButton.classList.remove('on'); 
});

options.forEach(function (item) {
  item.addEventListener('click', selectOption);
});

function selectOption() {
  const value = this.textContent.trim();
  // console.log(value);
  toggleButton.textContent = value;
  toggleButton.classList.remove('on'); 
}