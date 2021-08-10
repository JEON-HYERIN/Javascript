import random from './getRandom.js';

const pi = 3.141592
console.log(pi) //3.141592, 숫자데이터

// toFixed()는 숫자데이터에 사용할 수 있는 메소드
// 메소드가 호출될 때 인수로 소수점의 몇번째 자리까지 유지할 것인지 명시
// toFixed 메소드가 실행되면 문자데이터가 반환됨
const str = pi.toFixed(2)
console.log(str) //3.14
console.log(typeof str) //string


// parseInt, parseFloat는 자바스크립트에서 제공하는 숫자와 관련된 전역함수(global, 전체의 영역에서 언제든지 사용할 수 있는 함수)
// setTimeout, setInterval, clearTimeout, clearInterval 도 전역함수
// parse:분석하다 int: integer라는 정수를 의미하는 단어의 약어 
// parseInt 전역함수 부분의 인수로 문자데이터를 넣게되면 분석 후 숫자만 추출해서 정수로 반환
// parseFloat 전역함수: 소수점자리의 숫자도 유지하면서 문자데이터를 숫자데이터로 변환
const integer = parseInt(str) 
const float = parseFloat(str)
console.log(integer) //3
console.log(float) //3.14
console.log(typeof integer, typeof float) //number, number


// Math는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다. 함수 객체가 아닙니다.

// Math.abs(): Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.
console.log('abs: ', Math.abs(-12)) //abs: 12

// Math.min(): Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.
console.log('min: ', Math.min(2, 8)) //min: 2

// Math.max(): Math.max()함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.
console.log('max: ', Math.max(2, 8)) //max: 8

// Math.ceil(): 정수단위로 올림 처리 
// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
console.log('ceil: ', Math.ceil(3.14)) //ceil: 4

// Math.floor(): 정수단위로 내림 처리
//  Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
console.log('floor: ', Math.floor(3.14)) //floor: 3

// Math.round(): 정수기준으로 반올림처리  
// Math.round() 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환합니다.
console.log('round: ', Math.round(3.14)) //round: 3

// Math.random(): 랜덤한 숫자를 반환 (난수)
// Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환하며, 이 값은 사용자가 원하는 범위로 변형할 수 있다. 난수 생성 알고리즘에 사용되는 초기값은 구현체가 선택하며, 사용자가 선택하거나 초기화할 수 없다
console.log('random: ', Math.random() ) //random:  0.10729888790363962



console.log(random())