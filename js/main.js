import getType from './getType.js'


console.log(typeof 'hello world');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);



console.log(getType(123));
console.log(getType(false));
console.log(getType('hi'));
console.log(getType({}));
console.log(getType([]));
console.log(getType(null));