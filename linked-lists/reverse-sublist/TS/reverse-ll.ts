// leedcode: https://leetcode.com/problems/reverse-linked-list/

import { ListNode } from './list-node'
import { createLinkedListFromArray, stringifyLinkedList } from './utils'

export interface ITest {
  input: number[]
  expected: string
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let node: ListNode | null = head
  let reversedHead = null

  while (node) {
    const newReverse: ListNode = new ListNode(node.val, reversedHead)
    reversedHead = newReverse
    
    node = node.next
  }

  return reversedHead
}

const reverseListTests: ITest[] = [{
  input: [1,2,3,4,5],
  expected: 'head [5,4,3,2,1] tail'
}, {
  input: [1,2,3],
  expected: 'head [3,2,1] tail'
}, {
  input: [],
  expected: 'head [] tail'
}]

const runReverseListTests = () => {
  reverseListTests.forEach(test => {
    const headToTest = createLinkedListFromArray(test.input)
    const headReversedList = reverseList(headToTest)
    const strResult = stringifyLinkedList(headReversedList)
    console.log('expected - ', test.expected)
    console.log('result - ', strResult)
    console.log(strResult === test.expected ? 'PASSED' : 'FAILED')
    console.log('--------------------------------------------------------')
  })
}

runReverseListTests()
