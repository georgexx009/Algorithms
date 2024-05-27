package main

import (
	"fmt"
	"tree/tree"
)

func testCase1() {
	// [5,1,4,null,null,3,6]
	arr := []int{5, 1, 4, 0, 0, 3, 6}
	root := tree.New(arr)
	tree.BSF(root)
}

func testCase2() {
  arr := []int{5,0,1,0,0,4,1,0,0,0,0,5,0,0,6}
  root := tree.New(arr)
  tree.BSF(root)
}

func testBFS() {
	t4 := tree.TreeNode{Val: 4, Left: &tree.TreeNode{Val: 3}, Right: &tree.TreeNode{Val: 6}}
	t1 := tree.TreeNode{Val: 5, Left: &tree.TreeNode{Val: 1}, Right: &t4}
	tree.BSF(&t1)
}

func main() {
	testBFS()
	fmt.Println()
	testCase1()
  fmt.Println()
  testCase2()
}
