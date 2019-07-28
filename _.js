/**
 * 아래의 두 함수를 살펴보면 같은 기능인 for문이 중복되는 것을 알 수있다.
 * 해당 내용을 _each라는 함수를 만들어서 리펙토링 한다.
 */

// function _filter(list, predicate) {
//   let new_list = [];
//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) {
//       new_list.push(list[i]);
//     }
//   }
//   return new_list;
// }

// function _map(list, mapper) {
//   let new_list = [];
//   for (let i = 0; i < list.length; i++) {
//     new_list.push(mapper(list[i]));
//   }
//   return new_list;
// }

// function _filter(list, predicate) {
//   let new_list = [];
//   _each(list, function(val) {
//     if (predicate(val))
//       new_list.push(val);
//   })
//   return new_list;
// }

// function _map(list, mapper) {
//   let new_list = [];
//   _each(list, function(val) {
//       new_list.push(mapper(val));
//     });
//   return new_list;
// }

// function _each(list, iter) {
//   for (let i = 0; i < list.length; i++) {
//     iter(list[i]);
//   }
//   return list;
// }

function _map(list, mapper) {
  let new_list = [];
  _each(list, (val) => new_list.push(mapper(val)));
  return new_list;
}

function _filter(list, predicate) {
  let new_list = [];
  _each(list, (val) => {
    if(predicate(val))
      new_list.push(val);
  })
  return new_list;
}

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}