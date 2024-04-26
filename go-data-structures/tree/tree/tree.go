package tree

import (
	"fmt"
	"strconv"
)

type TreeNode struct {
  Val int
  Left *TreeNode
  Right *TreeNode
}

func New(treeArr []int) *TreeNode {
  queue := []*TreeNode{}
  root := &TreeNode{Val: treeArr[0]}
  currentNode := root

  turn := 0
  updateTurn := func() {
    turn++
    if turn > 2 {
      turn = 0
    }
  }

  for _, treeNum := range treeArr[1:] {
    // unexisting leaf
    if treeNum == 0 {
      updateTurn()
      continue
    }

    if turn == 0 { // turn: left
      newNode := &TreeNode{Val: treeNum}
      currentNode.Left = newNode
      queue = append(queue, newNode)
    } else if turn == 1 { // turn: right
      newNode := &TreeNode{Val: treeNum}
      currentNode.Right = newNode
      queue = append(queue, newNode)
    } else { // turn: create
      newNode := &TreeNode{Val: treeNum}
      queue = append(queue, newNode)

      currentNode = queue[0]
      queue = queue[1:]
      currentNode.Left = newNode
      updateTurn()
    }

    updateTurn()
  }

  return root
}

// BUG - infinite print
func BSF(root *TreeNode) {
  queue := []*TreeNode{root}

  for len(queue) > 0 {
    activeNode := queue[0]
    fmt.Print(activeNode.Val)
    queue = queue[1:]
    if (activeNode.Left != nil) {
      queue = append(queue, root.Left)
    }
    if (root.Right != nil) {
      queue = append(queue, root.Right)
    }
  }
}

func PrintTree(node *TreeNode, prefix string) {
    if node == nil {
        return
    }

    fmt.Println(prefix + strconv.Itoa(node.Val))

    PrintTree(node.Left, prefix + "--")
    PrintTree(node.Right, prefix + "--")
}
