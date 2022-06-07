class BinarySearchTreeNode<T> {
  data: T;
  leftNode: BinarySearchTreeNode<T> | null = null
  rightNode: BinarySearchTreeNode<T> | null = null

  constructor(data: T) {
    this.data = data;
  }
}

class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T> | null = null

  constructor(private comparator: (a: T, b: T) => number) {}

  insert(data: T): BinarySearchTreeNode<T> {
    if (!this.root) {
      this.root = new BinarySearchTreeNode<T>(data)
      return this.root
    }

    let current = this.root

    // left subtree < parent <= right subtree
    while (true) {
      // check if the new data is higher than the current
      // if yes - then
      //    check if right node is available
      //      if yes - assign
      //      if not - assign right node to current, we are going to check in that subtree
      // if not - then
      // repeat right process but for left node

      // right is equal or higher
      if (!this.comparator(current.data, data)) {
        if (!current.rightNode) {
          current.rightNode = new BinarySearchTreeNode<T>(data)
          return current.rightNode
        } else {
          current = current.rightNode
        }
      } else {
        if (!current.leftNode) {
          current.leftNode = new BinarySearchTreeNode<T>(data)
          return current.leftNode
        } else {
          current = current.leftNode
        }
      }
    }
  }

  inOrderTraversal(startNode: BinarySearchTreeNode<T> | null) {
    if (!startNode) return
    this.inOrderTraversal(startNode.leftNode)
    console.log(startNode.data)
    this.inOrderTraversal(startNode.rightNode)
  }
}

function comparator(a: number, b: number) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

const bst = new BinarySearchTree<number>(comparator)
bst.insert(7)
bst.insert(15)
bst.insert(9)
bst.insert(20)
bst.insert(3)
bst.inOrderTraversal(bst.root)
