// Вспомогательные функции

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = function(min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    console.log('Диапазон отрицательный');
    return null;
  }
}


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomArbitrary = function(min, max, afterPointMarks) {
  if (min >= 0 && min < max) {
    let randomArbitrary = (Math.random() * (max - min)) + min;
    return randomArbitrary.toFixed(afterPointMarks);
  } else {
    console.log('Диапазон отрицательный');
    return null;
  }
}

// Создание массива
let accomodationType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
let checkinTime = ['12:00', '13:00', '14:00']

let author = {
  avatar: 'img/avatars/user' + 0 + getRandomNumber(1, 10) + '.png',
}

let locationn = {
  lat: getRandomArbitrary(35.65000, 35.70000, 5),
  lng: getRandomArbitrary(139.70000, 139.80000, 5),
}

let offer = {
  title: 'Отличное предложение!',
  address: locationn.lat + ', ' + locationn.lng,
  price: getRandomNumber(0, 1000000),
  type: accomodationType[getRandomNumber(0, accomodationType.length - 1)],
  rooms: getRandomNumber(1, 100),
  guests: getRandomNumber(1, 100),
  checkin: 'до ' + checkinTime[getRandomNumber(0, checkinTime.length - 1)],
  checkout: 'после ' + checkinTime[getRandomNumber(0, checkinTime.length - 1)], //одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  description: 'Уютное жилье для комфортного пребывания',
  photos: [], //массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
}
console.log(offer)

const createCard = () => {
  return {
    title: 'Отличное предложение!',
    adress: '',
    price: 0,
    type: '',
    rooms: 0,
    guests: 0,
    checkin: '',
    checkout: '',
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Уютное жилье для комфортного пребывания',
    photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
  };
};




