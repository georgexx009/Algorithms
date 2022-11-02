package main

import (
	"fmt"
	"sort"
)

func main() {
	var i [][]int
	i = append(i, []int{6, 8})
	i = append(i, []int{1, 5})
	i = append(i, []int{3, 7})
	i = append(i, []int{4, 6})

	result := merge(i)
	fmt.Println(result)
}

func merge(intervals [][]int) [][]int {
	sortIntervals(intervals)

	var workingInterval []int
	var mergeIntervals [][]int

	for i, interval := range intervals {
		if i == 0 {
			workingInterval = interval
			continue
		}

		if workingInterval[1] >= interval[0] && workingInterval[1] <= interval[1] {
			workingInterval[1] = interval[1]
			continue
		}

		if workingInterval[1] < interval[0] {
			mergeIntervals = append(mergeIntervals, workingInterval)
			workingInterval = interval
		}
	}

	return append(mergeIntervals, workingInterval)
}

func sortIntervals(intervals [][]int) [][]int {
	newIntervals := intervals
	sort.SliceStable(newIntervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	return newIntervals
}
