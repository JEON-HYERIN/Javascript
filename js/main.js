// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']
// 0번째, 1번째, 2번째에 해당하는 숫자를 index(인덱스)라 부름
// index: 배열데이터 내부에 들어있는 특정한 데이터의 위치를 가르키는 숫자
// indexing(인덱싱): 인덱스에 숫자를 넣어서 조회하는 것
// element(요소): 인덱싱을 통해 조회할 수 있는 배열데이터 내부에 들어있는 각각의 데이터를 의미
// element를 배열의 item이라고도 부름 
// console.log(numbers[1])
// console.log(fruits[2]) 


// Array.prototype.find()


// Array.prototype.length
// 배열데이터를 대괄호라는 기호를 이용하여 리터럴방식의 데이터부분에 뒤쪽에 length 속성 사용 [].length
// .length
// 배열의 길이가 얼마인가(배열안의 아이템의 갯수가 몇개인가)
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)

// console.log([].length) //빈 배열, 빈배열의 아이템의갯수 0


//  .concat()
// concat메소드: 2개의 배열데이터를 병합해서 새로운 배열데이터를 반환
// concat메소드 사용시 원본의 데이터는 손상되지 않음(수정되지 않음)
// 원본의 배열데이터에는 전혀 영향을 주지 않음
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.concat(fruits)) //(7) [1, 2, 3, 4, "Apple", "Banana", "Cherry"]
// console.log(numbers) //(4) [1, 2, 3, 4]
// console.log(fruits) //(3) ["Apple", "Banana", "Cherry"]

// .forEach()
// forEach메소드는 그 메소드가 붙어있는 배열데이터의 item 갯수만큼 인수로 사용된 콜백함수가 반복적으로 실행됨
// array매개변수: array는 콜백에해당하는 forEach라는 메소드가 붙어있는 그 배열데이터를 지칭(즉 fruits라는 배열데이터를 지칭)
// 매개변수이름은 이해할 수 있는 수준에서 자유롭게 작성
// forEach메소드는 배열데이터의 아이템 갯수만큼 특정한 콜백함수를 반복적으로 실행하는 용도로 사용
// forEach메소드는 아이템의 갯수만큼 콜백함수를 반복하는데 따로 반환되는 값은 없음

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array)
// })

// fruits.forEach(function (item, i) {
//   console.log(item, i)
// })

// fruits.forEach(function (fruit, i) {
//   console.log(fruit, i)
// })

// .map()
// map메소드는 그 내부에 콜백에서 반환된 특정한 데이터를 기준으로 해서
// 그 데이터들의 모음인 새로운 배열을 이 메소드가 실행된 자리에서 반환
// map메소드는 인수로 사용하는 콜백에 내부에서 반환하는 하나의 데이터를 가지고 그 데이터들을 모아놓은
// 새로운 배열을 만들어서 반환
// map메소드는 아이템의 갯수만큼 콜백함수를 반복하는데 콜백내부에서 return 키워드를 통해서 반환한 데이터를 새로운 배열로 만들어서 사용
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log(a) //undefined

// const a = fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index) {
//   // return `${fruit}-${index}` //return 키워드를 이용하여 콜백함수 밖으로 반환
//   return {
//     id: index,
//     name: fruit 
//   }
// })

// const b = fruits.map(function (fruit, index) {
//   return `${fruit}-${index}` //return 키워드를 이용하여 콜백함수 밖으로 반환
// })

const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit 
}))
console.log(b) //(3) ["Apple-0", "Banana-1", "Cherry-2"]
// 0: {id: 0, name: "Apple"}
// 1: {id: 1, name: "Banana"}
// 2: {id: 2, name: "Cherry"}