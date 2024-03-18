// a valid binary search three is a binary tree where all the left nodes are less than the right ones
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

// [5,4,6,null,null,3,7]
function isValidBST(root: TreeNode | null): boolean {
  if (root) {
    const parentVal = root.val

    if (root.left) {
      const leftVal = root.left.val
      if (leftVal >= parentVal) {
        return false
      }
    }

    if (root.right) {
      const rightVal = root.right.val
      if (parentVal >= rightVal) {
        return false
      }
    }

    if (root.left) {
      const result = isValidBST(root.left)
      if (result === false) {
        return false
      }
    }

    if (root.right) {
      const result = isValidBST(root.right)
      if (result === false) {
        return false
      }
    }
  }

  return true
};
