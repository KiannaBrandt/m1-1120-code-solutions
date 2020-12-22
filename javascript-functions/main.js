function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var Beavis = greet('Beavis');

console.log('Beavis:', Beavis);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);

console.log('areaResult:', areaResult);

function getFirstName(person) {
  return person.firstName;
}

var lelouche = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('lelouche:', lelouche);

function getLastElement(array) {
  var numberOfElements = array.length;
  var lastIndex = numberOfElements - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var accessories = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('accessories:', accessories);
