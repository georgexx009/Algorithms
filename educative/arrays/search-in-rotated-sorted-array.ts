/*
https://leetcode.com/problems/search-in-rotated-sorted-array/
  runtime complexity: O(log n)
  binary search is log n
*/

// FIRST VERSION
function search(nums: number[], target: number): number {
  let rightEdge = nums.length - 1 // 11
  let leftEdge = 0 // 8

  while (true) {
    const middle = (Math.round(((rightEdge + 1) - leftEdge) / 2) - 1) + leftEdge
    if (nums[middle] === target) return middle

    const right = middle + 1
    const left = middle - 1

    if (!nums[left] && !nums[right]) return -1
    if (nums[left] === target) return left
    if (nums[right] === target) return right

    const farLeft = leftEdge
    const farRight = rightEdge
    if (nums[farLeft] === target) return farLeft
    if (nums[farRight] === target) return farRight

    // normal
    if (nums[right] < nums[farRight] && (nums[right] < target && target < nums[farRight])) {
      leftEdge = right + 1
      rightEdge = farRight - 1

      // start < mid && start < T < mid
    } else if (nums[farLeft] < nums[left] && (nums[farLeft] < target && target < nums[left])) {
      leftEdge = farLeft + 1
      rightEdge = left - 1
    // with rotation
    } else if (target < nums[farRight]) {
      leftEdge = right + 1
      rightEdge = farRight - 1
    } else if (nums[farLeft] < target) {
      leftEdge = farLeft + 1
      rightEdge = left - 1
    }
    else {
      return -1
    }
  }

  return -1
};

interface ITest {
  nums: number[]
  target: number
  expected: number
}

const searchInRotatedSortedArrayTests: ITest[] = [
  {
    nums: [4,5,6,7,0,1,2],
    target: 0,
    expected: 4
  },
  {
    nums: [4,5,6,7,0,1,2],
    target: 3,
    expected: -1
  },
  {
    nums: [1],
    target: 0,
    expected: -1
  },
  {
    nums: [8,9,10,11,12,0,1,2,3,4,5,6,7],
    target: 11,
    expected: 3
  },
  {
    nums: [8,9,10,11,12,0,1,2,3,4,5,6,7],
    target: 13,
    expected: -1
  },
  {
    nums: [6, 7, 1, 2, 3, 4, 5],
    target: 3,
    expected: 4
  }
]

function runSearchInRotatedSortedArrayTests<T>(tests: ITest[], functionToTest: (nums: number[], target: number) => number) {
  tests.forEach(test => {
    const result = functionToTest(test.nums, test.target)
    console.log('nums: ', test.nums)
    console.log('target: ', test.target)
    console.log('result: ', result)
    console.log('expected: ', test.expected)
    console.log(result === test.expected ? 'PASSED' : 'FAILED')
    console.log('------------------------------------------------------')
  })
}

runSearchInRotatedSortedArrayTests(searchInRotatedSortedArrayTests, search)
