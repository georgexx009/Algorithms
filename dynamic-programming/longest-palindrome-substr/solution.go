package main

func longestPalindrome(s string) string {
	maxSubstr := ""
	for i := 0; i < len(s); i++ {
		for j := i + 1; j < len(s); j++ {
			substr := s[i : j+1]
			isPalindrome := checkIfItPalindrome(substr)
			if isPalindrome == true {
				maxSubstr = getLargest(substr, maxSubstr)
			}
		}
	}
	return maxSubstr
}

func checkIfItPalindrome(str string) bool {
	start := 0
	end := len(str) - 1
	for start < end {
		if str[start] != str[end] {
			return false
		}
		start++
		end--
	}
	return true
}

func getLargest(str1, str2 string) string {
	if len(str1) > len(str2) {
		return str1
	}
	return str2
}
