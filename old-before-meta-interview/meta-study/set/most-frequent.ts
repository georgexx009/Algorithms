// ts-nocheck
// given an array of numbers and a K number, return the K most frequents
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
const arr1 = [1,1,1,2,2,3,3,3,2] // 1,2
const k1 = 3

function getHigherElements(list: Set<number>[], resultLength: number): number[] {
  let result: number[] = []

  while (result.length < resultLength) {
    const possibleSet = list.pop()
    if (!possibleSet || possibleSet.size === 0) continue

    const set = [...possibleSet]
    result.push(set.pop() as number)
    if (set.length > 0) {
      list.push(new Set(set))
    }
  }

  return result
} 

function getFrequency(nums: number[]): {[key: number]: number} {
  return nums.reduce((frequency, num) => {
    return {
      ...frequency,
      [num]: (num in frequency ? frequency[num] : 0) + 1
    }
  },{} as {[key: number]: number})
}

function getFrequencyV1(nums: number[]): {[key: number]: number} {
  let frequency: {[key: number]: number} = {}
  nums.forEach(num => {
    frequency[num] = (num in frequency ? frequency[num] : 0) + 1
  })

  return frequency
}

function findMostFrequents(nums: number[], k: number) {
  const frequency: {[key: number]: number} = getFrequency(nums)

  let list: Set<number>[] = []
  Object.entries(frequency).forEach(([num, numberFrequency]) => {
    list[numberFrequency] = (list[numberFrequency] || new Set()).add(parseInt(num))
  })

  return getHigherElements(list, k)
}

console.log(findMostFrequents(arr1, k1))