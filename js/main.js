// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7

function double() {
  console.log(a * 2)
};
double();

// 1번
(function () {
  console.log(a * 2)
})();

// 2번 - 권장
(function () {
  console.log(a * 2)
}());