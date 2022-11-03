import { ListNode } from '../../archive/_archive/linked-lists/list-node'
import { createLinkedListWithCycleFromArray } from '../../archive/_archive/linked-lists/utils'
import { longLinkedList } from '../../archive/repeat/linked-list/long-linked-list'

// constant memory
// do not modify the linked list

// one option was to use a set but wont be constant memory

// findCycle - returns matched node (slow and fast pointer), if no cycle found, return null
function findCycle(startNode: ListNode): ListNode | null {
  let slowPointer: ListNode | null = startNode
  let fastPointer: ListNode | null = startNode

  let isSlowMoving = false
  while (fastPointer) {
    fastPointer = fastPointer!.next
    if (isSlowMoving) {
      slowPointer = slowPointer!.next

      // moves completed - slow 1 and fast 2
      if (fastPointer?.val === slowPointer?.val) return fastPointer
    }
    isSlowMoving = !isSlowMoving
  }

  return null
}

function getCycleLength(cycleNodeMatched: ListNode): number {
  let counter = 0
  const startVal = cycleNodeMatched.val
  let currentNode = cycleNodeMatched.next
  while (currentNode) {
    counter++
    if (currentNode.val === startVal) break
    currentNode = currentNode.next
  }
  return counter - 1 // because we count until it matches
}

function getCycleStart(head: ListNode, cycleLength: number): ListNode {
  let currentNode: ListNode | null = head
  let startNode: ListNode | null = head
  let endNode: ListNode | null = head
  let counter = 0

  // get the window with startNode and endNode
  while (currentNode && cycleLength !== 0) {
    currentNode = currentNode!.next
    endNode = currentNode!
    counter++

    if (counter === cycleLength) break
  }

  counter = 0
  while (startNode!.val !== endNode!.next!.val) {
    startNode = startNode!.next
    endNode = endNode!.next
    counter++
  }
  console.log('result - cycle start idx: ', counter)
  return startNode!
}

function detectCycleV1(head: ListNode | null): ListNode | null {
  if (!head) return head

  const matchedNode = findCycle(head)
  if (!matchedNode) return matchedNode

  const cycleLength = getCycleLength(matchedNode)
  console.log('cycleLength: ', cycleLength)
  return getCycleStart(head, cycleLength)
}

function detectCycleV3(head: ListNode | null): ListNode | null {
  // @ts-ignore
  const nodeSet = new Set<ListNode>()
  while(head !== null) {
    if (nodeSet.has(head)) {
      return head;
    }
    nodeSet.add(head)
    head = head.next
  }
  return null
}

function detectCycleV2(head: ListNode | null): ListNode | null {
  // @ts-ignore
  const nodeMap = new Map<ListNode, number>()
  while(head !== null) {
    if (nodeMap.has(head)) {
      return head;
    }
    nodeMap.set(head, 0)
    head = head.next
  }
  return null
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow?.next ?? null
    fast = fast.next.next
    if (slow!.val === fast!.val) break
  }
  if (!fast?.next) return null
  while (head!.val !== slow!.val) {
    head = head!.next
    slow = slow!.next
  }
  return head
}

interface ILinkedListCycle2 {
  tests: {
    input: {
      linkedListArr: number[]
      cycleStart: number
    }
    expected: number | null
  }[]
  runTests: () => void
}

const linkedListCycle2: ILinkedListCycle2 = {
  tests: [
    {
      input: {
        linkedListArr: [3,2,0,-4],
        cycleStart: 1
      },
      expected: 2
    },
    {
      input: {
        linkedListArr: [1,2],
        cycleStart: 0
      },
      expected: 1
    },
    {
      input: {
        linkedListArr: [1],
        cycleStart: -1
      },
      expected: null
    },
    {
      input: {
        linkedListArr: [1,2,3,4],
        cycleStart: 3
      },
      expected: 4
    },
    {
      input: {
        linkedListArr: [1],
        cycleStart: 0
      },
      expected: 1
    },
    {
      input: {
        linkedListArr: longLinkedList,
        cycleStart: 5902
      },
      expected: -4540
    }
  ],
  runTests: function () {
    this.tests.forEach(test => {
      const head = createLinkedListWithCycleFromArray(test.input.linkedListArr, test.input.cycleStart);
      const resultNode = detectCycle(head)
      const result = resultNode?.val ?? null
      console.log('input - linked list length: ', test.input.linkedListArr.length);
      // console.log('input - linked list: ', stringifyLinkedListWithCycle(head, test.input.cycleStart));
      console.log('input - cycle start idx: ', test.input.cycleStart)
      console.log('expected val: ', test.expected)
      console.log('result val: ', result)
      console.log(result === test.expected ? 'PASSED' : 'FAILED')
      console.log('--------------------------------------------------------')
    })
  }
}

linkedListCycle2.runTests()
