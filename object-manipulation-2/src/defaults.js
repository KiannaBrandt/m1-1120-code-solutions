/* exported defaults */
function defaults(target, source) {
  for (var property in target) {
    for (var property2 in source) {
      if (property !== property2) {
        target[property2] = source[property2];
      }
      if (property === property2) {
        target[property2] = target[property];
      }
    }
  }
}
