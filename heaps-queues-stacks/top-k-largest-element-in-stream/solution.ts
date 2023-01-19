function getParentIdx(idx: number) {
  return idx === 0 ? 0 : (idx - 1) >> 1
}

function getLeftChildIdx(idx: number) {
  return idx * 2 + 1
}

function getRightChildIdx(idx: number) {
  return idx * 2 + 2
}

function insertNode(heap: number[], map: Record<number, number>, newNumber: number) {
  heap.push(newNumber)

  let currentIdx = heap.length - 1
  let parentIdx = getParentIdx(currentIdx)

  while (currentIdx > parentIdx) {
    const currentFreq = map[heap[currentIdx]]
    const parentFreq = map[heap[parentIdx]]
    if (parentFreq > currentFreq) {
      const currentNum = heap[currentIdx]
      heap[currentIdx] = heap[parentIdx]
      heap[parentIdx] = currentNum
    }
    currentIdx = parentIdx
    parentIdx = getParentIdx(currentIdx)
  }
}

function removeRoot(heap: number[], map: Record<number, number>) {
  heap[0] = heap[heap.length - 1]
  heap.pop()

  let currentIdx = 0
  let smallerChildIdx = currentIdx

  while (getLeftChildIdx(currentIdx) < heap.length || getRightChildIdx(currentIdx) < heap.length) {
    const leftChildIdx = getLeftChildIdx(currentIdx)
    const rightChildIdx = getRightChildIdx(currentIdx)

    if (map[heap[leftChildIdx]] < map[heap[smallerChildIdx]]) {
      smallerChildIdx = leftChildIdx
    }

    if (rightChildIdx < heap.length && map[heap[rightChildIdx]] < map[heap[smallerChildIdx]]) {
      smallerChildIdx = rightChildIdx
    }

    if (smallerChildIdx === currentIdx) {
      break
    }

    const smallerChildNum = heap[smallerChildIdx]
    heap[smallerChildIdx] = heap[currentIdx]
    heap[currentIdx] = smallerChildNum

    currentIdx = smallerChildIdx
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {}
  for (let num of nums) {
    map[num] = map?.[num] ? map[num] + 1 : 1
  }

  const heap: number[] = []

  for (let [numStr, freq] of Object.entries(map)) {
    const num = parseInt(numStr)
    if (heap.length < k) {
      insertNode(heap, map, num)
      continue
    }

    if (map[heap[0]] < freq) {
      removeRoot(heap, map)
      insertNode(heap, map, num)
    }
  }
  console.log(map)
  return heap
}

function main() {
  console.log('expected 1,2')
  console.log(topKFrequent([1,1,1,2,2,3], 2))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('expected 1,3')
  console.log(topKFrequent([1,1,1,3,3,2,2,3], 2))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('expected [3,7,10]')
  console.log(topKFrequent([5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3], 3))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('expected [3,7,10]')
  console.log(topKFrequent([9,7,7,9,10,2,2,10,10,3,3,7,3,3], 3))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('called with [6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0] -- 6')
  console.log('expected [-3,-4,0,1,4,9]')
  console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('expected [3,5]')
  console.log('[5,2,5,3,5,3,1,1,3]')
  console.log(topKFrequent([5,2,5,3,5,3,1,1,3], 2))
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
}

main()
