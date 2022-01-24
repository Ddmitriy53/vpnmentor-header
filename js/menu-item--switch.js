const switchElem = document.querySelector('.menu-item--switch-js');

function switchToggle() {
  if (switchElem.classList.contains('menu-item--switch--active')) switchElem.classList.remove('menu-item--switch--active');
  else switchElem.classList.add('menu-item--switch--active');
}

switchElem.addEventListener("click", switchToggle);
