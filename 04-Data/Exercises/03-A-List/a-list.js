/**
Write a function arrayToList that builds up a list structure like the one shown 
when given [1, 2, 3] as argument. Also write a listToArray function that 
produces an array from a list. Then add a helper function prepend, which takes 
an element and a list and creates a new list that adds the element to the front 
of the input list, and nth, which takes a list and a number and returns the 
element at the given position in the list (with zero referring to the first 
element) or undefined when there is no such element.
*/

const arrayToList = (arr) => {
  return arr.reduceRight((acc, value) => acc = {
    value,
    rest: acc
  }, null);
};

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const nth = (list, num) => {
  if (!list) return undefined;
  else if (num === 0) return list.value;
  else return nth(list.rest, num - 1);
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));