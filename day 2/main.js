const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

let total = 0;

input.split('\n').forEach((value) => {
  let line = value;
  if (line.split(/\s/).length < 2) {
    return;
  }

  line.split(/\s/).forEach((value) => {
    let valueIntA = parseInt(value);
    line.split(/\s/).forEach((value) => {
      let valueIntB = parseInt(value);

      if (valueIntA !== valueIntB && valueIntA / valueIntB === parseInt(valueIntA / valueIntB)) {
        total += valueIntA / valueIntB;
      }
    });
  });
});

console.log(total);
