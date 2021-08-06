// 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN(Not a Number, 숫자데이터임)
// NaN = 1 + undefined 더해진값이 숫자로 판단할 수 없는 특정 값일 경우
// 숫자데이터이긴한데 숫자가아니다 라는 뜻으로 NaN 이 있음

if ('false') {
  console.log(123)
}

// const a = 1
// const b = '1'

// console.log(a === b)
// // 일치연산자


// console.log(a == b)
// 동등연산자
// 동등연산자 사용시 형변환이 일어남
// 자바스크립트에서는 동등연산자 되도록 사용하지 말것
// 의도하지 않은 결과가 나올 수 있음
// 따라서 === 일치연산자 사용 권장