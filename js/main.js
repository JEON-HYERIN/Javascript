// 구조 분해 할당(Destructuring assignment)
// 또는 비구조화 할당
// 구조 분해 할당이라는 것은 user라는 객체데이터에서 내용을 구조 분해해서 내가 원하는 속성들만 꺼내서 사용
// const나 let 키워드를 사용해서 구조분해된 내용을 변수로 만들어 활용
// 이런방식으로 객체데이터를 구조분해해서 각각의 변수로 만들어 활용 
// 이러한 방식으로 객체데이터를 const나 let 키워드를 통해 구조 분해 해서 각각의 변수로 만들어 활용 
// user.age = user['age'] 
// user라는 객체에서 구조분해를 통해 꺼내오는 방식은 user부분에 점표기법을 이용해 속성의 이름을 명시하는 것과 동일(객체데이터에서 뒤쪽에 대괄호를 적어 속성이름을 인덱싱방법으로도 꺼내서 사용)
// 필요한 것들만 꺼내서 사용할 수 도 있음
const user = {
  name: 'hyerin',
  age: 95,
  email: 'abcde@gmail.com'
}

// const {name, age, email, address} = user


// // E.g, user.address 
// // address는 user라는 객체데이터 내부에 존재하지 않으므로 undefined 값이 나옴
// // 정의되어있지 않은 속성들은 꺼내온다 한들 값이 없음

// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세입니다.`)
// console.log(`${name}의 이메일 주소는 ${email}입니다.`)
// console.log(address)

// 필요한 것들만 꺼내서 사용가능
// const {name, age} = user
// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세입니다.`)
// console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
// console.log(user.address)


// address가 undefined라면 해당 변수 부분에 기본값을 지정할 수 있음
// const {name, age, address = 'Korea'} = user
// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세입니다.`)
// console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
// console.log(address)



// 실제 user라는 객체데이터 부분에 address속성의 실제데이터가 있으면 기본값 무시됨
// 구조분해할당이라는 문법사용시 어떤 데이터가 undefined로 비어있다면 할당연산자를 통해서 기본값 지정 가능
// const user = {
//   name: 'hyerin',
//   age: 95,
//   email: 'abcde@gmail.com',
//   address: 'USA'
// }

// const {name, age, address = 'Korea'} = user
// console.log(address)



// 만약 user부분에서 name정의된 속성을 꺼내와서 사용하려고 할 때 변수를 따로만들어 다시 할당가능
// name이라는 변수이름이 마음에 안들어서 아래쪽에서 활용할때는 다른이름으로 다시 할당받아 사용가능


// const {name, age, address = 'Korea'} = user
// const hyerin = name

// console.log(`사용자의 이름은 ${hyerin}입니다.`) //사용자의 이름은 hyerin입니다.
// console.log(`${hyerin}의 나이는 ${age}세입니다.`) //hyerin의 나이는 95세입니다.
// console.log(`${hyerin}의 이메일 주소는 ${user.email}입니다.`) //hyerin의 이메일 주소는 abcde@gmail.com입니다.
// console.log(address) //Korea

// user라는 객체데이터 내부에서 어떤 속성이름으로 데이터를 꺼내올  때 속성이름이 맘에안들면 꺼내오는것은 그 속성이름으로 꺼내오지만 밑에서 변수로 활용할 때는 다른 이름으로 활용하게 콜론기호를 적어서 뒤쪽에 새로운 변수이름 명시 가능
// 구조분해할당을 통해 문법을 작성할 때 어떤 특정한 객체에서 데이터를 꺼내올 때는 그 데이터이름을 정확하게 작성하되 그 데이터이름을 그대로 변수로 활용하고 싶지 않다면 뒤쪽에 콜론기호를 적어 새로운이름 선언가능
const {name: hyerin, age, address = 'Korea'} = user

console.log(`사용자의 이름은 ${hyerin}입니다.`) //사용자의 이름은 hyerin입니다.
console.log(`${hyerin}의 나이는 ${age}세입니다.`) //hyerin의 나이는 95세입니다.
console.log(`${hyerin}의 이메일 주소는 ${user.email}입니다.`) //hyerin의 이메일 주소는 abcde@gmail.com입니다.
console.log(address)


// 배열데이터도 구조분해할당문법 사용가능
// 구조분해하는 데이터 종류에 맞게 기호 사용 []
// 배열데이터같은 경우에는 item이 순서대로 indexing되어 들어가져있으므로 구조분해에서 꺼내올 때도 단순하게 순서대로 꺼내옴
// d같은경우에는 존재하지 않는 값을 변수로 출력하려고 하다보니 undefined 값뜸
// 배열데이터는 객체데이터와 다르게 순서대로 추출해야함
const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d) //Apple Banana Cherry undefined

// banana만 추출하고 싶을때
// // 쉼표는 남겨둬야됨, 왜냐 배열부분에서의 구조분해는 순서대로 추출되기 때문에 순서를 명확하게 지키기 위해 쉼표를 꼭 적어야함
// const [, b] = fruits
// console.log(b) //Banana

// // Cherry출력하고 싶을때
const [, , b] = fruits
console.log(b) //Cherry
