var twoSum = function(nums, target) {
  output = [];
  inputTarget = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let y = 1; y < nums.length; y++) {
          if (nums[i] + nums[y] === target && i !== y) {
              return [i, y]
          }
      }
  }
};