let input = 312051;

let order = Math.ceil(Math.sqrt(input));
if (order % 2 === 0) {
  order++;
}
let distance = Math.floor(order/2);

// PART 1
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

// PART 2
let matrix = [];
for (let i = 0; i < order; i++) {
  matrix[i] = Array.apply(null, Array(order)).map(Number.prototype.valueOf, 0);
}
matrix[distance][distance] = 1;

let x = distance + 1;
let y = distance;
let thisDistance = 1;

while (x !== order || y !== order - 1) {
  matrix[y][x] = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if ((i !== 0 || j !== 0) && typeof matrix[y+j] !== 'undefined' && typeof matrix[y+j][x+i] !== 'undefined') {
        matrix[y][x] += matrix[y+j][x+i];
      }
    }
  }

  if (matrix[y][x] > input) {
    console.log(matrix[y][x]);
    break;
  }

  if (y === distance + thisDistance) {
    x++;
  } else if (x === distance - thisDistance) {
    y++;
  } else if (y === distance - thisDistance) {
    x--;
  } else if (x === distance + thisDistance) {
    y--;
  }

  if (x === distance + thisDistance + 1 && y === distance + thisDistance) {
    thisDistance++;
  }
}
