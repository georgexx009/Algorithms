function getMiddleIndex(array: number[], startIdx: number, endIdx: number): number {
  return (Math.round(((endIdx + 1) - startIdx) / 2) - 1) + startIdx
}

function searchRange(nums: number[], target: number): number[] {
  let startIdx = 0
  let endIdx = nums.length - 1 // 0
  let foundIdx: number | null = null

  while (startIdx <= endIdx) {
    const middleIdx = getMiddleIndex(nums, startIdx, endIdx) // 0
    const middleVal = nums[middleIdx] //

    if (middleVal === target) {
      // call search around
      foundIdx = middleIdx
      break
    }

    if (target < middleVal) {
      // go left
      endIdx = middleIdx - 1
    }

    if (middleVal < target) {
      // go right
      startIdx = middleIdx + 1
    }
  }

  if (foundIdx === null) return [-1,-1]

  let leftIterationIdx = foundIdx
  let rightIterationIdx = foundIdx
  let rightFlag = true
  let leftFlag = true

  while (rightFlag || leftFlag) {
    if (nums[leftIterationIdx - 1] === target) {
      leftIterationIdx--
    } else {
      leftFlag = false
    }
    if (nums[rightIterationIdx + 1] === target) {
      rightIterationIdx++
    } else {
      rightFlag = false
    }
  }

  return [leftIterationIdx, rightIterationIdx]
}

function searchRangeDoubleBinarySearch(nums: number[], target: number): number[] {
  let startIdx = 0
  let endIdx = nums.length - 1

  // search low
  let low = -1
  while (startIdx <= endIdx) {
    const middleIdx = Math.floor(((endIdx + 1) - startIdx) / 2) + startIdx
    const middleVal = nums[middleIdx]
    if (target == middleVal && nums[middleIdx - 1] !== target) {
      low = middleIdx
      break
    }

    if (target <= middleVal) {
      endIdx = middleIdx - 1
      continue
    }

    startIdx = middleIdx + 1
  }

  // search high
  startIdx = 0
  endIdx = nums.length - 1
  let high = -1
  while (startIdx <= endIdx) {
    const middleIdx = Math.floor(((endIdx + 1) - startIdx) / 2) + startIdx
    const middleVal = nums[middleIdx]
    if (target == middleVal && nums[middleIdx + 1] !== target) {
      high = middleIdx
      break
    }

    if (target >= middleVal) {
      startIdx = middleIdx + 1
      continue
    }

    endIdx = middleIdx - 1
  }

  return [low, high]
}

interface Test {
  nums: number[],
  target: number,
  expected: number[]
}

const searchRangeSortedArrayTests: Test[] = [{
  nums: [5,7,7,8,8,10], // length 6
  target: 8,
  expected: [3,4]
}, {
  nums: [5,7,7,8,8,10],
  target: 6,
  expected: [-1,-1]
}, {
  nums: [],
  target: 6,
  expected: [-1,-1]
}, {
  nums: [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6],
  target: 5,
  expected: [15, 17]
}, {
  nums: [1],
  target: 1,
  expected: [0,0]
}, {
  nums: [2,2],
  target: 2,
  expected: [0,1]
}]

function runSearchRangeSortedArrayTests<T>(tests: Test[], functionToTest: (nums: number[], target: number) => number[]) {
  tests.forEach(test => {
    const result = functionToTest(test.nums, test.target)
    console.log('nums: ', test.nums)
    console.log('nums length: ', test.nums.length)
    console.log('target: ', test.target)
    console.log('result: ', result)
    console.log('expected: ', test.expected)
    console.log(JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASSED' : 'FAILED')
    console.log('------------------------------------------------------')
  })
}

runSearchRangeSortedArrayTests(searchRangeSortedArrayTests, searchRangeDoubleBinarySearch)
