import _ from 'lodash';
import './style.css';
import navItem from './navClass';
import displayNavItems from './displayNavItems';
import './displayImages';

//nav content

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

//carousel

const carouselTrack = document.querySelector('.carousel__track');
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right');
const dotsNav = document.querySelector('.carousel__nav');

const slides = document.querySelectorAll('[data-slideIndicator]');

const moveToSlide = (track, currentSlide, targetSlide) => {
  carouselTrack.style.transform =
    'translateX( -' + targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
};

const updateDots = (currentIndicator, targetDot) => {
  currentIndicator.classList.remove('currentSlide');
  targetDot.classList.add('currentSlide');
};

const hideShowArrows = (slides, leftButton, rightButton, targetIndex) => {
  if (targetIndex == 0) {
    leftButton.classList.add('isHidden');
    rightButton.classList.remove('isHidden');
  } else if (targetIndex == slides.length - 1) {
    leftButton.classList.remove('isHidden');
    rightButton.classList.add('isHidden');
  } else {
    leftButton.classList.remove('isHidden');
    rightButton.classList.remove('isHidden');
  }
};

leftButton.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.currentSlide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentIndicator = dotsNav.querySelector('.currentSlide');
  const prevDot = currentIndicator.previousElementSibling;
  const prevIndex = prevSlide.dataset.slideindicator;

  moveToSlide(carouselTrack, currentSlide, prevSlide);
  updateDots(currentIndicator, prevDot);
  hideShowArrows(slides, leftButton, rightButton, prevIndex);
});

rightButton.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentIndicator = dotsNav.querySelector('.currentSlide');
  const nextDot = currentIndicator.nextElementSibling;
  const nextIndex = nextSlide.dataset.slideindicator;

  moveToSlide(carouselTrack, currentSlide, nextSlide);
  updateDots(currentIndicator, nextDot);
  hideShowArrows(slides, leftButton, rightButton, nextIndex);
});

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = carouselTrack.querySelector('.currentSlide');
  const currentIndicator = dotsNav.querySelector('.currentSlide');
  const targetIndex = targetDot.dataset.indicator;
  const targetSlide = slides[targetIndex];

  moveToSlide(carouselTrack, currentSlide, targetSlide);
  updateDots(currentIndicator, targetDot);
  hideShowArrows(slides, leftButton, rightButton, targetIndex);
});
