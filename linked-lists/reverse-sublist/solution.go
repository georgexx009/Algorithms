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
	newHead := reverseBetween(&n1, 2, 4)
	for current := newHead; current != nil; current = current.Next {
		fmt.Println(current.Val)
	}
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	if left == right {
		return head
	}
	var prevNodeReversed *ListNode
	var reversedHead *ListNode
	var reversedTail *ListNode
	current := head
	reversingList := false
	position := 1

	for current != nil {
		if reversingList == false && position == left {
			reversingList = true
			reversedTail = current
		}

		if reversingList == true && position == right {
			next := current.Next
			if prevNodeReversed != nil {
				// connect node before started reversing to this node
				prevNodeReversed.Next = current
			}
			current.Next = reversedHead
			reversedTail.Next = next
			if prevNodeReversed == nil {
				head = current
			}
			break
		}

		if reversingList == true {
			next := current.Next
			current.Next = reversedHead // point to the prev, in this case nil
			reversedHead = current      // know the current is the start of the reverse head
			current = next              // move the pointer to the next node
			position++
			continue
		}

		if reversedHead == nil {
			prevNodeReversed = current
		}

		current = current.Next
		position++
	}

	return head
}
