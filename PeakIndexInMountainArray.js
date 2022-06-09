var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // remember the slope concept
    // 'if condition' true here means our current mid is on the upward slope; so we update our left
    // 'else' means mid is either peak or is currently on the downward slope; so we update our right
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
