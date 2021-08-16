// _.uniq : 배열데이터 안에 들어있는 중복되는 값들을 고유하게 바꿔줌
//  _.uniq메소드 사용시 손쉽게 중복되는 내용들을 제거해서 새로운 배열을 만들어 낼 수 있음


// const usersA = [ 
//   {userId: '1', name: 'hyerin'},
//   {userId: '2', name: 'Neo'}
// ]

// const usersB = [ 
//   {userId: '1', name: 'hyerin'},
//   {userId: '3', name: 'Amy'}
// ]

// concat메소드: 2개의 배열데이터를 병합해서 새로운 배열데이터를 반환
// 단순하게 합쳐버리는 concat메소드를 사용하면 중복되는 데이터 발생
// const usersC = usersA.concat(usersB)

// console.log('concat', usersC) //concat (4) [{…}, {…}, {…}, {…}]
// 0: {userId: "1", name: "hyerin"}
// 1: {userId: "2", name: "Neo"}
// 2: {userId: "1", name: "hyerin"}
// 3: {userId: "3", name: "Amy"}


// 배열데이터 안에 들어있는 여러개의 객체 데이터들은 기본적인 구조가 같고 유값을 의미하는 id 값들이 들어있음 (고유값이 들어있음)

// 고유값 : userId
// _.uniqBy: 첫번째인수 - 중복된 데이터가 들어있는 그 배열데이터, 두번째인수 - 중복을 구분할 고유한 속성의 이름
// _.uniqBy메소드가 해당하는 배열의이름에서 해당하는 속성의 이름으로 고유한 값만 정리해서 반환해줌
// 이미 중복이 발생한 그배열데이터에서 중복을 제거할때는 _.uniqBy사용
// 하나의 배열데이터에서 어떤 특정한 속성의 이름으로 고유화를 시켜주는 메소드이고 사용하는 인수는 배열데이터 1개
// console.log('uniqBy',_.uniqBy(usersC, 'userId')) //uniqBy (3) [{…}, {…}, {…}]
// 0: {userId: "1", name: "hyerin"}
// 1: {userId: "2", name: "Neo"}
// 2: {userId: "3", name: "Amy"}

// _.unionBy
// 중복이 발생할 수 있는 배열데이터가 2개이고 합치기 전이라면 _.unionBy를 통해서 고유하게 합칠 수 있음
// 첫번째인수, 두번째인수에 배열데이터이름적고 합칠 때 고유값으로 사용할 속성의이름을 세번째인수에 명시 세번째 인수에 해당하는 값을 고유하게 판단해서 두개의배열을 합쳐줌
// 합치기 전, 여러개의 배열데이터를 적어주고 맨마지막에 배열데이터를 합칠때 고유화 작업을 시킬 속성의 이름을 명시해주면 고유화가 된 새로운 배열을 반환
// const usersD = _.unionBy(usersA, usersB, 'userId') 
// console.log('unionBy', usersD) //unionBy (3) [{…}, {…}, {…}]
// 0: {userId: "1", name: "hyerin"}
// 1: {userId: "2", name: "Neo"}
// 2: {userId: "3", name: "Amy"}

// 차이점: uniqBy는 배열데이터가 1개일 때 사용, unionBy는 배열데이터가 여러개 일 때 사용하는 개념

const users = [
  { userId: '1', name: 'hyerin' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser) //{userId: "3", name: "Amy"}
console.log(foundUserIndex) //2

_.remove(users, { name: 'hyerin' })
console.log(users) //(4) [{…}, {…}, {…}, {…}]
// 0: {userId: "2", name: "Neo"}
// 1: {userId: "3", name: "Amy"}
// 2: {userId: "4", name: "Evan"}
// 3: {userId: "5", name: "Lewis"}