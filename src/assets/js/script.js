function greet(name) {
  console.log('Hello,' + name);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => {
  return n * 2;
});

const user = { name: 'John', age: 30, hobbies: ['music', 'game', 'code'] };

function sum(a, b) {
  return a + b;
}

greet('Eleventy');
console.log('読んでるね');
console.log('Doubled:', doubled);
console.log('Sum:', sum(3, 5));
console.log(user);
