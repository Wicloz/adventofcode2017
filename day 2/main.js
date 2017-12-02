const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

let total = 0;

input.split('\n').forEach((value) => {
  if (value.split('\t').length < 2) {
    return;
  }

  let smallest = Infinity;
  let largest = 0;

  value.split('\t').forEach((value) => {
    let valueInt = parseInt(value);
    if (valueInt < smallest) {
      smallest = valueInt;
    }
    if (valueInt > largest) {
      largest = valueInt;
    }
  });

  total += largest - smallest;
});

console.log(total);
