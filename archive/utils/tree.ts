export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export const convertArrToTree = (treeArr: number[]): TreeNode => {
  // return the head
  let root: TreeNode | null = null;
  const workingNode = root;

  for (const val of treeArr) {
    if (!root) {
      root = new TreeNode(val)
    }

    // assign left
    // next assign right
  }
}
