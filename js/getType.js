// export default function getType (data) {
//   return Object.prototype.toString.call(data).slice(8,-1);
// };
export default function (data) {
  return Object.prototype.toString.call(data).slice(8,-1);
};


// 기본통로로 데이터가 빠져나갈 수 있는 구조
// 기본통로로나가는 데이터는 그 데이터에 따로 이름을 지정할 필요 x
// 기본통로(default)로 빠져나가는 데이터는 가지고와서 활용할 때(import), 이름을 언제든지 내가원하는 이름으로 활용가능, 다른것으로 지정해도 문제 없음


