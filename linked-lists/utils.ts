import { ListNode, IListNode } from './list-node'

export const createLinkedListFromArray = (arr: number[]): ListNode => {
  let head: ListNode | null = null
  let currentNode: ListNode | null = null
  arr.forEach(val => {
    if (!head) {
      head = new ListNode(val)
      currentNode = head
    } else {
      currentNode!.next = new ListNode(val)
      currentNode = currentNode!.next
    }
  })

  return head!
}

export const stringifyLinkedList = (head: IListNode): string => {
  let currentNode = head
  let str = `head [`
  while (currentNode) {
    str = `${str}${currentNode.val}${currentNode.next ? ',' : ''}`
    currentNode = currentNode.next
  }
  str = `${str}] tail`
  return str
}
