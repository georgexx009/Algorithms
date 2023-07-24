/*
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
  and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

interface IMergeIntervals {
  test: {
    input: number[][]
    expected: number[][]
  }
}

const solution: {
  tests: IMergeIntervals['test'][]
  runTests: () => void
} = {
  tests: [
    {
    input: [[1,3],[2,6],[8,10],[15,18]],
    expected: [[1,6],[8,10],[15,18]]
  }, {
    input: [[1,4],[4,5]],
    expected: [[1,5]]
  }, {
    input: [[1,5],[3,7],[4,6],[6,8]],
    expected: [[1,8]]
  }, {
    input: [[10,12], [12,15]],
    expected: [[10, 15]]
  }, {
    input: [[10,12]],
    expected: [[10, 12]]
  }, {
    input: [[1,4],[0,4]],
    expected: [[0,4]]
  }, {
    input: [[2,4],[4,7], [1,8]],
    expected: [[1,8]]
  }, {
    input: [[1,10], [2, 4], [6,8]],
    expected: [[1, 10]]
  }, {
    input: [[1,4],[0,0]],
    expected: [[0,0],[1,4]]
  }, {
    input: [[1,4],[0,1]],
    expected: [[0,4]]
  }, {
    input: [[0,1],[1,4]],
    expected: [[0,4]]
  }, {
    input: [],
    expected: []
  }],
  runTests: function() {
    this.tests.forEach(test => {
      const result = mergeV2(test.input);
      console.log('input: ', test.input)
      console.log('expected: ', test.expected)
      console.log('result: ', result)
      console.log(JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASSED' : 'FAILED')
      console.log('--------------------------------------------------------')
    })
  }
}

// order doesn't matter
function merge(intervals: number[][]): number[][] {
  // iterate to see each interval
  // create a working interval = prev interval
  // if second from prev interval >= first from new interval
  //    in prev internal (working internal) -> replace second with second from new interval
  // else ->
  //    working interval is stop and saved
  //    working interval now is the new interval

  if (intervals.length === 0) return []
  const sortedIntervals = intervals.sort(function(a, b){return a[0]-b[0]})

  const mergedIntervals: number[][] = []
  // IMPROVEMENT - instead of use this, you could use the last internal from mergedIntervals
  let workingInterval: number[] = [] // the interval that is currently consuming other intervals

  // main iteration
  for (const interval of sortedIntervals) {
    // first step - default start step
    if (workingInterval.length === 0) {
      workingInterval = [...interval]
      continue
    }

    // clean merge, [0,2] + [1,3] -> [0,3]
    if (workingInterval[1] >= interval[0] && workingInterval[1] < interval[1]) {
      workingInterval[1] = interval[1]
      // the next interval is out of range [0,1] + [2,3]
    } else if (workingInterval[1] < interval[0]) {
      mergedIntervals.push(workingInterval) // save
      workingInterval = [...interval] // select new one
    }
  }

  return [...mergedIntervals, workingInterval]
}

function mergeV2(intervals: number[][]): number[][] {
  let startNewInterval: null | number = null
  const newArr: number[][] = []
  let higherRight = -1

  if (intervals.length === 0) return []
  const sortedIntervals = intervals.sort(function(a, b){return a[0]-b[0]})

  for (let i of sortedIntervals) {
    if (higherRight >= i[0] && higherRight < i[1]) {
      if (startNewInterval === null) continue
      newArr.push([startNewInterval, i[1]])
      higherRight = -1
      startNewInterval = null
    }
    else if (higherRight >= i[1]) {
      continue
    }
    else if (higherRight && startNewInterval) {
      newArr.push([startNewInterval, i[1]])
      higherRight = -1
      startNewInterval = null
    }
    else {
      higherRight = i[1]
      startNewInterval = i[0]
    }
  }
  return newArr
}

solution.runTests()


