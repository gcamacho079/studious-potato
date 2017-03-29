function sumAll(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var sum = 0;

  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
