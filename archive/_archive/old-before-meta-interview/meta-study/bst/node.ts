class BSTNode<T> {
  value: T
  right: BSTNode<T> | null = null
  left: BSTNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

const root = new BSTNode<number>(4)
root.left = new BSTNode<number>(2)
root.right = new BSTNode<number>(7)

root.left.left = new BSTNode<number>(1)
root.left.right = new BSTNode<number>(3)

function insertIntoBSTRecursion<T>(node: BSTNode<T> | null, value: T) {
  if (!node) {
    return new BSTNode<T>(value)
  }

  if (node.value < value) {
    node.right = insertIntoBSTRecursion(node.right, value)
  } else {
    node.left = insertIntoBSTRecursion(node.left, value)
  }

  return node
}

function insertIntoBSTNoRecursion<T>(node: BSTNode<T>, value: T) {
  if (!node) {
    return new BSTNode<T>(value)
  }

  let currentNode = node
  while (true) {
    if (currentNode.value < value) {
      if (currentNode.right) {
        currentNode = currentNode.right
      } else {
        currentNode.right = new BSTNode<T>(value)
        break
      }
    } else {
      if (currentNode.left) {
        currentNode = currentNode.left
      } else {
        currentNode.left = new BSTNode<T>(value)
        break
      }
    }
  }
}

function printInOrderBST<T>(node: BSTNode<T> | null) {
  if (!node) return
  printInOrderBST(node.left)
  console.log(node.value)
  printInOrderBST(node.right)
}

console.log('print in order')
printInOrderBST(root)
insertIntoBSTNoRecursion(root, 5)
console.log('print in order after addition')
printInOrderBST(root)