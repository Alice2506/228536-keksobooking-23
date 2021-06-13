// Вспомогательные функции

//Функция, возвращающая случайное целое число из переданного диапазона включительно
let getRandomNumber = function(min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    console.log('Диапазон отрицательный');
  }
}


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
let getRandomArbitrary = function(min, max, n) {
  let randomArbitrary;
  if (min >= 0 && min < max) {
    return randomArbitrary.toFixed(n)(Math.random() * (max - min)) + min;
  } else {
    console.log('Диапазон отрицательный');
  }
}
