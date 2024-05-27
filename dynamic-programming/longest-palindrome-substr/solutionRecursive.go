package main

func longestPalindrome(s string) string {
	if s == "" {
		return s
	}
	if len(s) == 1 {
		return s
	}

	maxSubstr := ""
	for i := 0; i < len(s); i++ {
		subStr := s[0 : i+1]
		isPal := checkIfItPalindrome(subStr)
		if isPal == true {
			maxSubstr = getLargest(subStr, maxSubstr)
		}
	}

	subResult := longestPalindrome(s[1:])
	maxSubstr = getLargest(subResult, maxSubstr)
	return maxSubstr
}
