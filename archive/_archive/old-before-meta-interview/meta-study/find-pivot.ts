function pivotIndex(nums: number[]): number {
  /*
      right = sum all numbers
      start pivot = 0
      if 0 === right
      left = + number
      right = right - number
  */
  
  let right = 0
  nums.forEach(num => { right = right + num })
  
  let pivot = -1
  let left = 0
  for(let idx = 0; idx < nums.length; idx++) {
      const num = nums[idx]
      right = right - num
      if (left === right) {
          pivot = idx
          break
      }
      left = left + num
  }
  
  return pivot
};