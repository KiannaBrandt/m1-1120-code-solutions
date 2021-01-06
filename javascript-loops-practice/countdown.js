/* exported countdown */
function countdown(numbers) {
  var numbersArray = [];
  for (var i = numbers; i >= 0; i--) {
    numbersArray.push(i);
  }
  return numbersArray;
}
