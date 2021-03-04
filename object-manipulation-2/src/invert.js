/* exported invert */
function invert(source) {
  var newObject = {};
  for (var property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}
