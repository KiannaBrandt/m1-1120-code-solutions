/* exported filterOutStrings */
function filterOutStrings(values) {
  var valueArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'number') {
      valueArray.push(values[i]);
    }
  }
  return valueArray;
}
