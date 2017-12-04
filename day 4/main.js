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

  lineSplit.forEach((value, index) => {
    if (!lineValid) {
      return;
    }

    if (lineSplit.reduce((total, currentValue, currentIndex) => {
      if (currentIndex !== index && (currentValue === value || currentValue.split('').sort().join('') === value.split('').sort().join(''))) {
        return total + 1;
      }
      return total;
    }, 0) >= 1) {
      lineValid = false;
    }
  });

  if (lineValid) {
    valid++;
  }
});

console.log(valid);
