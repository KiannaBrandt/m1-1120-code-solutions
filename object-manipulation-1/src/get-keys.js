/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var property in object) {
    array.push(property);
  }
  return array;
}
