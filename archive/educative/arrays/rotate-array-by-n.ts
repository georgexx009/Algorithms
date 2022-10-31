/*
  3 possible solutions
  try to do it in-place (modify the input), O(1) constant extra space
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (k === 0) return

  let counter = 0
  for (const num of nums) {
    if (k > 0 && counter < k) {
      // move last to front
      nums.unshift(nums.pop() as number)
      counter++
    } else if (k < 0 && counter < (k * -1)) {
      // move front to last
      nums.push(nums.shift() as number)
      counter++
    }
  }
}

function rotateV2(nums: number[], k: number): void {
  if (k === 0) return

  let counter = 0
  while (counter < Math.abs(k)) {
    if (k > 0 && counter < k) {
      // move last to front
      nums.unshift(nums.pop() as number)
      counter++
    } else if (k < 0 && counter < (k * -1)) {
      // move front to last
      nums.push(nums.shift() as number)
      counter++
    }
  }
}

function rotateV3(nums: number[], k: number): void {
  if (k === 0) return

  k = k % nums.length
  let counter = 0
  while (counter < Math.abs(k)) {
    if (k > 0 && counter < k) {
      // move last to front
      nums.unshift(nums.pop() as number)
      counter++
    } else if (k < 0 && counter < (k * -1)) {
      // move front to last
      nums.push(nums.shift() as number)
      counter++
    }
  }
}

interface ITestCasesRotate {
  nums: number[]
  k: number
  expected: number[]
}

const testCasesRotate: ITestCasesRotate[] = [{
  nums: [1,2,3,4,5,6,7],
  k: 10,
  expected: [5,6,7,1,2,3,4]
}, {
  nums: [-1,-100,3,99],
  k: 2,
  expected: [3,99,-1,-100]
}, {
    nums: [1, 10, 20, 0, 59, 86, 32, 11, 9, 40],
    k: 2,
    expected: [9, 40, 1, 10, 20, 0, 59, 86, 32, 11]
}, {
  nums: [1, 10, 20, 0, 59, 86, 32, 11, 9, 40],
  k: -1,
  expected: [10, 20, 0, 59, 86, 32, 11, 9, 40, 1]
}, {
  nums: [1,2],
  k: 3,
  expected: [2,1]
}]

function runTestCasesRotate() {
  testCasesRotate.forEach(testCase => {
    console.log('nums: ', testCase.nums)
    console.log('k: ', testCase.k)
    rotateV3(testCase.nums, testCase.k)
    console.log('result: ', testCase.nums)
    console.log('expected: ', testCase.expected)
    console.log(JSON.stringify(testCase.nums) === JSON.stringify(testCase.expected) ? 'PASSED' : 'FAILED')
    console.log('------------------------------------------------------')
  })
}

runTestCasesRotate()
