
function destroyer(arr) {
  var args = Array.from(arguments);

  var targetArray = args[0]; // Initial array to remove from
  var numToDestroy = args.length - 1; // Number of "destructable" numbers

  /* Debugging Console Logs */
  console.log(targetArray);
  console.log(numToDestroy);

  //var filtered = targetArray.filter(shouldBeDestroyed);
  //console.log(filtered);
}

function shouldBeDestroyed(value) {
  return true;
}

/* Test Cases */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/*destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);*/
