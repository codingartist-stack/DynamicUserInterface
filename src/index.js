import _ from 'lodash';
import './style.css';
import navItem from './navClass';
import displayNavItems from './displayNavItems';

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
  //   const isDropDownButton = e.target.matches('.dropdownButton');
  //   if (!isDropDownButton && e.target.closest('.dropDown') != null) return;

  //   let currentDropDown;

  //   if (isDropDownButton) {
  //     currentDropDown = e.target.closest('.dropDown');
  //     currentDropDown.classList.toggle('.active');
  //   }

  //   document.querySelectorAll('dropDown.active').forEach((dropDown) => {
  //     if (dropDown === currentDropDown) return;
  //     dropDown.classList.remove('.active');
  //   });
});
