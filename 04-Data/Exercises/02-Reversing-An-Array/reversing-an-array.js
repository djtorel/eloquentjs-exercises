/**
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array 
given as argument by reversing its elements. Neither may use the standard 
reverse method.
*/

const reverseArray = (arr) => {
  return arr.reduce((acc, value) => {
    acc.unshift(value);
    return acc;
  }, []);
};

const reverseArrayInPlace = (arr) => {
  let iterLength = Math.floor(arr.length / 2);

  for (let i = 0; i < iterLength; i++) {
    const frontSwap = arr[arr.length - 1 - i];
    const endSwap = arr[i];
    arr[i] = frontSwap;
    arr[arr.length - 1 - i] = endSwap;
  }
};

console.log(reverseArray([1, 2, 3]));
let testArr = [4, 5, 6, 7, 8];
console.log(`testarr: [${testArr}]`);
reverseArrayInPlace(testArr);
console.log(`testarr: [${testArr}]`);