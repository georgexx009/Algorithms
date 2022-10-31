import { TreeNode } from '../../utils/tree'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const currentNode1 = p
  const currentNode2 = q

  const queue1 = [currentNode1]
  const queue2 = [currentNode2]

  while (queue1.length && queue2.length) {
    const node1 = queue1.pop()
    const node2 = queue2.pop()

    if (node1?.val !== node2?.val) return false
    if (!!node1?.right !== !!node2?.right) return false
    if (!!node1?.left !== !!node2?.left) return false

    if (node1?.left) queue1.unshift(node1.left)
    if (node1?.right) queue1.unshift(node1.right)
    if (node2?.left) queue2.unshift(node2.left)
    if (node2?.right) queue2.unshift(node2.right)
  }
  return true
}
