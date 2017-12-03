let input = 312051;

let order = Math.ceil(Math.sqrt(input));
if (order % 2 === 0) {
  order++;
}
let distance = Math.floor(order/2);

let output = distance;

let temp = Math.pow(order, 2) - input;
if (temp % (distance * 2) <= 2) {
  while (temp >= 0) {
    temp -= distance;
  }
} else {
  temp = temp % distance;
}
output += Math.abs(temp);

console.log(output);
