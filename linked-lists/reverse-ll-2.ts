// Given the head of a singly linked list
// and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right,
// and return the reversed list.
// https://leetcode.com/problems/reverse-linked-list-ii/

import { createLinkedListFromArray, stringifyLinkedList } from './utils'
import { ListNode } from './list-node'

interface ITestReverseLL2 {
  input: {
    ll: number[]
    left: number
    right: number
  }
  expected: string
}

const reverseList2Tests: ITestReverseLL2[] = [{
  input: {
    ll: [1,2,3,4,5],
    left: 2,
    right: 4
  },
  expected: 'head [1,4,3,2,5] tail'
}, {
  input: {
    ll: [1,2,3,4,5],
    left: 1,
    right: 3
  },
  expected: 'head [3,2,1,4,5] tail'
}, {
  input: {
    ll: [1,2,3,4,5],
    left: 3,
    right: 5
  },
  expected: 'head [1,2,5,4,3] tail'
}]

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let pointer = 1
  let reverseLeftNode: ListNode | null = null
  let reverseTail: ListNode | null = null
  let reversed: ListNode | null = null
  let node = head

  while (node) {
    if (pointer >= left && pointer <= right) {
      const newReverse: ListNode = new ListNode(node.val, reversed)
      reversed = newReverse
      if (!reverseTail) {
        reverseTail = reversed
      }
    }
    if (pointer < left || pointer > right || !node.next) {
      if (!reverseTail) {
        reverseLeftNode = node
      }
      if (reverseTail && reversed && !reverseTail.next) {
        if (!reverseLeftNode) {
          head = reversed
        } else {
          reverseLeftNode.next = reversed
        }

        if (node.next || pointer - 1 === right) {
          reverseTail.next = node
        }
      }
    }

    pointer++
    node = node.next
  }

  return head
};

const runReverseLists2Tests = () => {
  reverseList2Tests.forEach(test => {
    const headToTest = createLinkedListFromArray(test.input.ll)
    const headReversedList = reverseBetween(headToTest, test.input.left, test.input.right)
    const strResult = stringifyLinkedList(headReversedList)
    console.log('linked list - ', test.input.ll)
    console.log('left - ', test.input.left)
    console.log('right - ', test.input.right)
    console.log('expected - ', test.expected)
    console.log('result - ', strResult)
    console.log(strResult === test.expected ? 'PASSED' : 'FAILED')
    console.log('--------------------------------------------------------')
  })
}

runReverseLists2Tests()
