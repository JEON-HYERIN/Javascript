class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)


// extends : 확장(상속)을 의미하는 키워드
// Vehicle = 운송수단에 대한 정보를 Bicycle라는 새로운 클래스로 확장(상속)을 해서
// 기본적인 내용을 이 내부에서 사용하겠다 라는 의미
// Bicycle 클래스에서 사용가능한 추가적인 개념 : super함수 사용가능
// super : extends키워드 뒤에 붙어있는 확장된 클래스 즉 Vehicle 의미
// super가 있는 그 자리에서 Vehicle가 실행된다고 보면 됨
// super부분에 인수로 사용되는 name, wheel 매개변수는 vehicle의 constructor(name, wheel)로 들어감

// class를 사용한다는 것은 미리 만들어져 있는 어떠한 정보에 추가적으로 살을 붙어가면서 새로운 기능들을
// 확장이라는 개념으로 관리해 줄 수 있다는 의미

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

// 기존의 내용을 가지고 온 다음 추가적인 내용 일부만 작성해서 vehicle에서 car로 한단계 발전할 수 있는 개념으로
// 확장 혹은 상속이라는 개념 사용
// Vehicle라는 운송수단을 의미하는 class를 상단에서 만듦
// Car라는 클래스를 새로 만들 때 이미 만들어져 있는 vehicle라는 기능이 있으므로 그것을 가지고와서 extends라는 키워드와 함께
// 작성을 해주면 위쪽에서 정의되어져 있는 기능을 car라는 클래스 내부에서 따로 작성하지 않고도 사용 가능하고
// super라는 함수를 실행해서 super가 vehicle라는 클래스로 실행될 수 있게 vehicle라는 클래스가 요구하는 인수들을 car 라는클래스가
// 실행되는 부분에서 받아서 super함수자리에서 vehicle클래스 실행
// vehicle의 기본로직에 추가적으로 this.license 부분에 3번째 인수로 받은 license 유무를 매개변수로 받아서 사용가능하도록
// 추가적인 로직 정리

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughtersCar)