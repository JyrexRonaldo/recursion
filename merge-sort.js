function merge(leftArray, rightArray) {
  let i = 0;
  let j = 0;
  let k = 0;
  let mergedArray = [];

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      mergedArray[k++] = leftArray[i++];
    } else {
      mergedArray[k++] = rightArray[j++];
    }
  }

  for (; i < leftArray.length; i++) {
    mergedArray[k++] = leftArray[i];
  }

  for (; j < rightArray.length; j++) {
    mergedArray[k++] = rightArray[j];
  }

  return mergedArray;
}

console.log(merge([2, 8, 15, 18], [5, 9, 12, 17, 19, 25, 30]));

let testArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
let testArray2 = [105, 79, 100, 110];

function mergeSort(array) {
  if (array.length > 1) {
    const leftArray = array.slice(0, array.length / 2);
    const rightArray = array.slice(array.length / 2, array.length);
    const leftMergedArray = mergeSort(leftArray);
    const rightMergedArray = mergeSort(rightArray);
    return merge(leftMergedArray, rightMergedArray);
  } else {
    return array;
  }
}

console.log(mergeSort(textArray1));
console.log(mergeSort(textArray2));
