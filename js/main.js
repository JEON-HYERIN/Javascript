// 콜백(Callbak)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)


// function timeout(cb) {
//   setTimeout(() => {
//     console.log('hello!')
//     cb();
//   }, 3000);
// };

// timeout(() => {
//   console.log('Done!');
// });
function timeout(cb) {
  setTimeout(function () { {
    console.log('hello!')
    cb();
  }, 3000);
}
};

timeout(() => {
  console.log('Done!');
});


// function timeout(cb) {
//   setTimeout(function() {
//     console.log('hello');
//     cb();
//   }, 3000);
// };

// timeout(function() {
//   console.log(Done!);
// });