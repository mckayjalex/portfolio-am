let dropdownBtn = document.querySelector('#dropdownButton');
let dropdown = document.querySelector('#dropdown');
let list = document.querySelector('#list');
let main = document.querySelector('#main');

dropdownButton.addEventListener('click', function() {
    dropdown.classList.remove('hidden');
    dropdownBtn.classList.add('hidden')
})
list.addEventListener('click', function() {
    dropdownBtn.classList.remove('hidden')
    dropdown.classList.add('hidden');
})
main.addEventListener('click', function() {
    dropdownBtn.classList.remove('hidden')
    dropdown.classList.add('hidden');
})
