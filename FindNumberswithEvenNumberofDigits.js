const findNumOfDigits = (number) => {
  let numOfDigits = 0;

  while (number >= 1) {
    number = Math.floor(number / 10);
    numOfDigits++;
  }

  return numOfDigits;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  if (!nums.length) return 0;

  let evenDigitCount = 0;

  for (let num of nums) {
    const numOfDigits = findNumOfDigits(num);
    if (numOfDigits % 2 === 0) evenDigitCount++;
  }

  return evenDigitCount;
};
