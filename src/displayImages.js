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

export default function displayImages(images) {
  for (const image of images) {
    const imageLineItem = document.createElement('li');
    imageLineItem.appendChild(image);
    carouselTrack.appendChild(imageLineItem);
  }
}

displayImages(carouselImages);
