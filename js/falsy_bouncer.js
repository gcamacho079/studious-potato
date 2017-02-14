// Array --> array
// Remove falsy values from given array
function bouncer(arr) {
  arr = arr.filter(Boolean);
  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer(["a", "b", "c"]);
bouncer([1, null, NaN, 2, undefined]);
