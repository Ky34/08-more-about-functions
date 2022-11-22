'use strict';

// метод bind()

// const book = function (flightNumber, passengerName) {
//   console.log(
//     `${passengerName} has booked ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNumber}` });
// };

const airline1 = {
  airlineName: 'SkyUp',
  iataCode: 'SU',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}` });
  },
};

const airline2 = {
  airlineName: 'EuroFlights',
  iataCode: 'EF',
  bookings: [],
};

const airline3 = {
  airlineName: 'USFlights',
  iataCode: 'USF',
  bookings: [],
};

const book = airline1.book;

const bookAirline2 = book.bind(airline2); // метод bind() возвращает функцию для объекта указанного в качестве аргумента, тоесть связывает функцию с объектом в скобках
bookAirline2(45, 'John Doe');
const bookAirline3 = book.bind(airline3);
console.log(airline2);

bookAirline3(11, 'Marta Jonson');
console.log(airline3);

const bookAirline3Flight21 = book.bind(airline3, 21); // так же можно предустанавливать аргументы для функции, в данном случае номер рейса будет одинаков для всех последующих вызовов функции
bookAirline3Flight21('Jack Smith'); // передаем только имя пассажира
bookAirline3Flight21('Lana Del Ray');

// bind() with event listeners
airline1.airplanes = 200;
airline1.purchaseAirplane = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

// airline1.purchaseAirplane();

document
  .querySelector('#purchase')
  .addEventListener('click', airline1.purchaseAirplane.bind(airline1)); // вызываем для функции метод bind() указывая на объект

// Partial application (частичное применение)

const getPercentage = (totalValue, value) => (value / totalValue) * 100; // сколько процентов число value занимает от числа totalValue

console.log(getPercentage(20, 23789));
const getPercentage23789 = getPercentage.bind(null, 23789); // null устанавливается если нам не нужно использовать объект
console.log(getPercentage23789(1000));
