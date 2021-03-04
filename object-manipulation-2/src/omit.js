/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property !== keys[i]) {
        newObject[keys[i]] = source[property];
      }
    }
  }
  return newObject;
}
