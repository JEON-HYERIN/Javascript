// 전개 연산자(Spread)
// 마침표 3개(...)를 사용하는 것이 전개하는 연산자
// 전개연산자: 하나의 배열데이터를 쉼표로 구분하는 각각의 아이템으로 전개해서 출력해줌
// 전개연산자를 사용하면 쉼표로 구분된 각각의 아이템으로 배열데이터가 전개돼서 만들어짐
// 전개연산자를 사용하면 하나의 배열데이터를 쉼표로 구분된 각각의 아이템으로 전개해서 출력
// const fruits = ['Apple', 'Banana', 'Cherry']
// console.log(fruits) //(3) ["Apple", "Banana", "Cherry"]
// console.log(...fruits) //Apple Banana Cherry
// //  console.log('Apple', 'Banana', 'Cherry')

// // 객체데이터로 변환해주는 함수
// function toObject(a, b, c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }
// console.log(toObject(...fruits)) //{a: "Apple", b: "Banana", c: "Cherry"}
// // 전개연산자를 사용하지않고 동일하게 출력하는방법
// console.log(toObject(fruits[0], fruits[1], fruits[2])) //{a: "Apple", b: "Banana", c: "Cherry"}


// 전개연산자 사용시 가능한것들 - 매개변수부분에도 전개연산자 사용가능
// 나머지 아이템들은 c로 들어가는 개념, 매개변수가 나머지의 모든 인수를 받아내는 역할(나머지 매개변수라는 이름의 rest parameter라고 부름)
// 개수에 상관없이 순서대로 받아보고 순서가 명확하지 않을 때 나머지를 전부 받는 용도로 매개변수 앞에 전개연산자를 사용하여 그것을 배열의 형태로 순서대로 받아서 내부에서 사용

// orange는 받아줄 매개변수가 없는 상황
// 나머지 아이템들은 c로 들어가는 개념으로 매개변수에 전개연산자 사용
// const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']

// function toObject(a, b, ...c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }
// console.log(toObject(...fruits))
// // {a: "Apple", b: "Banana", c: Array(2)}
// // a: "Apple"
// // b: "Banana"
// // c: (2) ["Cherry", "Orange"]


// 매개변수라는 것도 결국 하나의 변수, 결국 객체데이터를 다룰 때 속성의 이름과 변수의이름 즉,데이터의 이름이 같으면 축약형으로 만들 수 있음
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']

// 함수부분 자바스크립트 문법에 맞게 축약형으로 작성
// function toObject(a, b, ...c) {
//   return {
//     a,
//     b,
//     c
//   }
// }

function toObject(a, b, ...c) {
  return {a, b, c}
}

// const toObject = (a, b, ...c) => ({ a, b, c })

console.log(toObject(...fruits)) //{a: "Apple", b: "Banana", c: Array(2)}
/* {a: "Apple", b: "Banana", c: Array(2)}
a: "Apple"
b: "Banana"
c: (2) ["Cherry", "Orange"] */