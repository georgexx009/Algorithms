/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

// [3,9,20,null,null,15,7] = 3
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  let counter = 1

  // last node
  if (!root?.left && !root?.right) {
    return counter
  }

  let counterLeft = 0
  let counterRight = 0
  if (root?.left) {
    counterLeft = maxDepth(root.left)
  }
  if (root?.right) {
    counterRight = maxDepth(root.right)
  }

  if (counterLeft > counterRight) {
    counter += counterLeft
  } else {
    counter += counterRight
  }

  return counter
};

function createBinaryTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  let root = new TreeNode(arr[0]);
  let queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let currentNode = queue.shift()!;

    if (arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]);
      queue.push(currentNode.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}

let arr = [3,9,20,null,null,15,7];
let root = createBinaryTree(arr);
