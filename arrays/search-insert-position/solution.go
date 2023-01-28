package main

import "fmt"

func main() {
	fmt.Println("1,3,5,6 - 5")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6), 5))
	fmt.Println("1,3,5,6 - 2")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6), 2))
	fmt.Println("1,3,5,6,7 - 2")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 7), 2))
	fmt.Println("1,3,5,6,7,9,11,13 - 12")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 7, 9, 11, 13), 12))
	fmt.Println("1,3,5,6,7,9,11 - 10")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 7, 9, 11), 10))
	fmt.Println("1,3,5,6,8 - 7")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 8), 7))
	fmt.Println("1,3,5,6,8 - 9")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 8), 9))
	fmt.Println("2,3,5,6,8 - 1")
	fmt.Println(searchInsert(createSlice(2, 3, 5, 6, 8), 1))
	fmt.Println("1,3,5,6,8,9 - 10")
	fmt.Println(searchInsert(createSlice(1, 3, 5, 6, 8, 9), 10))
	fmt.Println("3,5,7,9,10 - 8")
	fmt.Println(searchInsert(createSlice(3, 5, 7, 9, 10), 8))
}

func createSlice(nums ...int) []int {
	return nums
}

func searchInsert(nums []int, target int) int {
	leftPointer := 0 // absolute, if half is 2.5 then round to 2
	rightPointer := len(nums) - 1
	middleIdx := ((rightPointer - leftPointer) / 2) + leftPointer
	middleVal := nums[middleIdx]

	for leftPointer < rightPointer {
		if middleVal == target {
			return middleIdx
		}

		if target < middleVal {
			// go left
			rightPointer = middleIdx - 1
		} else if middleVal < target {
			// go right
			leftPointer = middleIdx + 1
		}

		middleIdx = ((rightPointer - leftPointer) / 2) + leftPointer
		middleVal = nums[middleIdx]
	}

	// when is the last step you know you aren't going to find it
	if rightPointer == leftPointer {
		if middleVal < target {
			return rightPointer + 1
		} else {
			return rightPointer
		}
	}
	// edge cases
	return leftPointer
}
