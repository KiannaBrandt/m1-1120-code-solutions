/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowercase = word.toLowerCase();
  var uppercase = lowercase.charAt(0).toUpperCase() + lowercase.slice(1, 4) + lowercase.charAt(4).toUpperCase() +
  lowercase.slice(5, 10);
  return uppercase;
}
