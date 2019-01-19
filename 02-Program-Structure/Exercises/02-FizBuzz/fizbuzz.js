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
