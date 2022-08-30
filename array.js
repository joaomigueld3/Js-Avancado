const names = ["Jose", "Maria", "David", "Leonardo", "Joao"];

const users = [
  {
    name: "Jose",
    age: 25,
  },
  {
    name: "Joao",
    age: 13,
  },
  {
    name: "Maria",
    age: 50,
  },
  {
    name: "Marcos",
    age: 17,
  },
];

const index = names.findIndex((value) => {
  return value === "Maria";
});

const value = names.find((name) => {
  return name === "Maria";
});

const values = names.filter((name) => {
  return name !== "Maria";
});

const newNames = names.map((name, index) => {
  return {
    name,
    index,
  };
});

console.log(index,value,values,newNames)

const namesWithIndex = [];

names.forEach((name, index) => {
  if (index % 2 === 0) {
    namesWithIndex.push(name + index);
  }
});

console.log({namesWithIndex})


const usersMaiorDeIdade = users.some((user, index) => {
  return user.age >= 70;
});

console.log({ usersMaiorDeIdade });

