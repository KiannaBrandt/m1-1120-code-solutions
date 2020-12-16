var student = {
  firstName: 'Kianna',
  lastName: 'Brandt',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Executive Assistant';

console.log('value of student.livesInIrvine:', student.livesInIrvine);

console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'S',
  year: 2020
};

vehicle['color'] = 'Silver';

vehicle['isConvertible'] = false;

console.log('value of vehicle.color:', vehicle['color']);

console.log('value of vehicle.isConvertible:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Winter',
  type: 'Rabbit'
};

delete pet.name;

delete pet.type;

console.log('value of pet:', pet);
