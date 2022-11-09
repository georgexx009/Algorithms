package main

import "fmt"

func main() {
	str1 := "xabaxq" //8
	fmt.Println("expected 8, received ", countSubstrings(str1))
}

func countSubstrings(s string) int {
	count := 0

	for i, _ := range s {
		pairCount := countPairSubstrings(s, i)
		oddCount := countOddSubstrings(s, i)
		count = count + pairCount + oddCount
	}

	return count
}

func countPairSubstrings(s string, i int) int {
	count := 0
	for right, left := i+1, i; right < len(s) && left >= 0 && s[right] == s[left]; right, left = right+1, left-1 {
		count++
	}

	return count
}

func countOddSubstrings(s string, i int) int {
	count := 0

	// odd palindromes case
	for right, left := i, i; right < len(s) && left >= 0 && s[right] == s[left]; right, left = right+1, left-1 { // WARNING I'm not sure is going to work
		count++
	}

	return count
}
