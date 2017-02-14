function rot13(str) { // LBH QVQ VG!
  var unicodeChars = [];
  var oldLetter = "";
  //var newLetter = "";
  var newWord = [];

  for (i = 0; i < str.length; i++) {
    unicodeChars[i] = str.charCodeAt(i);
  }

  for (j = 0; j < unicodeChars.length; j++) {
    oldLetter = unicodeChars[j];
    if (oldLetter >= 65 && oldLetter <= 77) {
      newWord[j] = String.fromCharCode(oldLetter + 13);
    }
    else if (oldLetter >= 78 && oldLetter <= 90) {
      newWord[j] = String.fromCharCode(oldLetter - 13);
    }
    else {
      newWord[j] = String.fromCharCode(oldLetter);
    }
  }

  str = newWord.join('');
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
