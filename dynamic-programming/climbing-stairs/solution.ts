const memoization = {}
function climbStairs(n: number): number {
  
  if (n === 1 || n === 2) {
    return n
  }    

  if (memoization[n]) {
    return memoization[n]
  }

  const res = climbStairs(n - 1) + climbStairs(n - 2)
  memoization[n] = res

  return res
}

const result = climbStairs(44)
console.log('result correct: ', result === 701408733, ' - ', result)