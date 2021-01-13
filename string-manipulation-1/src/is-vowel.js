/* exported isVowel */
function isVowel(char) {
  var uppercase = char.toUpperCase();
  return (uppercase === 'A') || (uppercase === 'E') || (uppercase === 'I') ||
    (uppercase === 'O') || (uppercase === 'U');
}
