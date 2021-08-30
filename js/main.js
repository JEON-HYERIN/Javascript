//JSON
//Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }
}

json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2021-08-30T11:28:40.486Z"}

json = JSON.stringify(rabbit, ["name"]);
console.log(json); //{"name":"tori"}

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); //{"name":"tori","color":"white"}

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-08-30T11:40:13.460Z
// key: jump, value: () => {
//     console.log(`${this.name} can jump!`);
//   }

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'hyerin' : value;
});
console.log(json); //{"name":"hyerin","color":"white","size":null,"birthDate":"2021-08-30T11:42:34.018Z"}

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj); //{name: "tori", color: "white", size: null, birthDate: "2021-08-30T11:44:05.353Z"}


console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());