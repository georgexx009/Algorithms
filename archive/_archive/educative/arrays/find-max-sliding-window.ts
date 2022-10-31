/*
  Find Maximum in Sliding Window
  Hard
  runtime complexity - linear O(n)
  memory complexity - linear O(w) w=window size
  educative: https://www.educative.io/module/lesson/data-structures-in-javascript/gxnlB9N5MR9
  leedCode: https://leetcode.com/problems/sliding-window-maximum/

  data structure:
    deque: double-ended queue
      pop and push operations works in O(1) at both ends
      front[]back


  my summary:
    first element pushed to front of deque


  Possible overal solution
    we put them at the back like making a queue to reach the max
    But if
    out of window scope, loose the opportunity
    or
    the current is higher than them (the ones in the scope),
    then they are irrelevant cause won't reach max no matter what,
    because this new one is higher and in a far position (will live more)
*/

function findMax(arr: number[], window: number): number[] {
  const result: number[] = []
  // saves the indices
  // decreasing order
  // the front contains the maximum value "in that particular window"
  const deque: number[] = []

  const getBackFromDeque = (): number => {
    return arr[deque[deque.length - 1]]
  }
  
  // get the max from the first window position
  for (let i = 0; i < window; i++) {
    // what we acomplish poping lower values?
    // until find a higher value in the back deque
    while (deque.length > 0 && arr[i] >= getBackFromDeque()) { // why >= and not >
      deque.pop()
    }
    deque.push(i)
  }

  // save the max from the first window position
  result.push(arr[deque[0]])

  for (let i = window; i < arr.length; i++) {
    // remove from the deque back all smaller numbers than the current
    while (deque.length > 0 && arr[i] >= getBackFromDeque()) {
      deque.pop()
    }

    if (deque.length > 0 && (deque[0] <= i - window)) {
      deque.shift()
    }

    deque.push(i)
    result.push(arr[deque[0]])
  }

  return result
}

const test1 = {
  name: 'test1',
  arr: [-4,2,-5,1,-1,6],
  window: 3
}

const test2 = {
  name: 'test2',
  arr: [2,-1,-2,1,4,2],
  window: 3
}

const test3 = {
  name: 'test3',
  arr: [-2,-1,2,1,4,2],
  window: 3
}

const test4 = {
  name: 'test4',
  arr: [4,3,-2,1,-5,7],
  window: 4
}

const test5 = {
  name: 'test5',
  arr: [4,3,-2,1,-5,7],
  window: 3
}

function runFindMax(tests: { arr: number[], window: number, name: string }[], algorithm: (arr: number[], window: number) => number[], runName: string) {
  console.log(runName)
  console.log('------------------------------------------------------')
  tests.forEach(test => {
    console.log(test.name)
    console.log('array: ', test.arr)
    console.log('window: ', test.window)
    console.log('result: ', algorithm(test.arr, test.window))
    console.log('------------------------------------------------------')
  })
}
const tests = [test1, test2, test3, test4, test5]
runFindMax(tests, findMax, 'working algorithm')