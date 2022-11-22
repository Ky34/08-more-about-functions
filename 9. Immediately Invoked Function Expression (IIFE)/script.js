'use strict';

// IIFE (функции экспрешн вызываемые немедленно)

const runOneTime = function () {
  console.log('You will never see this function call again');
};
// runOneTime();

// вся функция помещается в скобки и ставятся скобки в конце
(function () {
  console.log('You will never see this function call again');
  const x = 1; // все данные которые находятся во внутреннем scope функции они приванты, это называется инкапсуляция, переменная х инкапсулированна в scopе этой функции
  var z = 3;
})(); // IIFE патерн использовался для создания приватного scope для функций, объявляемых ключевым словом var

// В СОВРЕМЕННОМ JS ПАТЕРН IIFE ИСПОЛЬЗУЕТСЯ ДЛЯ СОЗДАНИЯ ФУНКЦИЙ, КОТОРЫЕ НУЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО 1 РАЗ

(() => console.log('You will never see this ARROW function call again'))();

{
  // const x = 1;
  var y = 2;
}

console.log(z);
