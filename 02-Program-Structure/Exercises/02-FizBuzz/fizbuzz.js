/* 
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (!(i % 3)) {
    output += "Fizz";
  }
  if (!(i % 5)) {
    output += "Buzz";
  }

  console.log(output || i);
}
 */

const fizzDictionary = [
  { 3: "Fizz" },
  { 5: "Buzz" },
];

for (let i = 1; i <= 100; i++) {
  const output = fizzDictionary.reduce((acc, item) => {
    for (let key in item) {
      if (!(i % key)) {
        acc += item[key];
      }
      return acc;
    }
  }, "");

  console.log(output || i);
}