package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	prevNode := node
	for node.Next != nil {
		node.Val = node.Next.Val
		prevNode = node
		node = node.Next
	}
	prevNode.Next = nil
}
