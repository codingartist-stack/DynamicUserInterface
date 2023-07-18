import architecture from './images/architecture1920.jpg';
import castelSantangel from './images/castelSantangelo1920.jpg';
import fairyTale from './images/fairytale1920.jpg';
import neuschwanstein from './images/neuschwanstein1920.jpg';
import waterCastel from './images/waterCastel1280.jpg';

const carouselImages = new Array();

carouselImages[0] = new Image();
carouselImages[0].src = architecture;

carouselImages[1] = new Image();
carouselImages[1].src = castelSantangel;

carouselImages[2] = new Image();
carouselImages[2].src = fairyTale;

carouselImages[3] = new Image();
carouselImages[3].src = neuschwanstein;

carouselImages[4] = new Image();
carouselImages[4].src = waterCastel;

const carouselTrack = document.querySelector('.carousel__track');
const carouselNavIndicators = document.querySelector('.carousel__nav');

export default function displayImages(images) {
  let i = 0;

  for (const image of images) {
    const imageLineItem = document.createElement('li');
    imageLineItem.classList.add('carousel__image');
    imageLineItem.classList.add('carousel__slide');

    imageLineItem.setAttribute('data-slideIndicator', `${i}`);
    imageLineItem.appendChild(image);
    carouselTrack.appendChild(imageLineItem);

    const imageIndicator = document.createElement('button');
    imageIndicator.classList.add('icoMoonFont');
    imageIndicator.classList.add('carousel__indicator');
    imageIndicator.setAttribute('data-indicator', `${i}`);

    if (i === 0) {
      imageIndicator.classList.add('currentSlide');
      imageLineItem.classList.add('currentSlide');
    }

    carouselNavIndicators.appendChild(imageIndicator);

    //OffSet Images

    const slideWidth = carouselImages[0].getBoundingClientRect().width;

    imageLineItem.style.left = slideWidth * i + 'px';

    i++;
  }
}

displayImages(carouselImages);
