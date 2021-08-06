// 변수 유효범위(Variable Scope)
// var, let, const
// let, const : 블록레벨의 유효범위를 가짐
// var : 함수레벨의 유효범위를 가짐

function scope() {
  if (true) {
    var a = 123
  }
  console.log(a)
}

scope()