for (let i = 1; i <= 100; i++) {
  let output = "";
  if (!(i % 3)) {
    output += "Fizz";
  }
  if (!(i % 5)) {
    output += "Buzz";
  }
  if (output.length === 0) {
    output = i;
  }

  console.log(output);
}
