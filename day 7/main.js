const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');
console.log(input);

class Program {
  constructor(name, weight, holding) {
    this._name = name;
    this._weight = parseInt(weight);
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

  getTotalWeight() {
    let total = this._weight;
    this._holding.forEach((parent) => {
      total += parent.getTotalWeight();
    });
    return total;
  }

  getBalancedWeight() {
    let weights = {};
    let maxCount = 0;
    let maxWeight = 0;

    this._holding.forEach((parent) => {
      let weight = parent.getTotalWeight();

      if (weights[weight] == null) {
        weights[weight] = 1;
      } else {
        weights[weight]++;
      }

      if (weights[weight] > maxCount) {
        maxCount = weights[weight];
        maxWeight = weight;
      }
    });

    return maxWeight;
  }

  hasUnbalancedGrandparents() {
    for (let parent of this._holding) {
      let firstWeight = -1;
      for (let grandParent of parent._holding) {
        if (firstWeight === -1) {
          firstWeight = grandParent.getTotalWeight();
        } else if (firstWeight !== grandParent.getTotalWeight()) {
          return true;
        }
      }
    }
    return false;
  }

  getUnbalancedParent() {
    let balance = this.getBalancedWeight();

    for (let parent of this._holding) {
      if (parent.getTotalWeight() !== balance) {
        return parent;
      }
    }
  }

  getNewWeigth(balance) {
    return this._weight + balance - this.getTotalWeight();
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

let temp = root;
while (temp.hasUnbalancedGrandparents()) {
  temp = temp.getUnbalancedParent();
}
console.log(temp.getUnbalancedParent().getNewWeigth(temp.getBalancedWeight()));
