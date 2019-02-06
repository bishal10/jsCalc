let repeatSign = [];
// n1 contain actual value and n2 contain indicator of string "norepeatation"
function displayNumber(n1, n2) {
  // displaying valid operation in text area of input field
  calcform.txt1.value = calcform.txt1.value + n1;

  var newLength = repeatSign.push(n2);
  repeatSign.forEach(function(item, index, array) {
    // checking for same sign at once like ++ or ** for invalid operation
    if (repeatSign[index] && repeatSign[index - 1] === "norepeatation") {
      calcform.txt1.value = "Invalid use of sign";
      repeatSign.fill(0);
      var delayInMilliseconds = 3000;

      setTimeout(function() {
        calcform.txt1.value = "";
      }, delayInMilliseconds);
    }
  });
}

function clearDisplay() {
  calcform.txt1.value = "";
  repeatSign.fill(0);
}
