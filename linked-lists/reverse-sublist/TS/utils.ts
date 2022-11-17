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

export const stringifyLinkedListWithCycle = (head: IListNode, cycleStartIdx: number): string => {
  let currentNode = head
  let str = `head [`
  let idxCounter = 0
  let cycleStartVal: number | null = null

  while (currentNode) {
    if (currentNode.val === cycleStartVal) break;
    str = `${str}${currentNode.val}${currentNode.next ? ',' : ''}`

    if (idxCounter === cycleStartIdx) {
      cycleStartVal = currentNode.val
    }

    currentNode = currentNode.next
    idxCounter++
  }
  str = `${str}] tail -> ${cycleStartIdx === -1 ? 'null' : currentNode!.val}`
  return str
}

export const createLinkedListWithCycleFromArray = (arr: number[], cycleStartIdx: number): ListNode => {
  let head: ListNode | null = null
  let currentNode: ListNode | null = null
  let cycleStartNode: ListNode | null = null

  arr.forEach((val, idx) => {
    if (!head) {
      head = new ListNode(val)
      currentNode = head
    } else {
      currentNode!.next = new ListNode(val)
      currentNode = currentNode!.next
    }

    if (idx === cycleStartIdx) {
      cycleStartNode = currentNode
      console.log('cycle start node value - ', cycleStartNode.val)
    }
  })

  // create cycle
  currentNode!.next = cycleStartNode

  return head!
}
