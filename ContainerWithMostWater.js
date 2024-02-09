var maxArea = function (height) {
  let maxi = 0, i = 0, j = height.length - 1;

  // concept is simply to find out the taller pillers farther to maximize the area
  while (i < j) {
    maxi = Math.max(maxi, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return maxi;
};

// test fo code
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));