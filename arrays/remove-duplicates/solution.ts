// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// [0,1,0,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

function removeDuplicates(nums: number[]): number {
  let cleanedArrTail = 0
  const visitedNums = new Set()
  visitedNums.add(nums[0])
  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i]
    const tailNum = nums[cleanedArrTail]
    if (!visitedNums.has(currentNum) && tailNum < currentNum) {
      cleanedArrTail++
      nums[cleanedArrTail] = currentNum
      visitedNums.add(currentNum)
    }
  }
  return cleanedArrTail + 1
}

const nums = [1,0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))
console.log(nums)
