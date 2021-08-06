//화살표 함수
// () => {} vs function () {}
// 일반함수와 화살표함수의 차이점: 화살표함수는 기본적인 로직을 축약형으로 줄여나갈 수 있음
// 즉, 화살표 함수는 일부내용을 생략해서 축약형으로 함수를 최소화 할 수 있음
const double = function(x) {
  return x * 2
}

console.log('double: ',double(7))


// 화살표함수 로직으로 return 키워드 위쪽에 어떤 특정코드가 들어있으면 
// 축약형으로 만들 수 없음

// const doubleArrow = (x) => {
//   return x * 2
// }


// 실행문 부분을 제외하고 중괄호와 return 키워드 생략 가능
// const doubleArrow = (x) => x * 2

// 매개변수가 2개이상이 아닌 하나만 있을경우 소괄호도 생략 가능
// const doubleArrow = x => x * 2

// 실행문 부분을 중괄호{} 로 감싸게 되면 실행문 부분이 반환될 수 없음
// 따라서 중괄호 사이에서 특정 내용을 함수 밖으로 반환하려면 return 키워드 사용해야 함 
// const doubleArrow = (x) => {
//   return x * 2
// }

// 반환할 수 있는 데이터 문자,숫자,불린,null,undefined,배열데이터
// const doubleArrow = x => '123'
// const doubleArrow = x => 123
// const doubleArrow = x => true
// const doubleArrow = x => null
// const doubleArrow = x => undefined
// const doubleArrow = x => [1, 2, 3]

// 객체데이터를 만들 때는 중괄호 사용
// 중괄호는 화살표함수의 로직이 작성되는 중간블럭을 만들때 사용하기 때문에 기호가 중복됨
// 따라서 객체데이터가 아닌 화살표 함수의 블럭으로 해석이 됨
// 중괄호부분을 소괄호로 한번 감싸서 만들어야 축약형으로 객체데이터 반환 가능
const doubleArrow = x => ({
  name: 'hyerin'
})

console.log('doubleArrow: ', doubleArrow(7))