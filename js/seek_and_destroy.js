
function destroyer(arr) {
  var args = Array.from(arguments);

  var targetArray = args[0]; // Initial array to remove from
  var elementsToDestroy = args.slice(1, args.length); // Removable elements

  /* Debugging Console Logs */
  console.log(targetArray);
  console.log(elementsToDestroy);
  var filtered = [];

  targetArray.forEach(function(element) { // Iterates through the initial array
    if (elementsToDestroy.includes(element)) {// And if the array of elements to destroy contains this element... {
      console.log("Don't want this element");
    }
    else {
      filtered.push(element);
    }
  });

  return filtered;

}

/* Test Cases */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
