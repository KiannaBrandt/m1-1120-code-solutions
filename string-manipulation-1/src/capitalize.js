/* exported capitalize */
function capitalize(word) {
  var lowercase = word.toLowerCase();
  var newWord = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  return newWord;
}
