function convertToRoman(num) {

  function makeString(number) {
    return number.toString();
  }

  function checkLength(number) {
    return number.length;
  }

  function breakItUp(numstr, digits) {
    var brokenUpArray = [];
    for (i = 0; i < digits; i++) {
      brokenUpArray.push(numstr.charAt(i));
    }

    if (digits > 1) {
      var numberOfZeroes = digits - 1;
      var zeroString = "0" * numberOfZeroes;
      for (j = 0; j < digits - 1; j++) {
        brokenUpArray[j] = brokenUpArray[j].concat(zeroString);
      }
    }
    return brokenUpArray;
  }

  var stringifiedNum = makeString(num);
  var numberOfDigits = checkLength(stringifiedNum);


  console.log(breakItUp(stringifiedNum, numberOfDigits));

}

console.log(convertToRoman(2));
console.log(convertToRoman(36));
console.log(convertToRoman(1000));
console.log(convertToRoman(36957));
