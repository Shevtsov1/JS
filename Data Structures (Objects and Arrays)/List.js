function arrayToList(givenArr) {
  let list = null;
  for (let i = givenArr.length - 1; i >= 0; i--) {
      list = { value: givenArr[i], rest: list };
  }
  return list;
}

function listToArray(givenList) {
  let arr = [];
  for (let node = givenList; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(givenElem, givenList) {
  let newList = givenList;
  newList = { value: givenElem, rest: givenList};
  return newList;
}

function nth(givenList, numOfElem) {
  if (numOfElem === 0) {
    return givenList.value;
  } else {
    return nth(givenList.rest, numOfElem - 1)
  }
}

console.log( arrayToList([1, 2, 3]) );
console.log( listToArray( arrayToList([10, 20, 30]) ) );
console.log( prepend(10, prepend(20, null) ) );
console.log( nth(arrayToList([10, 20, 30]), 1) );
