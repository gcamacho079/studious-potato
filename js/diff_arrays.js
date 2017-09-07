
function diffArray(arr1, arr2) {
  var newArr = [];

  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1 && newArr.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
