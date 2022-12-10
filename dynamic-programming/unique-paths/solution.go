package main

import "fmt"

func main() {
	fmt.Println("expect 28: ")
	fmt.Println(uniquePaths(3, 7))
	fmt.Println("expect 3: ")
	fmt.Println(uniquePaths(3, 2))
	fmt.Println("expect 3: ")
	fmt.Println(uniquePaths(23, 12))
}

func createKey(m int, n int) string {
	return fmt.Sprint(m, "-", n)
}

func uniquePaths(m int, n int) int {

	memoize := make(map[string]int)
	var dfs func(m int, n int) int
	dfs = func(m int, n int) int {
		if m == 1 && n == 1 {
			return 1
		}

		totalFromLayer := 0
		if m != 0 {
			if val, ok := memoize[createKey(m-1, n)]; ok {
				totalFromLayer = totalFromLayer + val
			} else {
				r := dfs(m-1, n)
				memoize[createKey(m-1, n)] = r
				totalFromLayer = totalFromLayer + r
			}
		}
		if n != 0 {
			if val, ok := memoize[createKey(m, n-1)]; ok {
				totalFromLayer = totalFromLayer + val
			} else {
				r := dfs(m, n-1)
				memoize[createKey(m, n-1)] = r
				totalFromLayer = totalFromLayer + r
			}
		}

		return totalFromLayer
	}

	return dfs(m, n)
}
