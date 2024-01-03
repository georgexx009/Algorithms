function maxSubArray(nums: number[]): number {
  let higherSum = nums[0];
  for(let i = 1; i < nums.length; i++) {
    const newSum = nums[i] + nums[i-1]
    if (newSum > nums[i]) {
      nums[i] = newSum
    }

    if (higherSum < nums[i]) {
      higherSum = nums[i]
    }
  }    

  return higherSum
}

const arr1 = [-2,1,-3,4,-1,2,1,-5,4]
const result = maxSubArray(arr1)
console.log(arr1, ' - result should be 6 - ', result)
console.log(maxSubArray([5,4,-1,7,8]))
