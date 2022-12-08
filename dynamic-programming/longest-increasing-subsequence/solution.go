package main

import "fmt"

func main() {
	nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	fmt.Println("should be 4")
	fmt.Println(lengthOfLIS(nums))
}

func lengthOfLIS(nums []int) int {
	numsLength := len(nums)
	dp := initDp(numsLength) // the dp could be less by one smaller
	for i := 0; i < numsLength; i++ {
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] && dp[j]+1 > dp[i] {
				dp[i] = dp[j] + 1
			}
		}
	}
	higherNumber := 0
	for _, num := range dp {
		if num > higherNumber {
			higherNumber = num
		}
	}

	return higherNumber
}

func initDp(length int) []int {
	dp := make([]int, length)
	for i := 0; i < length; i++ {
		dp[i] = 1
	}
	return dp
}
