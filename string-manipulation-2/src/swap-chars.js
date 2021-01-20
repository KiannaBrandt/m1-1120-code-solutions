/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  return string.slice(0, firstIndex) + string.charAt(secondIndex) + string.slice(firstIndex + 1, secondIndex) +
  string.charAt(firstIndex) + string.slice(secondIndex + 1);
}
