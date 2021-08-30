// the fn as a whole is O(n log n)

// the mergeSort fn is O(log n) because it's recursive
function mergeSort(arr) {
  // check for naturally sorted arrays of length 1
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// the merge fn is O(n) because it needs to touch every element in both arrays to sort them
function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let arr = [12, 3, 16, 6, 5, 1];

console.log(mergeSort(arr));
