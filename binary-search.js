const list = [1, 2, 10, 15, 20, 57, 99, 101];
const no = 101;
// Binary Search without recursion
const binarySearch = (arr, item) => {
  let min = 0;
  max = arr.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (arr[guess] === item) {
      return guess;
    } else {
      if (arr[guess] <= item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
};
console.log(binarySearch(list, no));

// Binary Search using recursion.
// Implemented it using closures.
const binarySearchRecurssion = (arr) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;
  return (item) => {
    function recursive(min, max) {
      if (min > max) {
        return -1;
      }
      guess = Math.floor((min + max) / 2);
      if (arr[guess] === item) {
        return guess;
      } else {
        if (arr[guess] <= item) {
          return recursive(guess + 1, max);
        } else {
          return recursive(min, guess - 1);
        }
      }
    }
    return recursive(min, max);
  };
};

const searchItem = binarySearchRecurssion(list);
console.log(searchItem(no));
