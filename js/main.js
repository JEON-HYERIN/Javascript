// .filter()
// Array.prototype.filter()
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열
// 어떠한 배열데이터안에 들어있는 각각의 아이템들을 특정한 기준에 의해서 필터링을 함
// 필터된 새로운 배열데이터를 결과로 반환
// 콜백함수에서 반환되는 값이 true인 경우에만 numbers 부분에서 반복되는 그 아이템의 데이터를 새로운 배열에 하나씩 넣어줌
// 필터는 필터링을해서 일부내용을 걷어내고 새로운 배열을 만드는 개념
// 만들어진 새로운 배열이 원본의 개수랑 다를 수 있음
// 원본에 영향을 주지 않음
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number < 3)
// console.log('a: ', a)

// const b = numbers.filter(number => number < 3)
// console.log('b: ', b)

// console.log(numbers)

// .find() .findIndex()
// findIndex: 찾아진 아이템의 인덱스 번호를 반환하는 메소드
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^C/.test(fruit)) //C로시작하는
// console.log(a) //Cherry

// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b) //2


// .includes()
// 앞에있는 배열데이터 부분에 인수로 사용된 특정한 데이터가 포함되어 있는지 확인 해주는 메소드
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.includes(3)
// console.log(a) //true

// const b = fruits.includes('hyerin')
// console.log(b) //false


// push() .unshift()
// 원본 수정됨 주의
// push(): 메소드가 사용되는 그배열의 가장 뒤쪽 부분에 특정한 인수의 내용을 밀어넣음
// unshift(): 배열데이터의 가장 앞쪽에 데이터를 삽입하는 구조
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.push(5)
// console.log(numbers) //(5) [1, 2, 3, 4, 5]

// numbers.unshift(0)
// console.log(numbers) //(6) [0, 1, 2, 3, 4, 5]


// // .reverse()
// // 원본 수정됨 주의
// // 배열의 아이템의 순서를 완전히 뒤집어내는 용도로 사용
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.reverse()
// fruits.reverse()

// console.log(numbers) //(4) [4, 3, 2, 1]
// console.log(fruits) //(3) ["Cherry", "Banana", "Apple"]


// .splice()
// 원본 수정됨 주의
// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// 첫번째인수: 배열데이터의 인덱스값
// 두번째인수: 인덱스 번호에서 아이템 1개 지우기 
// 세번째인수: 인덱스번호에 해당 아이템을 끼워 넣기
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.splice(2, 1) 
console.log(numbers) //(3) [1, 2, 4]

numbers.splice(2, 0, 999) 
console.log(numbers) //(4) [1, 2, 999, 4]

numbers.splice(2, 1, 99) 
console.log(numbers) //(4) [1, 2, 99, 4]

fruits.splice(2, 0, 'Orange')
console.log(fruits) //(4) ["Apple", "Banana", "Orange", "Cherry"]