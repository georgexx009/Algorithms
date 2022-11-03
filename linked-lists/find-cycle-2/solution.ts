
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
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
