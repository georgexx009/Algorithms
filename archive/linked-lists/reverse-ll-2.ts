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

/*
  Iterate over the list once
  there are 2 options:
    1- is outside the window
      here we create the list
    2- is inside the window
      1- before the window
      2- after the window

  Create the reversed list:
    create a new node that points to the head of the reversed list (first time is null)
    then this new node (list) is going to be our reversed tail
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let pointer = 1
  let reverseLeftNode: ListNode | null = null
  let reverseTail: ListNode | null = null
  let reversed: ListNode | null = null
  let node = head

  while (node) {
    // inside the window
    if (pointer >= left && pointer <= right) {

      // create the reversed list
      const newReverse: ListNode = new ListNode(node.val, reversed)
      reversed = newReverse

      // save the tail to connect it when the window ends
      if (!reverseTail) {
        reverseTail = reversed
      }
    }
    // outside the window or is the last node so we need to connect reversed list
    if (pointer < left || pointer > right || !node.next) {

      // save the node before the window starts
      if (!reverseTail) {
        reverseLeftNode = node
      }

      // the window has ended - connect the reversed list
      if (reverseTail && reversed && !reverseTail.next) {

        // connect left side
        // special - the window starts at first position
        if (!reverseLeftNode) {
          head = reversed
        } else { // normal - connect last node before window starts to the reversed list head
          reverseLeftNode.next = reversed
        }

        // connect right side
        // since is possible to reach here if the right is the last element
        // check if it is the first node after the window ended
        if (pointer - 1 === right) {
          reverseTail.next = node
        }
      }
    }

    // check if we are over with the window, then the connection happened and we no need more iteration
    if (pointer > right) break;

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
