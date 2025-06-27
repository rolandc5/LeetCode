// const twoSum = (numbers, target) => { //Approach is O(N^2)
//   let sum = 0;
//   let indexes = [0, 0];
//   let i1 = 0;
//   let i2 = 0
//   while (sum !== target) {
//     sum = numbers[i1] + numbers[i2];
//     console.log(sum);
//     if (sum === target) {
//       indexes = [i1 + 1, i2 + 1];
//     }
//     if (i2 === numbers.length) {
//       i1++;
//       i2 = 0;
//     } else {
//       i2++;
//     }
//   }
//   return indexes;
// }

// console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]


const twoSum = (numbers, target) => { //Approach is O(N^2)
  let sum = 0;
  let left = 0;
  let right = numbers.length - 1;
  let indexes = [];
  while (left < right) {
    console.log(left);
    sum = numbers[left] + numbers[right];
    if (sum !== target) {
      left++
      right--
    } else {
      indexes = [left + 1, right + 1];
    }
  }
  return indexes;
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]




