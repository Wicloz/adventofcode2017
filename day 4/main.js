const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

let valid = 0;

input.split('\n').forEach((value) => {
  if (value === '') {
    return;
  }

  let lineValid = true;
  let lineSplit = value.split(/\s/);

  lineSplit.forEach((value) => {
    if (!lineValid) {
      return;
    }

    if (lineSplit.reduce((total, currentValue) => {
      return currentValue === value ? total+1 : total
    }, 0) >= 2) {
      lineValid = false;
    }
  });

  if (lineValid) {
    valid++;
  }
});

console.log(valid);
