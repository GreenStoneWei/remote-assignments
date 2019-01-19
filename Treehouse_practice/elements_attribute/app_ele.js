const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
// const listItems = document.getElementsByTagName('li');  **practice 1
const listUl = listDiv.querySelector('Ul');

// ** practice 1
// for (let i =0; i <= listItems.length; i += 1){
//   listItems.addEventListener('mouseover', ()=> {
//     listItems[i].textContent = listItems.textContent.toUpperCase();
//   });
//
//   listItems.addEventListener('mouseout', ()=> {
//     listItems[i].textContent = listItems.textContent.toLowerCase();
//   });
// }

//  **practice 2
// listDiv.addEventListener('mouseover', ()=> {
//   listDiv.textContent = listItems.textContent.toUpperCase();
// });
//
// listDiv.addEventListener('mouseout', ()=> {
//   listDiv.textContent = listItems.textContent.toLowerCase();
// });

// ** practice if condition and event.target.tagName; the tagName has to be 'CAPITAL' ?
// listDiv.addEventListener('mouseover', (event)=> {
//   if (event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toUpperCase();
//   }
// });
//
// listDiv.addEventListener('mouseout', (event)=> {
//   if (event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toLowerCase();
//   }
// });

listUl.addEventListener('click', (event)=> {
  if (event.target.tagName == 'BUTTON'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild('li');
  }
});

listUl.addEventListener('click', (event)=> {
  if (event.target.tagName == 'BUTTON'){
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if (nextLi){
      ul.insertBefore(nextLi, li);
    }
  }
});


toggleList.addEventListener('click', () =>{
  if (listDiv.style.display == 'none') {
  toggleList.textContent = 'Hide list';
  listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
}
);

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionP.value = '';
});

addItemButton.addEventListener('click', ()=> {
  let li = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', ()=> {
  let li = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li: last-child');
  ul.removeChild(li);
})
