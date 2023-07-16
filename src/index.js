import _ from 'lodash';
import './style.css';
import navItem from './navClass';
import displayNavItems from './displayNavItems';
import menu from './Images_icons/Icons/menuIcon.svg';

const navigationBar = document.querySelector('#navigationBar');

const menuIconFont = document.createElement('span');
menuIconFont.innerText = 'menu';
menuIconFont.classList.add('icoMoonFont');
navigationBar.appendChild(menuIconFont);

let navBarContent = {
  title0: new navItem('title0', 'item0', 'item1', 'item2', 'item3'),
  title1: new navItem('title1', 'item0', 'item1', 'item2', 'item3'),
  title2: new navItem('title2', 'item0', 'item1', 'item2', 'item3'),
  title3: new navItem('title3', 'item0', 'item1', 'item2', 'item3'),
};

displayNavItems(navBarContent);

// const menuIcon = new Image();
// menuIcon.src = menu;
// menuIcon.classList.add('menuIcon');
// navigationBar.appendChild(menuIcon);

document.addEventListener('click', (e) => {
  console.log(e.target);
});
