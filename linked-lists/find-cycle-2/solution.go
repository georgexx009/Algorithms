package main

import "fmt"

// 3 -> 2 -> 0 -> -4 -> 2
func main() {
	node4 := ListNode{4, nil}
	node0 := ListNode{0, &node4}
	node2 := ListNode{2, &node0}
	node3 := ListNode{3, &node2}
	node4.Next = &node2

	cycleStarts := detectCycle(&node3)
	fmt.Println(cycleStarts.Val)
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func detectCycle(head *ListNode) *ListNode {
	visited := make(map[*ListNode]int)

	for head != nil {
		if _, ok := visited[head]; ok == true {
			return head
		}

		visited[head] = 0
		head = head.Next
	}

	return nil
}
