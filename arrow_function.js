const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];


const getTest = (a) => (b) => (c) => (d) => a + b + c + d;

console.log(getTest(1)(2)(3)(4));


elements.map(function (element) {
  return element.length;
});

elements.map((element) => {
  return element.length;
});

elements.map((element) => element.length);
