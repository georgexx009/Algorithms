package main

//
//// hello = ll
//
//func longestPalindromeV2(s string) string {
//	if len(s) == 0 {
//		return ""
//	}
//
//	// dynamic programming table
//	// dp[i][j] = true if s[i:j] is palindrome
//	dp := make([][]bool, len(s))
//
//	// every single character is palindrome
//	for i := 0; i < len(s); i++ {
//		dp[i] = make([]bool, len(s))
//		dp[i][i] = true
//	}
//
//	// check for substring of length 2
//	start, maxLength := 0, 1
//	for i := 0; i < len(s)-1; i++ { // why the -1? because we are checking for substring of length 2
//		if s[i] == s[i+1] {
//			dp[i][i+1] = true
//			start = i     // why?
//			maxLength = 2 // why?
//		}
//	}
//}
