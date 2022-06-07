/*
  Given an array nums of n integers where n > 1,
  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]

  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]
*/

var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i=nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (var j=0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};
