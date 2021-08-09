// this
// 일반(Normal) 함수 내부에서는 "호출 위치"에 따라서 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 "함수 범위"에서 this 정의

const hyerin = {
  name: 'hyerin',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
hyerin.normal()
// 점 표기법을 이용해 hyerin 내부의 normal 메소드 실행
// 호출위치: 호출위치에서 메소드가 딸려있는 앞의 객체데이터 hyerin가 곧 this
// hyerin.arrow()
// 화살표 함수에서의 this는 호출위치와 전혀 상관없이 이것이 선언될 때 this가 무엇인지 충분히 알 수 있음

const amy = {
  name: 'amy',
  normal: hyerin.normal,
  // 호출하는 개념이 아님 , normal 부분에 있는 데이터(function () { console.log(this.name)})
  // 함수자체가 amy의 normal에 할당되는 구조
  arrow: hyerin.arrow
  // hyerin의 데이터부분 자체가 amy의 arrow에 할당되는 구조
}

amy.normal()
// 호출위치에서 정의, 호출이 될 때 연결되어져 있는 객체는 amy 이기 때문에 amy가 곧 this
// this부분의 name이 출력됨
// amy.arrow()

// 생성자함수
// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }

// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const jeonhyerin = new User('jeonhyerin')
// // new라는 키워드로 생성자 함수 실행하면 그것이 곧 객체데이터

// jeonhyerin.normal()
// jeonhyerin.arrow()

const timer = {
  name: 'hyerin!!',
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}

// 화살표함수를 감싸고있는 timeout이라는 메소드를 정의할 때 사용한 함수
// 화살표함수를 감싸고있는 추가적인 함수범위가 있기 때문에 함수범위에서 his가 정의되는 것이고
// 그 함수부분의 this는 일반함수가 정의된 timer라는 객체데이터를 가르키기 때문에 
// this = timer
// setTimeout, setInterval 타이머함수 사용시 callback으로 일반함수보다는 화살표함수 사용하는 것이 활용도가 높음
// this라는 것이 setTimeout이라는 자바스크립트에서 이미 정의되어져있는 그 함수 어딘가에서 정의되는것이아닌
// 명확하게 우리가 작성한 특정한 범위에서 this가 정의될 수 있도록 만들어 줄 수 있기 때문
timer.timeout()