var books = [
  {
    isbn: '123456789',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
  },
  {
    isbn: '234567890',
    title: 'HTML & CSS: Design and Build Web Sites',
    author: 'Jon Duckett'
  },
  {
    isbn: '345678901',
    title: 'JavaScript and jQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett'
  }
];

console.log('books array:', books);
console.log('typeof books:', typeof books);

var booksString = JSON.stringify(books);

console.log('books string:', booksString);
console.log('typeof booksString:', typeof booksString);

var student = '{"id":12345, "name":"Kianna"}';

console.log('student:', student);
console.log('typeof student:', typeof student);

var studentObject = JSON.parse(student);

console.log('student object:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
