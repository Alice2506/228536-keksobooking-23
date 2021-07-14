import {getRandomArbitrary} from './utils.js';
import {getRandomNumber} from './utils.js';

// Создание массива
const accomodationType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];

const author = {
  avatar: 'img/avatars/user' + 0 + getRandomNumber(1, 10) + '.png',
};

const locationn = {
  lat: getRandomArbitrary(35.65000, 35.70000, 5),
  lng: getRandomArbitrary(139.70000, 139.80000, 5),
};

const offer = {
  title: 'Отличное предложение!',
  address: locationn.lat + ', ' + locationn.lng,
  price: getRandomNumber(0, 1000000),
  type: accomodationType[getRandomNumber(0, accomodationType.length - 1)],
  rooms: getRandomNumber(1, 100),
  guests: getRandomNumber(1, 100),
  checkin: 'до ' + checkinTime[getRandomNumber(0, checkinTime.length - 1)],
  checkout: 'после ' + checkinTime[getRandomNumber(0, checkinTime.length - 1)],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  description: 'Уютное жилье для комфортного пребывания',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};