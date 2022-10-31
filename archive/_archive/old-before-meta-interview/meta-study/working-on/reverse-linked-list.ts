class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/*
reverse in linked list is move pointers
iteratively
  traverse linked list

  currentNode = head
  currentReversed = null
  while currentNode
    do something with the currentNode
      newReversedNode = new ListNode(currentNode.val)
      newReversedNode.next = currentReversed
      currentReversed = newReversedNode

    move on
      currentNode = currentNode.next

recursively
  remember a linked list is only to move pointers
  in a current we have two nodes, the current and the next

  no null because we will stop in the last node
  if (!head.next) return head
    
  const nextNode = reverseList(head.next) // first return is the last node
  nextNode.next = head
  head.next = null
  return head

  const lastNode = reverseList(head.next)
  const nextNode = head.next
  nextNode.next = head
  head.next = null
  return lastNode
*/

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head.next) return head

  const lastNode = reverseList(head.next)
  const nextNode = head.next
  nextNode.next = head
  head.next = null
  return lastNode
}

function reverseList(head: ListNode | null): ListNode | null {
  let currentNode = head
  let currentReversed = null

  while (currentNode) {
    const newReversedNode = new ListNode(currentNode.val)
    newReversedNode.next = currentReversed
    currentReversed = newReversedNode

    currentNode = currentNode.next
  }

  return currentReversed
};

/*
  left <= right
  the position are basedIndex-1

  currentNode = head
  currentReversed = null - to iterate in the reversed new list
  headReversed = null - saved to assign to when we finish reversing
  startToConnect = null  -saved to connect to the currentReversed, which would be the tail
  
  because we already assign one node to the currentNode
  let counter = 1

  while currentNode
    do something
      check for the range
      if (counter >= left && counter <= right)
        if is in the range and headReversed/currentReversed is null
        means is the first node to reverse
          headReversed = currentNode

        reverse and connect to the not reversed list
          reverse process
            newNode = currentNode
            newNode.next = currentReversed
            currentReversed = newNode
          


      if is not in the range
        if is out of range and currentReversed is not null
        means we have finished reversing
          headReversed.next = currentNode
          and
          currentReversed.next = startToConnect
          break and stop

        save the node to connect in case reverse start
        startToConnect = currentNode


    move on
      currentNode = currentNode.next
      counter++
*/

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let currentNode = head
  let currentReversed: ListNode | null = null
  let headReversed = null
  let startToConnect = null
  let counter = 1

  while (currentNode) {
    if (counter >= left && counter <= right) {
      if (!currentReversed) {
        headReversed = currentNode
      }
      const newNode = currentNode
      newNode.next = currentReversed
      currentReversed = newNode
    } else {
      if (currentReversed) {
        headReversed.next = currentNode
        currentReversed.next = startToConnect
        break
      }

      startToConnect = currentNode
    }

    // move on
    currentNode = currentNode.next
    counter++
  }

  return head
};