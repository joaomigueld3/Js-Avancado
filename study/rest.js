// Rest Operator

const sum = (...values) =>
  values.reduce((prev, currentValue) => prev + currentValue);

const [jose, maria, joao, ...users] = [
  "Jose",
  "Maria",
  "João",
  "Bruno",
  "Claudia",
];

console.log(jose)
console.log(maria)
console.log(joao)
console.log(users)
  
console.log(sum(1, 1, 1, 2, 3, 10, 30, 111));
