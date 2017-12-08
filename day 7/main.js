const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

class Program {
  constructor(name, weight, holding) {
    this._name = name;
    this._weight = weight;
    this._holdingSimple = holding;
    this._holding = [];
  }

  addHolding(program) {
    let added = false;

    this._holding.forEach((value) => {
      if (value.addHolding(program)) {
        added = true;
      }
    });

    if (this._holdingSimple.includes(program._name)) {
      this._holding.push(program);
      added = true;
    }

    return added;
  }
}

let programs = [];
input.split('\n').forEach((value) => {
  if (value === '') {
    return;
  }

  let holding = [];
  if (value.split(' -> ')[1]) {
    holding = value.split(' -> ')[1].split(', ');
  }

  programs.push(new Program(value.split(/\s/)[0], value.split('(')[1].split(')')[0], holding));
});

for (let i = 0; i < programs.length; i++) {
  for (let j = 0; j < programs.length; j++) {
    if (i !== j && programs[j].addHolding(programs[i])) {
      programs.splice(i, 1);
      i--;
      break;
    }
  }
}

let root = programs[0];
console.log(root);
