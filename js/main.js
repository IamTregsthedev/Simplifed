const nameDisplay = document.getElementById('name');
let name = localStorage.getItem('prain.newTab.name') || 'user';
nameDisplay.textContent = name;
nameDisplay.addEventListener('click', e => {
  name = prompt('What\'s your name?', name) || name;
  nameDisplay.textContent = name;
  localStorage.setItem('prain.newTab.name', name);
});
