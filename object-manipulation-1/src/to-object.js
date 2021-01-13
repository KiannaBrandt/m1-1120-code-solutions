/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  var property = keyValuePair[0];
  var key = keyValuePair[1];
  object[property] = key;
  return object;
}
