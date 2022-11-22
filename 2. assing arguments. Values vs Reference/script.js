'use strict';

const flightNumber = 'BV328';
const passenger1145 = {
  firstName: 'Jack',
  lastName: 'Brown',
  passport: 128490,
};

const checkIn = function (flight, passenger) {
  flight = 'bv328'; // Значение передаваемой переменной flightNumber не изменяется, т.к. flight - новая переменная
  passenger.firstName = passenger.firstName.toLowerCase(); // значения в изначальном объекте изменяются, так как объект - ссылочный тип данных, функция примемает ссылку на начальный объект
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 128490) {
    alert('Welcome to the board!');
  } else {
    alert('Incorrect passport!');
  }
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger1145;

// Манипуляция одним и тем же объектом в разных функциях меняет значения в объекте
const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);
