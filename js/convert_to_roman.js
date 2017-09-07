function convertToRoman(num) {

  function makeString(number) {
    return number.toString();
  }

  function checkLength(number) {
    return number.length;
  }

  function identifyPlaceValues(numberString, numberOfDigits) {
    var disassembledNumber = [];
    for (i = 0; i < numberOfDigits; i++) { // Pushes digit in each of the place values into array (without zeroes)
      disassembledNumber.push(numberString.charAt(i));
    }

    if (numberOfDigits > 1) {
      var numberOfZeroes = numberOfDigits - 1;
      var zeroString = "0".repeat(numberOfZeroes);
      console.log(zeroString);
      for (j = 0; j < numberOfDigits - 1; j++) { // Adds appropriate number of zeroes to place values
        disassembledNumber[j] = disassembledNumber[j].concat(zeroString);
        zeroString = zeroString.slice(0, -1);
      }
    }
    return disassembledNumber;
  }

  var stringifiedNum = makeString(num);
  var digits = checkLength(stringifiedNum);


  console.log(identifyPlaceValues(stringifiedNum, digits));

}

console.log(convertToRoman(2));
console.log(convertToRoman(36));
console.log(convertToRoman(1000));
console.log(convertToRoman(36957));
