var findMedianSortedArrays = function(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
  }
  
  const len1 = nums1.length;
  const len2 = nums2.length;
  let left = 0;
  let right = len1;
  
  // applying partitioning technique to minimize timeComplexity
  while (left <= right) {
      const partition1 = Math.floor((left + right) / 2);
      const partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;

      const maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : Number.NEGATIVE_INFINITY;
      const maxLeft2 = partition2 > 0 ? nums2[partition2 - 1] : Number.NEGATIVE_INFINITY;
      const maxLeft = Math.max(maxLeft1, maxLeft2);

      const minRight1 = partition1 < len1 ? nums1[partition1] : Number.POSITIVE_INFINITY;
      const minRight2 = partition2 < len2 ? nums2[partition2] : Number.POSITIVE_INFINITY;
      const minRight = Math.min(minRight1, minRight2);

      if (maxLeft <= minRight) {
          if ((len1 + len2) % 2 === 0) {
              return (maxLeft + minRight) / 2;
          }
          else {
              return maxLeft;
          }
      } else if (maxLeft1 > minRight2) {
          right = partition1 - 1;
      } else {
          left = partition1 + 1;
      }
  }    
};

// testing code
const nums1 = [1,2];
const nums2 = [3,4];
console.log(findMedianSortedArrays(nums1,nums2));


