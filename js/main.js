// ES6 Classes

// const hyerin = {
//   name: 'hyerin',
//   normal: function () {
//     console.log(this.name)
//   }
// }
const hyerin = {
  name: 'hyerin',
  normal() {
    console.log(this.name)
  }
}

hyerin.normal() //hyerin
// hyerin.arrow() //undefined


// 객체 데이터 내부에서 일반함수 사용시 : function 생략 가능
// normal: function () {} = normal() {} 
// 이름뒤에 소괄호와 함께 중괄호가 열리고닫히면 function 키워드를 사용하는 일반함수로 만들어진 개념과동일

// 생성자 함수
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }






// 자바스크립트에서 지원하는 클래스라는 키워드를 통해서 새로운 문법으로 작성


class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const jeonhyerin = new User('hyerin', 'jeon')
const amy = new User('amy', 'clarke')
const neo = new User('neo', 'smith')


console.log(jeonhyerin)
console.log(amy.getFullName())
console.log(neo.getFullName())