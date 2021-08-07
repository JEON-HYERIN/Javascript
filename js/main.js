// 속성과 메소드를 통틀어서 멤버(Member)라고도 부름

// const hyerin = {
//   // firstName, lastName : 속성
//   firstName: 'hyerin',
//   lastName: 'jeon',
//   // getFullName : 메소드
//   // 속성에 함수데이터가 할당되어있으면 메소드라고 부름
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
    //  = return `${hyerin.firstName} ${hyern.lastName}`
    // this: this가 소속되어져있는 함수가 실행되는 객체데이터를 지칭
    // 변수이름이 바뀔수 있음을 염두해두어야 하기에 객체의 이름을 직접적으로 명시하는것 보다는
    // this를 이용하여 객체데이터를 지칭

// console.log(hyerin.getFullName())


// const amy = {
//   firstName: 'amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())


function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// getFullName은 로직이 똑같기 때문에 통일화해서 메모리를 좀 더 효율적으로 관리
// user라는 함수에 숨어져있는 prototype 속성부분에 getFullName을 할당해서
// 이부분의 함수는 메모리에 한번만 만들어서 참조하는 방식으로 사용됨






// this라는 것은 생성자함수를 통해서 그것이 할당 되어져있는 앞에 있는 객체 부분에
// 그 내용을 지칭 
// new라는 키워드를 통해 user라는 생성자 함수 실행
// 생성자함수 : 무언가를생성한다는의미, 하나의 객체데이터를 생성

const hyerin = new User('hyerin', 'jeon')
// this = hyerin
const amy = new User('amy', 'clarke')
// this = amy
const neo = new User('neo', 'smith')
// this = neo

console.log(hyerin.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
// 특정 기호만 가지고 데이터를 만들어 내는것을 리터럴방식이라고함
// "A" 따옴표라는 기호를 통해서 문자데이터를 만들어내는 리터럴방식
//  중괄호 이용 객체데이터 대괄호 이용 배열데이터

// new라는 키워드를 통해 생성자함수로 실행한 결과를 반환해서 할당된 변수를 생성자함수의 인스턴스라고 부름
// const hyerin, amy, neo = 인스턴스
const a = [1, 2, 3]
console.log(a.includes(2))
// console.log(a)



// new라는 키워드로 함수를 생성하는 생성자함수와 일반함수를 구분하기 위해 암묵적으로 파스칼케이스로 작성함