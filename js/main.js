import random from "./getRandom.js";


// 조건문 (IF statement)

const a = random()

if (a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
}