// const zelda = {
//   name: 'Zelda',
// };

// zelda.greetings = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };

// zelda.greetings();

// const link = {
//   name: 'link',
// };

// function Hero(name) {
//   const hero = {
//     name,
//   };

//   hero.greetings = function () {
//     console.log(`This is ${this.name}`);
//   };

//   return hero;
// }

// const zelda = Hero('Zelda');
// zelda.greetings();

// const heroMethods = {
//   greetings: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// function Hero(name) {
//   const hero = { name, ...heroMethods };
//   // Object.create() -> No ennumerables las propiedades

//   return hero;
// }

// const zelda = Hero('Zelda');
// zelda.greetings();

function Hero(name) {
  this.name = name;
}

Hero.prototype.greetings = function () {
  console.log(`My name is ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.greetings();

console.log('Zelda hasOwnproperty (name): ', zelda.hasOwnProperty('greetings'));
console.log(zelda.__proto__);
console.log(zelda.__proto__ === Hero.prototype, 'owo');
console.log(zelda.__proto__.__proto__ === Object.prototype);
