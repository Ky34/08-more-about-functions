'use strict';

// Методы call() и apply()

const book = function (flightNumber, passengerName) {
  console.log(
    `${passengerName} has booked ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNumber}` });
};

const airline1 = {
  airlineName: 'SkyUp',
  iataCode: 'SU',
  bookings: [],
  // book(flightNumber, passengerName) {
  //   console.log(
  //     `${passengerName} has booked ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  //   );
  //   this.bookings.push({ flight: `${this.iataCode}${flightNumber}` });
  // },
};

// airline1.book(346, 'Jim Green');
// airline1.book(635, 'Michael Jordan');
// console.log(airline1);

const airline2 = {
  airlineName: 'EuroFlights',
  iataCode: 'EF',
  bookings: [],
};

// const book = airline1.book; // копируем метод из первой компании и помещаем в переменную

// This doesn't work
// book(345, 'Linda Wilams');

//call()
book.call(airline2, 345, 'Linda Wilams'); // вызываем метод call() который вызывает функцию book() с ключевым словом this указывающим на объект, который передается в качестве первого параментра (airline2)
console.log(airline2);

book.call(airline1, 111, 'Bob Smith');
console.log(airline1);

// apply() - old approach
const flightData = [111, 'Nuck Wong'];
book.apply(airline2, flightData); // работает аналогично методу call но в качестве 2-го параметра нужно указать массив с данными

book.call(airline2, ...flightData); // сработает аналогично методу apply() распаковываем массив в качестве аргументов
console.log(airline2);
