/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowercase = string.toLowerCase();
  var newString = lowercase.split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
  return newString.join(' ');
}
