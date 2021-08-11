// prototype 속성이 붙어있지 않는 메소드 : 정적(static)메소드
// {}.assign() 중괄호를 사용하는 객체 리터럴부분에 메소드를 직접적으로 사용불가


// Object.assign()
// 1번째 인수로 들어가져있는 타켓이라는 객체에 2번째에 인수로 들어가는 객체 병합해서 병합된 타겟의 객체를 반환
// 객체데이터에서 속성의 이름은 고유해야됨

const userAge = {
  // Key: value
  name: 'hyerin',
  age: 85
}

const userEmail = {
  name: 'hyerin',
  email: 'abcde123@gmail.com'
}

// userEmail.assign, userAge.assign 직접적으로 사용불가
// assign메소드는 Object라는 자바스크립트 전역객체부분의 prototype으로 만들어진 메소드가 아님
// = 정적메소드: Object라는 자바스크립트 전역객체에 직접적으로 사용
// target부분에 source부분의 속성들을 복사해서 집어넣음
// const target = Object.assign(userAge, userEmail) //첫번째인수userAge:대상객체, 두번째인수userEmail:출처객체
// console.log(target) //{name: "hyerin", age: 85, email: "abcde123@gmail.com"}
// console.log(userAge) //{name: "hyerin", age: 85, email: "abcde123@gmail.com"}
// console.log(target === userAge) //true
// target과 userAge는 같은 데이터, 출처객체source에서 대상객체target으로 속성의 값을 복사해서 집어넣는데 그 객체가 반환됨


// 생긴게 똑같다고 일치연산자로 같다고 나온게 아님
// 두개의 객체는 생긴것은 똑같지만 서로 다른 객체임
// 하나의 객체데이터는 특정한 메모리주소에 값이 들어가져있음
// a와 b 변수는 서로 다른 메모리주소를 바라보고있으므로 같지않음
// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b) //false

원본데이터는 손상하지 않고 그것의 속성들을 합쳐놓은 새로운 객체데이터를 만들어서
반환시켜 사용가능
userAge, userEmail을 합쳐 새로운 객체데이터 만드는방법
const target = Object.assign({}, userAge, userEmail) //userAge, userEmail:출처객체
console.log(target) //{name: "hyerin", age: 85, email: "abcde123@gmail.com"}
console.log(userAge) //{name: "hyerin", age: 85}
console.log(target === userAge) //false


userAge원본데이터를 손상하지 않고 그것을 새로운 객체데이터로 속성을 옮겨서 하나의 복사본을 만듦
내용은 같지만 userAge 바라보고있는 메모리주소가 따로 있고 그것이 복사돼서 새로운 메모리주소로 할당되었으므로 서로 다름
const target = Object.assign({}, userAge) 
console.log(target) //{name: "hyerin", age: 85}
console.log(userAge) //{name: "hyerin", age: 85}
console.log(target === userAge) //false


//Object.keys()
// Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
// name,age,email이라는 key가 Object.keys의 정적메소드를 통해 그 key들만 추출되어 새로운 배열데이터로 만들어짐
// 속성이름만 추출해서 새로운 배열로 만들어주는 개념
// const user = {
//   // Key: value
//   name: 'hyerin',
//   age: 85,
//   email: 'abcde123@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys) //(3) ["name", "age", "email"]

// 객체데이터에서 사용할 수 있는 인덱싱방법
// 인덱싱: 객체데이터뒤쪽에 대괄호를열고닫아 객체데이터가 가지고있는 속성이름명시(번호x)
// user부분의 email property 값을 내놔라
// console.log(user['email']) //abcde123@gmail.com
// console.log(user.email) //abcde123@gmail.com

// user라는 객체에서 name부분의 속성값을 가져옴
// map메소드 콜백에서반환된 특정한데이터를 차곡차곡 배열로만들어서 반환
// user라는 부분의 key부분의 값들을 추출해서 배열로 만들어 반환
// const values = keys.map(key => user[key])
console.log(values) //(3) ["hyerin", 85, "abcde123@gmail.com"]