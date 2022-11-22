'use strict';

// Функции принимающие Callback функции

const removeSpaces = function (text) {
  return text.replaceAll(' ', '').toLowerCase(); //     (/ /g, '')
};

const upperFirstWord = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const converter = function (str, func) {
  console.log(`The original text: ${str}`); // входящий текст
  console.log(`The converted text: ${func(str)}`); // делаем вызов функции, которую принимаем в качестве второго параметра и передаем в качестве параметра входящий текст, получаем преобразованный текст
  console.log(`Converted by: ${func.name}`); // метод функции .name передает название функции
};
// работает так же как функция обработчик события addEventListener()
converter('Hello to everyone!', upperFirstWord); // не указывая скобки мы передаем функцию как значение, если указывать скобки то будет вызов функции
converter('Hello to everyone!', removeSpaces); // делаем преобразование с помощью другой функции

// Callback function are very common in JS
const twice = num => console.log(num * 2);
[1, 2, 3].forEach(twice); // функция twice() передана как callback функция в цикл forEach() и запускается для каждого элемента массива
