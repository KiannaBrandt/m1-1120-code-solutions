/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += string.charAt(i).toUpperCase();
    } else {
      newString += string.charAt(i).toLowerCase();
    }
  }
  return newString;
}
