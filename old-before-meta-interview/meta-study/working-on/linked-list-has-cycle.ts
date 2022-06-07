// @ts-ignore
// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
// https://leetcode.com/problems/linked-list-cycle/
/*
  if we visit more than once a node while traversing the list, then is a cycle
  return 1 if has a cycle
  return 0 if not

  edge cases: 
    the list could be empty, so head would be null

  class SinglyLinkedListNode
    data: int
    next: SinglyLinkedListNode
*/

class SinglyLinkedListNode {
  data: number
  next: SinglyLinkedListNode | null = null

  constructor(data: number) {
    this.data = data
  }
}

/*
  if head null, return 0?

  declare visited map
  current = head

  loop for traverse
  loop while current is not null
    visited hasn't current
      add current.data to visited
      current = current.next
      DEPRECATED check if the new current is null, to avoid break in the while condition statement
      the loop will break since .next = null for last
    else return 1
  
  outside the loop return 0
*/

function hasCycle(head: SinglyLinkedListNode): number {
  if (!head) return 0

  const visited = new Map<number, boolean>()
  let current: SinglyLinkedListNode | null = head

  while (current) {
    if (!visited.has(current.data)) {
      visited.set(current.data, true)
      current = current.next
    } else {
      return 1
    }
  }

  return 0
}

const one = new SinglyLinkedListNode(1)
const two = new SinglyLinkedListNode(2)
const three = new SinglyLinkedListNode(3)

one.next = two
two.next = three
three.next = two

console.log(hasCycle(one))

