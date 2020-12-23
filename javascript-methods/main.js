var one = 1;
var ten = 10;
var hundred = 100;
var maximumValue = Math.max(one, ten, hundred);
console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Spider-Man', 'Deadpool', 'Ant-Man'];
var randomNumber = Math.random();
// eslint-disable-next-line no-redeclare
var randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J K Rowling'
  },

  {
    title: 'Lord of the Rings',
    author: 'J R R Tolkien'
  },

  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C S Lewis'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Kianna Brandt';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
