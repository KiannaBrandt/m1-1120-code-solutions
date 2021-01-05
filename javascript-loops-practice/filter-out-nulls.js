/* exported filterOutNulls */
function filterOutNulls(values) {
  var valueArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valueArray.push(values[i]);
    }
  }
  return valueArray;
}
