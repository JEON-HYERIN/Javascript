// Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// 출력값
// while: 3, while: 2, while: 1


// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// 출력값
// do while: 0


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if ( i % 2 !== 0) {
    continue;
  }
  console.log(`Q1: ${i}`);
}
// Q1: 0
// Q1: 2
// Q1: 4
// Q1: 6
// Q1: 8
// Q1: 10

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for ( let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`Q2: ${i}`);
}
// Q2: 0
// Q2: 1
// Q2: 2
// Q2: 3
// Q2: 4
// Q2: 5
// Q2: 6
// Q2: 7
// Q2: 8