// const myHeading = document.getElementById('myHeading');
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red';
});

/*
document.getElementByClassName();
*/

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
