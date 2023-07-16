import _ from 'lodash';
import './style.css';
import navItem from './navClass';
import displayNavItems from './displayNavItems';

const menuToggle = document.createElement('span');
menuToggle.innerText = 'menu';
menuToggle.classList.add('linearIconsFont', 'navToggle');
document.body.appendChild(menuToggle);

const navigationBar = document.querySelector('#navigationBar');

let navBarContent = {
  title0: new navItem('title0', 'item0', 'item1', 'item2', 'item3'),
  title1: new navItem('title1', 'item0', 'item1', 'item2', 'item3'),
  title2: new navItem('title2', 'item0', 'item1', 'item2', 'item3'),
  title3: new navItem('title3', 'item0', 'item1', 'item2', 'item3'),
};

displayNavItems(navBarContent);

document.addEventListener('click', (e) => {
  console.log(e.target);
});

menuToggle.addEventListener('click', (e) => {
  if (menuToggle.innerText === 'menu') {
    menuToggle.innerText = 'cross';
    menuToggle.classList.add('navToggleOut');
    navigationBar.setAttribute('data-visible', true);
  } else if (menuToggle.innerText === 'cross') {
    menuToggle.innerText = 'menu';
    menuToggle.classList.remove('navToggleOut');
    navigationBar.setAttribute('data-visible', false);
  }
});
