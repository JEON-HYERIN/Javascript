// 상대경로를 통해 외부에서 특정한 js파일을 가져올 수 있음
// export키워드를 통해 어떠한 함수를 자바스크립트파일 내부에서 외부로 내보내기
// 내보내진내용을 import키워드로 가져와서 활용
// js라는 확장자로 끝나는 자바스크립트파일에서는 외부에있는 자바스크립트파일을 import키워드로 가지고올수있고 혹은 그파일내에서 특정한내용을 export키워드로 내보내기를 할 수도있다.
// 자바스크립트파일은 외부에있는 자바스크립트 파일을 가지고올 수 있는 하나의 통로를 갖고있음 import키워드를 통해 외부에있는 다른자바스크립트파일을 가지고오는 문법작성
// 하나의 자바스크립트파일에서는 나가는 통로가 2개
// 그리고 자바스크립트파일은 그안에있는 특정내용을 밖으로 내보낼 수 있는 2개의 통로를 가지고있음 하나는 Default export 라고해서 이름을 따로 지정하지 않아도 되는 기본통로 2번째는 Named export라고해서 이름을 꼭 지정해야되는 통로
// 이름을 지정할 필요가 없는 통로를 사용할 때는 export키워드와 함께 default키워드를 사용, 데이터이름을 따로 설정하지 않아도 됨

// 차이점
// 기본통로는 하나의 파일에서 하나의 데이터만 내보내기 가능
// 이름을 지정해야되는 통로로 내보내는 데이터는 이름만 지정되어있으면 몇개를 내보내든지 상관없음

// import getType from './getType.js' 
// import getRandom from './getRandom.js' 
console.log(_.camelCase('the hello world')) //theHelloWorld
// console.log(getType([1, 2, 3])) //Array
// console.log(getRandom(), getRandom()) //2 8



import checkType from './getType.js' 
// import random from './getRandom.js' 
console.log(checkType([1, 2, 3])) //Array
// console.log(random(), random()) //2 8

// 이름이 지정된 통로로 나오는 데이터의 경우 데이터를 중괄호로 묶어서 사용
// 중괄호 사이에 마치 객체구조분해문법과 유사
// import {random} from './getRandom.js' 
// console.log(random(), random()) //2 8

// import {random, user} from './getRandom.js' 
// console.log(random(), random()) //2 8
// console.log(user) //{name: "hyerin", age: 95}




// 정리하자면 자바스크립트파일에서 특정내용을 한번만 내보내기하면 충분하다고 판단시에는 export default사용 
// 반대로 내보내야할 내용이 많다면 이름을지정해야하는 통로사용



// 객체구조분해에서 추출한 하나의 데이터이름이 맘에들지않으면 뒤쪽에 콜론기호를 통해 원하는 다른이름으로 변경가능
// import문법에서는 콜론기호대신 as키워드로 활용할 이름지정
// import {random, user as hyerin} from './getRandom.js' 

// console.log(random(), random()) //2 8
// console.log(hyerin) //{name: "hyerin", age: 95}



// import {random, user as hyerin} from './getRandom.js' 
// 한번에가져오기 문법
// as뒤쪽의 이름은 마음대로 지정 가능
// *(asterisk)를 와일드카드라고도 부름
// 와일드카드(Wildcard Character, *)는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킴
// *는 getRandom이라는 자바스크립트파일에 들어있는 모든 내보내기되는 데이터를 의미 그것을 *로가지고와서 R이라는 내가지정한 이름에 할당해서 내부에서 활용가능
// 의미적으로 getRandom이라는 자바스크립트파일에서 모든 export 내용을 가지고와서 R이라는 내가지정한이름에 변수에 할당해서 내부적으로 사용하는 개념
import * as R from './getRandom.js'
console.log(R) 
// Module {Symbol(Symbol.toStringTag): "Module"}
// default: 123
// random: ƒ random()
// user: Object
