'use strict';

const body = document.querySelector('body');

(function () {
  const h2 = document.querySelector('h2');
  h2.style.color = 'orange';
  body.addEventListener('click', function () {
    h2.style.color = 'green';
  });
})();
