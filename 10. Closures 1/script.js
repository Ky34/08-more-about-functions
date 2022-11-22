'use strict';

/*// Замыкания (Closures)

// Замыкания создаются автоматически в определенных ситуациях
const safeBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// Замыкания позволяют функциям помнить все переменные, которые были созданы в месте появления (создания) функции. Функция всегда имеет доступ к Контексту Выполнения, в котором она была создана. Замыкания имеют приоретет над scope chain

const booker = safeBooking(); // функция booker замкнута в контексте выполнения родительского scope

booker();
booker();
booker();

console.dir(booker); // coosole.dir() можно исполльзовать чтобы увидеть замыкание для функции booker

*/

// Example 1

// let f1;

// const f2 = function () {
//   const x = 11;
//   f1 = function () {  // когда мы внутри функции присваиваем какой-то переменной функцию создается замыкание
//     console.log(x ** 2);
//   };
// };

// const f3 = function () {
//   const y = 12;
//   f1 = function () {
//     console.log(y ** 2);
//   };
// };

// f2();
// f1(); // после запуска функции f2 функция f1 имеет доступ к контексту выполнения функции f2
// console.dir(f1); // тут имеем доступ к scope f2
// f3();
// f1(); // после вызова функции f3, функции f1 получает доступ к контексту выполнения функции f3
// console.dir(f1); // тут имеем доступ к scope f3

//Example 2

const boardPassengers = function (passengerNumeber, secondsBeforeBoarding) {
  const passengersInGroup = passengerNumeber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumeber} passengers are now boarding`);
    console.log(`Each group contains ${passengersInGroup} passengers`);
  }, secondsBeforeBoarding * 1000);

  console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
};

// const passengersInGroup = 1500;
boardPassengers(150, 5);
