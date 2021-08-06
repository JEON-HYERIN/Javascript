// 타이머함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// 시간부분에서 사용되는 단위 ms , 1000ms = 1초
// clearTimeout(): 설정된 Timeout 함수 종료
// clearInterval(): 설정된 Interval 함수 종료

const timer = setTimeout(() => {
  console.log('hello')
}, 3000)

const h1El = document.querySelector('h1')

h1El.addEventListener('click', () => {
  clearTimeout(timer)
})


// const timer = setInterval(() => {
//   console.log('hello')
// }, 3000)

// const h1El = document.querySelector('h1')

// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })