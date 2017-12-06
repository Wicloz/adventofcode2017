const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

let banks = input.split(/\s/).slice(0, -2).map((value) => {
  return parseInt(value);
});
let seen = [];

while (!seen.includes(banks.join(','))){
  seen.push(banks.join(','));

  let highest = banks.reduce((previousValue, currentValue) => {
    return previousValue > currentValue ? previousValue : currentValue;
  });
  let highestIndex = banks.indexOf(highest);
  banks[highestIndex] = 0;

  for (let i = 0; i < highest; i++) {
    banks[(highestIndex + 1 + i) % banks.length]++;
  }
}

console.log(seen.length);
console.log(seen.length - seen.indexOf(banks.join(',')));
