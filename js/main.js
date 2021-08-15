
얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// const user = {
//   name: 'hyerin',
//   age: 95,
//   emails: ['abcde@gmail.com']
// }
// const copyUser = user
// console.log(copyUser === user) //true


// user라는 변수와 copyUser변수가 바라보고 있는 메모리주소가 같기 때문에 한쪽에서 수정을해도 다른쪽에도 영향을받음
// copyUser를 수정해도 user부분의 값도 변경될 것임
// 의도하지않았는데 이러한 현상이 발생한다면 의도치않게 엉뚱한 부분이 수정될 수 있음
// user.age = 22
// console.log('user', user) //user {name: "hyerin", age: 22, emails: Array(1)}
// console.log('copyUser',copyUser) //copyUser {name: "hyerin", age: 22, emails: Array(1)}

// console.log('-----')
// console.log('-----')

// ***얕은복사***

// const user = {
//   name: 'hyerin',
//   age: 95,
//   emails: ['abcde@gmail.com']
// }

// 첫번째 인수:대상객체, 두번째 인수:출처객체 대상객체에 출처객체가 가지고있는 여러가지 속성들을 담아서 그것을 실행해서 반환
// 새로운 객체데이터가 새로운 메모리주소에 할당됨
// const copyUser = Object.assign({}, user)
// console.log(copyUser === user) //false
// //false: user가 가지고있는 속성과 값들을 복사해서 집어넣었기 때문에 겉표면의 객체데이터는 1번메모리주소, 2번메모리주소로 다름

// // age부분은 22로갱신, user부분을 수정한것이 copyUser에는 영향을 미치지않음
// user.age = 22
// console.log('user', user) //user {name: "hyerin", age: 22, emails: Array(1)}
// console.log('copyUser',copyUser) //copyUser {name: "hyerin", age: 95, emails: Array(1)}



// 다른방법)전개연산자를 통해서 복사하는방법
// 하나의 빈객체데이터 내부에 user라는 객체데이터가 가지고있는 속성과 값들을 전개해서 집어넣게됨
// const copyUser = {...user}
// console.log(copyUser === user) //false
// // 새로운메모리주소로할당됐기에 false

// user.age = 22
// console.log('user', user) //user {name: "hyerin", age: 22, emails: Array(1)}
// console.log('copyUser',copyUser) //copyUser {name: "hyerin", age: 95, emails: Array(1)}


// ***깊은복사***
// const user = {
//   name: 'hyerin',
//   age: 95,
//   emails: ['abcde@gmail.com']
// }

// const copyUser = {...user}
// console.log(copyUser === user) //false


// user.age = 22
// console.log('user', user) //{name: "hyerin", age: 22, emails: Array(1)}

// console.log('copyUser',copyUser) //{name: "hyerin", age: 95, emails: Array(1)}



// 배열데이터의 가장 뒷부분에 새로운 아이템으로 push부분의 인수를 집어넣음
// emails는 배열데이터 즉,참조형데이터 우리가 복사처리한것은 user라는 객체데이터, 결국 user안에 들어있는 새로운 참조형데이터인 emails라는 배열데이터는 따로 복사된것이아닌 같은메모리주소를 공유중이므로 일치연산자 true
// age부분의 숫자는 다르긴하지만 참조형데이터인 emails의 배열은 같은 메모리주소를 공유하는상태
// user.emails.push('xyz@naver.com')
// console.log(user.emails === copyUser.emails) //true
// console.log('user', user) //{name: "hyerin", age: 22, emails: Array(2)}
// //emails: (2) ["abcde@gmail.com", "xyz@naver.com"]
// console.log('copyUser',copyUser) //{name: "hyerin", age: 95, emails: Array(2)}
// // emails: (2) ["abcde@gmail.com", "xyz@naver.com"]

// const user = {
//   name: 'hyerin',
//   age: 95,
//   emails: ['abcde@gmail.com']
// }

깊은복사, clone:복제 deep:깊은 깊은복제를만들어서 이메소드에서 반환이되면 copyUser로 받아서활용
참조형데이터 내부에 또다른 참조형데이터가 있다면 얕은복사보다는 깊은복사를 통해서 복사하는 것이 안전
lodash라는 패키지의 도움을받아 cloneDeep이라는 메소드사용
const copyUser = _.cloneDeep(user)
console.log(copyUser === user) //false

user.age = 22
console.log('user', user) //{name: "hyerin", age: 22, emails: Array(1)}

console.log('copyUser',copyUser) //{name: "hyerin", age: 95, emails: Array(1)}
user.emails.push('xyz@naver.com')
console.log(user.emails === copyUser.emails) //false
console.log('user', user) //{name: "hyerin", age: 22, emails: Array(2)}
// emails: (2) ["abcde@gmail.com", "xyz@naver.com"]
console.log('copyUser',copyUser) //{name: "hyerin", age: 95, emails: Array(1)}






객체데이터, 배열데이터 같은 참조형 데이터를 복사할 때, 얕은복사로도 충분히 문제없이 복사가 된다고 판단한다면 Object.assign이나 전개연산자를 통해 해당하는 참조형데이터를 복사

재귀:하나의 데이터안에서 어떠한내용이 계속 반복적으로 실행 즉,반복실행
반복실행하면서 모든 값들을 복제하므로 깊은복사가 가능
그내부에서 지속적으로 반복처리를함

objects의 배열데이터라는 껍데기만 복사하는것이 아니라 그 내부에 들어있는 새로운 참조형데이터인 객체데이터까지 꼼꼼하게 복사해서 새로운 메모리로 할당했기에 그 내부에 있는값을 비교해도 일치연산자에서 false값이 나옴


정리
대표적인 참조형데이터: 객체, 배열데이터 복사할 때에는 그 내부에 또다른 참조형 데이터가 없다는 전제하에서는 손쉽게 얕은복사사용
특정참조데이터 내부에 또다른 참조데이터가있다면 깊은복사를 고려해야함
깊은복사 lodash의 cloneDeep기능의 도움을 받아개발추천