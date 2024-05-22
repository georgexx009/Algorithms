package tree

import (
	"fmt"
	"strconv"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func New2(treeArr []int) *TreeNode {
	queue := []*TreeNode{}
	root := &TreeNode{Val: treeArr[0]}
	currentNode := root

	for i, treeNum := range treeArr[1:] {
		// add to the left or right
		turn := (i - 1) % 3

		// NOTE - more than a third turn to create, maybe we need only two
		// BUG - 2 nils doesn't update the currentNode

		if turn == 0 { // turn: left
			newNode := &TreeNode{Val: treeNum}
			currentNode.Left = newNode
			queue = append(queue, newNode)
			continue
		} else if turn == 1 { // turn: right
			newNode := &TreeNode{Val: treeNum}
			currentNode.Right = newNode
			queue = append(queue, newNode)
			continue
		}
	}

	return root
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

func PrintTree(node *TreeNode, prefix string) {
	if node == nil {
		return
	}

	fmt.Println(prefix + strconv.Itoa(node.Val))

	PrintTree(node.Left, prefix+"--")
	PrintTree(node.Right, prefix+"--")
}
