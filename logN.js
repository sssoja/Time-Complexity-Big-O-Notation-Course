let arr = [];

let startIndex = 0;

let target = 100000;

for (let i = 1; i <= 1024; i++) {
  arr.push(i);
}

let endIndex = arr.length - 1;

function binarySearch(arr, startIndex, endIndex, target) {
  //   console.log(arr.slice(startIndex, endIndex));

  if (startIndex > endIndex) return false;

  let midIndex = Math.floor((startIndex + endIndex) / 2);

  if (arr[midIndex] === target) return true;

  // target is on left side of array
  if (arr[midIndex] > target)
    return binarySearch(arr, startIndex, midIndex - 1, target);
  // target is on right side of array
  else return binarySearch(arr, midIndex + 1, endIndex, target);
}

binarySearch(arr, startIndex, endIndex, target);
