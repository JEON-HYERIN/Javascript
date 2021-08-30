// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log('yes');
}

const printNo = function () {
  console.log('no');
}

randomQuiz('love you',printYes,printNo); //yes
randomQuiz('wrong',printYes,printNo); //no


function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'divide':
      return a / b;
      break;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      console.log('해당없음');
  }
};

console.log(calculate('add',2,10));
console.log(calculate('subtract',2,2));
console.log(calculate('divide',2,2));
console.log(calculate('multiply',2,2));
console.log(calculate('remainder',2,2));
console.log(calculate('oops',2,2));
// const add = function () {
//   console.log(a + b);
// }
