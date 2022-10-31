// you have a total number, and an array of numbers

// hacker rank
// return an array with the indices of the numbers that sum the total

// leetcode
// or return the maximun number of numbers that can sum the total 


function maxNumsSelected(costs: number[], coins: number): number {
  // sub-problems:
  //  find which costs together equal coins
  //  find which group of costs that equal the coins has a higher length

  /*
    solution:
      sort array
      iterate
      if current element is lower than total required
      increment count
      subtract current num to total required

      because they are sorted, we will always have the maximum possible group
      because the maximum possible group should be donde by the lower ones
  */

  const orderedCosts = costs.sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < orderedCosts.length; i++) {
    if (orderedCosts[i] <= coins) {
      count++
      console.log(i)
      coins -= orderedCosts[i]
    } else {
      break
    }
  }

  return count
};

// the result array is 1-based indexing
// the result length is 2
function maxNumsSelectedV2(arr: number[], m: number): number[] {
  /*
    x + y = m
    y = m - x
  */

  // valueNumber: index
  const visited = new Map<number, number>()

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    // there is no reason if is equal cause we need another one and 0 does not exist
    if (num < m) {
      const remainNeed = m - num
      if (visited.has(remainNeed)) {
        return [visited.get(remainNeed) + 1, i + 1]
      }

      visited.set(num, i)
    }
  }
}

/*
Input: costs = [1,3,2,4,1], coins = 7
Output: 4

[1, 4, 5, 3, 2]
4
result = [1,4]

[2, 2,4, 3]
4
result = [1,2]
*/

console.log(maxNumsSelected([1,3,2,4,1], 7))