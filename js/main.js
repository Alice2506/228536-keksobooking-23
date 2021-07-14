// Вспомогательные функции

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = function(min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    console.log('Диапазон отрицательный');
    return null;
  }
};


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomArbitrary = function(min, max, afterPointMarks) {
  if (min >= 0 && min < max) {
    let randomArbitrary = (Math.random() * (max - min)) + min;
    return randomArbitrary.toFixed(afterPointMarks);
  } else {
    console.log('Диапазон отрицательный');
    return null;
  }
};
