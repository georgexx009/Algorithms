package tree

import (
	"fmt"
	"strconv"
)

type TreeNode struct {
  val int
  left *TreeNode
  right *TreeNode
}

func New(treeArr []int) *TreeNode {
  root := &TreeNode{val: treeArr[0]}
  queue := []*TreeNode{root}
  currentNode := root

  for _, num := range treeArr[1:] {
    if currentNode.left == nil && currentNode.right == nil && len(queue) > 0 {
      currentNode = queue[0]
      queue = queue[1:]
    }

    if num == 0 {
      continue
    }

    if currentNode.left == nil {
      newNode := &TreeNode{val: num}
      currentNode.left = newNode
      queue = append(queue, newNode)
    } else if currentNode.right == nil {
      newNode := &TreeNode{val: num}
      currentNode.right = newNode
      queue = append(queue, newNode)
    }
  }

  return root
}

func BSF(root *TreeNode) {
  queue := []*TreeNode{root}

  for len(queue) > 0 {
    activeNode := queue[0]
    queue = queue[1:]
    if (activeNode.left != nil) {
      queue = append(queue, root.left)
    }
    if (root.right != nil) {
      queue = append(queue, root.right)
    }
  }
}

func PrintTree(node *TreeNode, prefix string) {
    if node == nil {
        return
    }

    fmt.Println(prefix + strconv.Itoa(node.val))

    PrintTree(node.left, prefix + "--")
    PrintTree(node.right, prefix + "--")
}
