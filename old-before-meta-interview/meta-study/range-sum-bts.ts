/*
  Given the root node of a binary search tree and two integers low and high,
  return the sum of values of all nodes with a value in the inclusive range [low, high].
 */

import { Queue } from './graph'

function printTree(treeNode: TreeNode): void {
  const traversedTree: number[] = []
  const queue: Queue<TreeNode> = new Queue()
  const visited: Map<number, boolean> = new Map()

  queue.add(treeNode)

  while(!queue.isEmpty()) {
    const node = queue.remove()
    if (!node) return
    traversedTree.push(node.val)
    visited.set(node.val, true)

    const { left, right } = node
    if (left && !visited.has(left.val)) {
      queue.add(left)
    }
    if (right && !visited.has(right.val)) {
      queue.add(right)
    }
  }

  console.log(JSON.stringify(traversedTree))
}

function createTreeFromArrayAux(node: TreeNode, remainNodes: number[]): TreeNode {
  if (!remainNodes || remainNodes.length === 0) return
  const newNode = new TreeNode(remainNodes.shift())
  newNode.left = new TreeNode(remainNodes.shift() || null)
  newNode.right = new TreeNode(remainNodes.shift() || null)
}

function createTreeFromArray(arr: number[]): TreeNode {
  const root = new TreeNode(arr.shift())


}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class BinarySearchTree<T> {
  root: TreeNode

  constructor() {}
}
