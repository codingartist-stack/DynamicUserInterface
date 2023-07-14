const navigationBar = document.querySelector('#navigationBar');

export default function displayNavItems(content) {
  for (const item of Object.values(content)) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('dropDown');

    const title = document.createElement('button');
    title.classList.add('dropdownButton');
    title.textContent = `${item.dropdownTitle}`;

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdownMenu');

    const item0 = document.createElement('a');
    item0.textContent = `${item.dropdownItem0}`;
    item0.href = `${item.dropdownItem0}`;

    const item1 = document.createElement('a');
    item1.textContent = `${item.dropdownItem1}`;
    item1.href = `${item.dropdownItem1}`;

    const item2 = document.createElement('a');
    item2.textContent = `${item.dropdownItem2}`;
    item2.href = `${item.dropdownItem2}`;

    const item3 = document.createElement('a');
    item3.textContent = `${item.dropdownItem3}`;
    item3.href = `${item.dropdownItem3}`;

    itemContainer.appendChild(title);
    itemContainer.appendChild(dropdownMenu);
    dropdownMenu.appendChild(item0);
    dropdownMenu.appendChild(item1);
    dropdownMenu.appendChild(item2);
    dropdownMenu.appendChild(item3);

    navigationBar.appendChild(itemContainer);
  }
}
