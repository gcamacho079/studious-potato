function rot13(str) { // LBH QVQ VG!
  var unicodeChars = [];
  var oldLetter = "";
  var newLetter = "";
  var newWord = [];

  for (i = 0; i < str.length; i++) {
    unicodeChars[i] = str.charCodeAt(i);
  }

  console.log(unicodeChars);

  for (j = 0; j < unicodeChars.length; j++) {
    oldLetter = unicodeChars[j];
    if (oldLetter >= 65 && oldLetter <= 78) {
      //add 13;
    }
    else if (oldLetter >= 79 && oldLetter <= 90) {
      //transform;
    }
    else {
      //stays same;
    }
  }

  //return str;


}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
