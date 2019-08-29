var initialArray = arr.slice(0);
var sortedArray = arr.sort((a, b) => a - b);

for (var i = 0; i < initialArray.length; i++) {
  if (initialArray[i] != sortedArray[i]) {
    for (var j = i + 1; j < initialArray.length; j++) {
      if (initialArray[j] === sortedArray[i]) {
        swap(initialArray[i], initialArray[j]);
        numberOfSwap++;
        break;
      }
    }
  }
}
