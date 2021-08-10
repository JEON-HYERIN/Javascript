// JS 데이터

String: "", '', ``
Number
Boolean: true, false
undefined
null
Array: []
Object: {}


String.prototype.indexOf()
// indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.
//  인덱스 = 숫자
// zero based 기준
// prototype을 통해 지정한 메소드는 메모리에 딱 한번만 만들어지고
// 그것을 이앞 에있는 생성자가 new라는 키워드로 만들어내는 인스턴스에서 언제든지 활용가능


// const result = 'Hello world!'.indexOf('world')
// // console.log(result) //6
// // const result = 'Hello world!'.indexOf('hyerin')
// // console.log(result) //-1
// // -1이라는 숫자데이터가나오면 문자데이터내부에서 hyerin이라는 문자를 전혀 찾을 수 없음을 의미

// // new String()이라는 생성자 함수 대신 따옴표를 통해서 리터럴방식으로
// // 하나의 데이터를 만든것임으로 String객체의 prototype으로 지정된 메소드는 
// // 언제 어디서나 문자데이터의 뒤쪽에 붙여서 활용가능

// const str = '0123'

// console.log(str.length) //4
// length속성 :str이라는 변수는 하나의 문자데이터고 그 문자데이터안에들어있는 글자가 총 몇개인지
// console.log('0123'.length) //4
// 특정한 문자데이터를 변수에 담지 않고 바로 직접적으로 사용가능
// length 문자데이터의 글자개수 확인시 사용
// 띄어쓰기도 하나의 공백문자


// const str = 'Hello world!'

// console.log(str.indexOf('world')) //6
// console.log(str.indexOf('hyerin')) //-1
// console.log(str.indexOf('hyerin') !== -1) //false
// indexof와 비교연산자를 사용하게 되면 해당문자가 있는지 없는지 불린데이터로 확인가능

// console.log(str.slice(0, 3)) //Hel
// slice: 어디에서시작해서 몇번째의 직전까지 잘라낼것인지 의미
// slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
// beginIndex 추출 시작점인 0부터 시작하는 인덱스입니다.
// endIndex 0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됩니다.

// console.log(str.slice(6, 11)) //world만 출력


// console.log(str.replace('world', 'hyerin')) //Hello hyerin!
// replace메소드: 앞에있는 문자데이터에서 첫번째 인수에 해당하는 그 문자를 찾아서
// 두번째 인수에 해당하는 내용으로 교체

// console.log(str.replace(' world!', '')) //Hello
// hello만 남기고싶을때 replace활용
// 대체할 문자를 '' 빈문자로 작성

// const str = '         Hello world         '
// console.log(str) //         Hello world         
// console.log(str.trim()) //Hello world
// trim메소드: 특정한 문자 데이터의 앞에서 시작하는 연결된 모든 공백문자들을 제거하고
// 맨뒤에서 연결되어져있는 모든 공백문자들을 제거



let result = 'Hello world!'.indexOf('world')
console.log(result) //6

result = 'Hello world!'.indexOf('hyerin')
console.log(result) //-1