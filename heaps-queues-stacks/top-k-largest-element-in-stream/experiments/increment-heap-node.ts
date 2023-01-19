type NumMap = Record<number, { posIdx: number | null, freq: number }>

function getParentIdx(idx: number) {
  return idx === 0 ? 0 : (idx - 1) >> 1
}

function getLeftChild(idx: number) {
  return idx * 2 + 1
}

function getRightChild(idx: number) {
  return idx * 2 + 2
}

function balanceUpHeap(heap: number[], map: NumMap, positionStart: number) {
  let currentIdx = positionStart
  let parentIdx = getParentIdx(currentIdx)

  while (currentIdx > 0 && parentIdx > 0 && parentIdx !== currentIdx) {
    const currentFreq = map[heap[currentIdx]].freq
    const parentFreq = map[heap[parentIdx]].freq
    if (currentFreq < parentFreq) {
      const currentNum = heap[currentIdx]
      const parentNum = heap[parentIdx]

      heap[currentIdx] = parentNum
      heap[parentIdx] = currentNum

      map[currentNum] = { ...map[currentNum], posIdx: parentIdx }
      map[parentNum] = { ...map[parentNum], posIdx: currentIdx }

      currentIdx = parentIdx
      parentIdx = getParentIdx(currentIdx)
    } else {
      break
    }
  }
}

function balanceDownHeap(heap: number[], map: NumMap, positionStart: number) {
  let currentIdx = positionStart
  while (getLeftChild(currentIdx) < heap.length || getRightChild(currentIdx) < heap.length) {
    let smallestIdx = currentIdx

    const leftChildIdx = getLeftChild(currentIdx)
    const rightChildIdx = getRightChild(currentIdx)

    if (map[heap[leftChildIdx]].freq < map[heap[smallestIdx]].freq) {
      smallestIdx = leftChildIdx
    }
    if (rightChildIdx && map?.[heap[rightChildIdx]] !== undefined && map[heap[rightChildIdx]].freq < map[heap[smallestIdx]].freq) {
      smallestIdx = rightChildIdx
    }

    if (smallestIdx === currentIdx) {
      break
    }

    const currentNum = heap[currentIdx]
    const smallestNum = heap[smallestIdx]
    heap[currentIdx] = smallestNum
    heap[smallestIdx] = currentNum
    map[currentNum].posIdx = smallestIdx
    map[smallestNum].posIdx = currentIdx

    currentIdx = smallestIdx
  }
}

function deleteRoot(heap: number[], map: NumMap) {
  const newRoot = heap[heap.length - 1]
  const toRemove = heap[0]
  heap[0] = newRoot
  map[newRoot].posIdx = 0
  heap[heap.length - 1] = toRemove

  const removedNum = heap.pop()!
  map[removedNum].posIdx = null

 balanceDownHeap(heap, map, 0)
}

function insertNode(newNum: number, heap: number[], map: NumMap) {
  heap.push(newNum)
  map[newNum].posIdx = heap.length - 1
  balanceUpHeap(heap, map, heap.length - 1)
}

function topKFrequent(nums: number[], k: number): number[] {
  // min-heap of nums
  const heap: number[] = []
  // number, {position, frequency}
  const map: NumMap = {};

  for (let num of nums) {
    // initializing heap
    if (heap.length < k) {
      if (map[num]) { // increment in current position - heapify down
        map[num].freq++
        balanceDownHeap(heap, map, map[num].posIdx!)
      } else { // insert new - insert last position -> heapify up
        heap.push(num)
        map[num] = { freq: 1, posIdx: heap.length - 1 }
        balanceUpHeap(heap, map, heap.length - 1)
      }
      continue
    }

    if (map?.[num] === undefined) {
      map[num] = { freq: 1, posIdx: null }
      continue
    }

    if (map?.[num] !== undefined) {
      map[num].freq++

      const rootNumberInHeap = heap[0]
      const rootNumberFreq = map[rootNumberInHeap].freq
      if (map[num].posIdx === null && rootNumberFreq < map[num].freq) {
        deleteRoot(heap, map)
        insertNode(num, heap, map)
        continue
      }

      if (map[num].posIdx !== null) {
        balanceDownHeap(heap, map, map[num].posIdx!)
      }
    }
  }
  return heap.slice(0,k)
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
