'use strict';

const bookings = [];

const makeBooking = function (
  flightNum,
  passengersNum = 1,
  price = 99 * passengersNum // можно производить вычисления если параметр цены не передается в функцию, использовать можно те параменты, которые были определены до параметра price
) {
  // установка значений по умолчанию после ES6, значения указываются сразу в аргументах функции
  // Befor ES6
  // passengersNum = passengersNum || 1; //  устанавливаем значение по умолчанию, если passengersNum = undefined то значение будет 1
  // price = price || 99;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking('QE123');
makeBooking('QE123', 1);
makeBooking('QE123', 4);
makeBooking('QE123', undefined, 400); // если нкжно оставить промежуточный парамент по умолчанию - указываем undefined
makeBooking('TU235', 3, 390);
