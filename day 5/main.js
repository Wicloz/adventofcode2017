const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

let instructions = input.split('\n').slice(0, -1).map((value) => {
  return parseInt(value);
});
let index = 0;
let steps = 0;

while (index >= 0 && index < instructions.length) {
  let offset = instructions[index];

  if (offset >= 3) {
    instructions[index]--;
  } else {
    instructions[index]++;
  }

  index += offset;
  steps++;
}

console.log(steps);
