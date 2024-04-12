package main

import "tree/tree"

func testCase1() {
  // [5,1,4,null,null,3,6]
  arr := []int{5,1,4,0,0,3,6}
  root := tree.New(arr)
  tree.PrintTree(root, "")
}

func main() {
  testCase1()
}
