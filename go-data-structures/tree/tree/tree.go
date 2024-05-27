package tree

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func New(treeArr []int) *TreeNode {
	if len(treeArr) == 0 {
		return nil
	}
	queue := []*TreeNode{}
	root := &TreeNode{Val: treeArr[0]}
	currentNode := root
	turnOrder := createTurnOrder()

	for _, treeNum := range treeArr[1:] {
		// add to the left or right
		turn := turnOrder()

		if turn == "next" {
      if len(queue) > 0 {
        currentNode = queue[0]
        queue = queue[1:]
      }
			turn = turnOrder()
		}

		// NOTE - more than a third turn to create, maybe we need only two
		// BUG - 2 nils doesn't update the currentNode

		if turn == "left" && treeNum != 0 { // turn: left
			newNode := &TreeNode{Val: treeNum}
			currentNode.Left = newNode
			queue = append(queue, newNode)
			continue
		} else if turn == "right" && treeNum != 0 { // turn: right
			newNode := &TreeNode{Val: treeNum}
			currentNode.Right = newNode
			queue = append(queue, newNode)
			continue
		}
	}

	return root
}

func createTurnOrder() func() string {
	counter := 0

	mapCounter := func(num int) string {
		if num == 0 {
			return "left"
		} else if num == 1 {
			return "right"
		}
		return "next"
	}

	return func() string {
		turn := mapCounter(counter)
		counter++
		if counter == 3 {
			counter = 0
		}
		return turn
	}
}

func BSF(root *TreeNode) {
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		activeNode := queue[0]
		queue = queue[1:]
		fmt.Print(activeNode.Val)
		if activeNode.Left != nil {
			queue = append(queue, activeNode.Left)
		}
		if activeNode.Right != nil {
			queue = append(queue, activeNode.Right)
		}
	}
}
