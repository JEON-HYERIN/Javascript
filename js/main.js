// 자바스크립트에서 localStorage에 데이터를 저장하는 방법

const user = {
  name: 'hyerin',
  age: 95,
  emails: [
    'abcd@gmail.com',
    'xyz@naver.com'
  ]
}

localStorage.setItem('user', user)
// localStroage에 데이터를 저장할 때는 그냥 우리가 평소에 사용하는 일반적인 객체라던가 배열을 사용하면안되고 문자데이터로 변환해서 저장해야함



// user라는 객체데이터를 문자데이터화해서 localStorage에 user라는 이름으로 저장
localStorage.setItem('user', JSON.stringify(user))
console.log(localStorage.getItem('user')) //{"name":"hyerin","age":95,"emails":["abcd@gmail.com","xyz@naver.com"]}

// 문자데이터형태로출력됨 



// 객체데이터로 변환
console.log(JSON.parse(localStorage.getItem('user'))) //{name: "hyerin", age: 95, emails: Array(2)}





// // 저정한데이터 수정
const str = localStorage.getItem('user')
const obj = JSON.parse(str) 
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj)) //{"name":"hyerin","age":22,"emails":["abcd@gmail.com","xyz@naver.com"]}


localStorage.removeItem('user')








// localstorage: 데이터를 반영구적으로 사용 가능 / sessionStorage: 페이지를 닫을 때 데이터가 사라짐, 일반적인 상황에서는 localStrage 활용성이 높음

// 예제
// localStorage.setItem('문자데이터 key', '문자데이터 value')
// 저장하는 데이터를 문자데이터로 저장하는 것을 권장, 일부 문자데이터가 아닌 경우에는 저장이 안될 수 있음
// 객체, 배열데이터는 JSON.stringify를 이용해 문자데이터화 시켜서 데이터 저장하고 저장된 문자데이터를 가지고와서 parse라는 메소드를 통해 분석해서 자바스크립트 파일내부에서 하나의데이터로 활용
// 특정한데이터를 읽어오는용도 -> getItem('key') 해당하는 데이터의 속성값만 key값만 알면되기때문에 인수를 하나만 적으면됨
// 데이터를 제거하고싶다면 removeItem 메소드실행해서 해당하는 데이터 key값을 적어줌