// JSON(JavaScript Object Notation)
// json : 자바스크립트의 데이터를 표현하는 하나의 포맷
// 서버와의 통신에서 데이터를 주고받는 하나의 포맷으로 사용
// json포맷에서 사용할 수 있는 자료형 - undefined 제외하고 나머지 사용
// 문자열(String): ""큰따옴표만 허용
// json문법은 속성의 이름을 따옴표로 묶어줘야함

// const user = {
//   name: 'hyerin',
//   age': 95,
//   emails': [
//     'abcd@gmail.com',
//     'xyz@naver.com'
//   ]
// }

// 자바스크립트 객체 표기법
// 자바스크립트의 객체데이터는 속성부분에 따옴표로 묶어서 작성해도 무방
// 자바스크립트파일 안에서는 따옴표를 안붙여도됨
// but, company-name 같이 속성이름에 특수기호있으면 붙여야함
// 특수기호는 객체데이터의 속성으로 해석이 안됨

// import myData from '../myData.json'
// json이라는 확장자를 가지고 있는 파일은 사실 하나의 문자데이터, json이라는 파일은 하나의 문자데이터
// console.log(myData)

const user = {
  'name': 'hyerin',
  'age': 95,
  'emails': [
    'abcd@gmail.com',
    'xyz@naver.com'
  ]
}
console.log('user', user) //user {name: "hyerin", age: 95, emails: Array(2)}

// JSON: 자바스크립트 전체의 영역에서 사용할 수 있는 하나의 전역 객체

// stringify: 자바스크립트 파일 내부에서 어떤 특정 데이터를 JSON의 형태로, 즉 JSON의 포맷으로 문자데이터화시켜주는 메소드 
// 인수부분에 객체데이터뿐만아니라 JAVASCRIPT 파일에서 사용할 수 있는 모든데이터를 stringify의 인수로 사용해서 JSON포맷으로(문자데이터로) 만들어서 활용할 수 있음
const str = JSON.stringify(user)
console.log('str', str) //str {"name":"hyerin","age":95,"emails":["abcd@gmail.com","xyz@naver.com"]}

// 속성부분이 큰따옴표로 묶여있음
// JSON이라는 포맷은 하나의 문자데이터로만 관리됨
console.log(typeof str) //string

// 그렇게 만들어진 문자데이터를 JSON이라는 전역객체에 PARSE메소드에 인수로 넣어서 분석해서 자바스크립트에서 활용할 수 있는 하나의 데이터로 재조립
// 문자데이터를 JSON.PARSE를 이용해서 다시 자바스크립트의 실제데이터로 변경
const obj = JSON.parse(str)
console.log('obj', obj) //obj {name: "hyerin", age: 95, emails: Array(2)}
// 실제객체데이터처럼출력



// 단순하게 하나의 메모리만 참조할 수 있는 문자데이터로 관리
// 우리가 쓸 수있는 형태의 실제 자바스크립트 데이터처럼 변경되려면 JSON.PARSE 사용 반대로 다시 JSON화 시키려면 stringify 문자데이터화를 시켜주는 메소드 사용