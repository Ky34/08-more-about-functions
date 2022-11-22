'use strict';

// Функции возвращающие функции

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}!`);
  };
};

greet('Hey')('Lilu'); // передаем параметр в функцию greet и во вторых скобках параметр в ту функцию, которую возвращает эта функция

// в виде стрелочной функции
const greetArr = greetingText => name =>
  console.log(`${greetingText} ${name}!`);

const hi = greet('Hi');
hi('Jack');
hi('Diana');
hi('Mick');
greet('Hey')('Lilu');
greetArr('Hello')('Alex');

// const checkText = function (text, func) {
//   const l = text.length;
//   const a = text.split('a').length
//   func(l, a)
// };

// checkText('hello', (l,a) => console.log({l, a}))
