/* exported numVowels */
function numVowels(string) {
  var lowercase = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < lowercase.length; i++) {
    if ((lowercase.charAt(i) === 'a') || (lowercase.charAt(i) === 'e') || (lowercase.charAt(i) === 'i') ||
      (lowercase.charAt(i) === 'o') || (lowercase.charAt(i) === 'u')) {
      count++;
    }
  }
  return count;
}
