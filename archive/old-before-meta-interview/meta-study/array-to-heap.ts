
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
 }


 function sortedArrayToBST(nums: number[]): TreeNode | null {
  /*
      create sub-trees recursively
      
      recursive function
          finds the middle
          create the root from that subtree,
          and as left and right leaf, call again passing each respective side
  */
  
  const createNode = (list: number[]) => {
      if (list.length === 0) return null
      const middle = Math.floor(list.length / 2)
      return new TreeNode(list[middle], createNode(list.slice(0, middle)), createNode(list.slice(middle + 1)))
  }
  
  return createNode(nums)
};