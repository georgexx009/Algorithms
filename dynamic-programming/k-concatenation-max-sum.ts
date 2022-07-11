// https://leetcode.com/problems/k-concatenation-maximum-sum/

function kConcatenationMaxSum(arr: number[], k: number): number {
  // [-5, -2,  0, 0, 3, 9, -2, -5, 4]
  // literally the number from the middle in the whole subarray equal 20
  //
  let counter = 1
  let maxSum = 0
  let subArraySum = 0
  let subArrayIterating = true
  while (counter <= k) {
    for (let num of arr) {
      if (num >= 0) { // positive number
        subArraySum = subArraySum + num
        subArrayIterating = true
      } else { // negative number
        if (subArrayIterating) { // subarray finish
          if (subArraySum > maxSum) {
            maxSum = subArraySum
          }
          subArraySum = 0
        }
        subArrayIterating = false
      }
    }
    counter++
  }
  if (subArraySum > maxSum) {
    maxSum = subArraySum
  }
  return maxSum
}

function kConcatenationMaxSum2(arr: number[], k: number): number {
  let counter = 1
  let maxSum: number[] = []
  let subArraySum = 0
  while (counter <= k) {
    for (let num of arr) {
      subArraySum = subArraySum + num
      if (subArraySum > maxSum) {
        maxSum = subArraySum
      } else {
        subArraySum = 0
      }
    }
    counter++
  }
  if (subArraySum > maxSum) {
    maxSum = subArraySum
  }
  return maxSum
}

interface IkConcatenationMaxSumTests {
  input: {
    arr: number[]
    k: number
  }
  expected: number
}

const kConcatenationMaxSumTests: IkConcatenationMaxSumTests[] = [
  {
    input: {
      arr: [1,2],
      k: 3
    },
    expected: 9
  },{
    input: {
      arr: [1,-2,1],
      k: 5
    },
    expected: 2
  }, {
    input: {
      arr: [-1,-2],
      k: 7
    },
    expected: 0
  }, {
    input: {
      arr: [-1,-2, 1],
      k: 3
    },
    expected: 1
  },  {
    input: {
      arr: [1,0,4,1,4],
      k: 4
    },
    expected: 40
  },  {
    input: {
      arr: [-5,-2,0,0,3,9,-2,-5,4],
      k: 5
    },
    expected: 20
  }
]

function runKConcatenationMaxSumTests(tests: IkConcatenationMaxSumTests[]) {
  tests.forEach(test => {
    const result = kConcatenationMaxSum2(test.input.arr, test.input.k)
    console.log('arr: ', test.input.arr)
    console.log('k: ', test.input.k)
    console.log('expected: ', test.expected)
    console.log('result: ', result)
    console.log(JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASSED' : 'FAILED')
    console.log('--------------------------------------------------------')
  })
}

runKConcatenationMaxSumTests(kConcatenationMaxSumTests)
