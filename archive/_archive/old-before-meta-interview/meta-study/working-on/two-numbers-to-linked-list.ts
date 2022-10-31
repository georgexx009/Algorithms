/*
  two lists representing two non-negative numbers
  the digits are store in reverse order

  example
  2->4->3
  342

  5->6->4
  465

  avoid trailling 0
*/

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/*
brute force
  traverse one list and create string -> number x2
  make the sum
  number -> string
  create new list based on new string, return head

Improve solution
  see it like literally a sum
  2-4-3
  5-6-4
  -----
  7-0-8

  if we go from left to right we could carry
  in an original sum the sum is done from right to left, carrying to left
  thats why the digits are in reverse
*/

/*
Solution implementation
  upper scope
    carry = 0
    new linked list = new ListNode()
    currentl1 = l1
    currentl2 = l2
    currentNewList = newLinkedList

  start iterating from head l1, l2
  while currentl1,currentl2 are completely traversed
  and we dont have carry
    get value from current l1 and l2
    if node null , then equal 0

    sum = valL1 + valL2 + carry
    carry = sum % 10


    the % is to get only one digit
    currentNewList.val = Math.floor(sum/10)
    currentNewList.next = new ListNode()
    currentNewList = currentNewList.next

    currentl1 = currentl1.next
    currentl2 = currentl2.next
*/

/*
    2-4-3
    5-6-4
    -----
    7-0-8
*/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  let currentL1 = l1
  let currentL2 = l2
  let currentNewList: ListNode | null = null
  let newLinkedList = null

  // 3,4,1
  while (currentL1 || currentL2 || carry) {
    const sum = (currentL1 ? currentL1.val : 0) + (currentL2 ? currentL2.val : 0) + carry //8
    carry = sum >= 10 ? Math.floor(sum/10) : 0 // 0, 1, 0
    const newNodeVal = sum >= 10 ? (sum % 10) : sum // 7, 0, 8

    if (!currentNewList) { // the first time
      currentNewList = new ListNode(newNodeVal) // 7
      newLinkedList = currentNewList
    } else { // when currentNewList is already a node
      currentNewList.next = new ListNode(newNodeVal) // do the connection
      currentNewList = currentNewList.next // move on
    }

    currentL1 = (currentL1 ? currentL1.next : null)
    currentL2 = (currentL2 ? currentL2.next : null)
  }

  return newLinkedList
};