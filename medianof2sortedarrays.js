var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => {
      if (a < b) {
          return -1;
      }
      if (a > b) {
          return 1;
      }
      return 0;
  });
  const arrayMiddle = mergedArray.length/2;
  if (arrayMiddle % 1 === 0) {
      const middle1 = mergedArray[Math.floor(arrayMiddle) - 1];
      const middle2 = mergedArray[Math.floor(arrayMiddle)];
      return (middle1 + middle2) / 2
  } else {
      return mergedArray[Math.floor(arrayMiddle)]
  }
};