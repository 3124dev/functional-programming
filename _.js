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

// curry
function _curry(fn) {
  return function(a, b) {
    // 인자가 2개 들어오면 한 번에 바로 리턴하고
    // 그렇지 않으면 미뤄두었다가 다음번 재 호출 때 리턴한다.
    // Javascript의 클로져를 이용
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b); };
  }
}

// curryr
function _curryr(fn) {
  return function(a, b) {
    // 인자가 2개 들어오면 기존 curry와 같은 순서로 가며
    // 그렇지 않은 경우 기존 curry와 다른 순서로 간다.
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a); };
  }
}

// curryr_get
var _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});


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