// 함수 복습

// function sum(x ,y) {
//   return x + y
//    함수 내부에서 return 키워드 사용시 return 키워드 뒤에있는 어떠한 내용이 함수 밖으로
//    반환된다는 것을 의미하며 또한, 추가적으로 
//    return 키워드가 사용된 그 부분에서 함수가 종료된다는 것을 의미
//   따라서 그 이하 내용들은 실행되지 않음
// }

// const a = sum(1, 3)
// const b = sum(4, 12)
// console.log(a)
// console.log(b)
// console.log(a + b)


function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}
//  함수 안에서는 매개변수를 지정하지 않아도 arguments라는 특정 객체 사용 가능
//  arguments라는 객체는 함수안에서 언제든지 사용가능
//  함수 실행할때 인수로 넣은 값이 배열형태로 들어가짐
// 하지만 직관적이지 않으므로 되도록 사용하지 않기를 권장

console.log(sum(7, 3))