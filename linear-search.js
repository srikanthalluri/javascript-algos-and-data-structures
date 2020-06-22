const list = [1, 2, 45, 67, 3, 90, 55, 100, 675, 9];
const num = 67;
const linearSearch = (arr, item) => {
  for (const [index, value] of arr.entries()) {
    if (value === item) {
      return index;
    }
  }
  return -1;
};

console.log(linearSearch(list, num));

/* 
My Thinking Process:
---------------------
First i thought of using forEach() loop. But we can't break out of forEach() loop. Only way to break out is by throwing some exception. So went ahead with 'for of' loop of javascript.

I cound have used forEach() as shown below:

index = -1;
arr.forEach( (value, i) => {
    if (value === item) {
        index = i;
    }
});
return index;

But this way, even after finding the value in the array in the beginning or middle positions, we end up iterating till the end of the array, which leads to O(n) in best, average and worst case.
*/
