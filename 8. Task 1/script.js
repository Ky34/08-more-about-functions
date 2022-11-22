'use strict';

// const survey = {
//   question: 'What programming language would you like to learn?',
//   options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
//   answers: new Array(5).fill(0),
//   logNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     if (typeof answer === 'number' && answer >= 0 && answer <= 4) {
//       this.answers[answer]++;
//     }
//     this.printResults();
//     this.printResults('string');
//   },
//   printResults: function (type = 'array') {
//     if (type === 'string') {
//       console.log(`Survey results: ${this.answers.join(',')}`);
//     } else if (type === 'array') {
//       console.log(this.answers);
//     }
//   },
// };

// document
//   .querySelector('#survey')
//   .addEventListener('click', survey.logNewAnswer.bind(survey));

// printResults.call(survey, 'string');
// printResults.bind(null, [3, 6, 9, 2, 5, 4, 4]);

// Test Data:
//     1. [7, 1, 4]
//     2. [3, 6, 9, 2, 5, 4, 4]

/////////////////////////////////////////////////////////////////////////////////
// РЕШЕНИЕ

const survey = {
  question: 'What programming language would you like to learn?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    // Display prompt
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    // console.log(answer);

    // Update answer
    if (
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    }
    // console.log(this.answers);
    this.printResults();
    this.printResults('string');
  },
  printResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Survey results: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('#survey')
  .addEventListener('click', survey.logNewAnswer.bind(survey));

survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string'); // чтобы использовать функцию содаем обьект
