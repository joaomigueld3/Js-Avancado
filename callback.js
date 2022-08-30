// Example 1

function loop(values, callback) {
  for (const value of values) {
    callback(value);
  }
}

loop([1, 2, 3, 4, 5], (value) => console.log(value * 100));

// Example 2

function greeting(message, callback) {
  const user = "joao";
  const multiplicador = 11222000;

  callback(message, user, multiplicador);
}

greeting("hi, welcome:", function (message, user) {
  console.log(`${message} ${user}`);
});

greeting(12345, function (message, user, multiplicador) {
  console.log(message * multiplicador);
});

const asyncGreeting = async() =>{
  const userTest = await 'joao';
  let phoneTest = '+558199999-9999'
    console.log(phoneTest)
}
asyncGreeting()