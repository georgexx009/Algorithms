package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	n4 := ListNode{4, nil}
	n3 := ListNode{3, &n4}
	n2 := ListNode{2, &n3}
	n1 := ListNode{1, &n2}
	newHead := reverseBetween(&n1, 1, 3)
	for current := newHead; current != nil; current = current.Next {
		fmt.Println(current.Val)
	}
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	next := head.Next
	reversing := false
	var reversedTail *ListNode
	var reversedHead *ListNode
	var prevNodeFromStartReversing *ListNode

	for current, pos := head, 1; current != nil; current, pos = next, pos+1 {
		next = current.Next

		if pos == left {
			reversing = true
			reversedTail = current
		}

		if reversing == true {
			current.Next = reversedHead
			reversedHead = current
		} else {
			prevNodeFromStartReversing = current
		}

		if pos == right {
			if prevNodeFromStartReversing != nil {
				prevNodeFromStartReversing.Next = reversedHead
			} else {
				head = reversedHead
			}

			reversedTail.Next = next
			break
		}
	}

	return head
}
