package main

import "testing"

func TestLongestPalindromeWithPalindromeString(t *testing.T) {
	result := longestPalindrome("racecar")
	if result != "racecar" {
		t.Errorf("Expected racecar, but got %s", result)
	}
}

func TestLongestPalindromeWithNonPalindromeString(t *testing.T) {
	result := longestPalindrome("hello")
	if result != "ll" {
		t.Errorf("Expected ll, but got %s", result)
	}
}

func TestLongestPalindromeWithSingleCharacter(t *testing.T) {
	result := longestPalindrome("a")
	if result != "a" {
		t.Errorf("Expected a, but got %s", result)
	}
}

func TestLongestPalindromeWithEmptyString(t *testing.T) {
	result := longestPalindrome("")
	if result != "" {
		t.Errorf("Expected empty string, but got %s", result)
	}
}

func TestCheckIfItPalindromeWithPalindromeString(t *testing.T) {
	result := checkIfItPalindrome("racecar")
	if result != true {
		t.Errorf("Expected true, but got %v", result)
	}
}

func TestCheckIfItPalindromeWithNonPalindromeString(t *testing.T) {
	result := checkIfItPalindrome("hello")
	if result != false {
		t.Errorf("Expected false, but got %v", result)
	}
}

func TestGetLargestWithFirstStringLarger(t *testing.T) {
	result := getLargest("hello", "hi")
	if result != "hello" {
		t.Errorf("Expected hello, but got %s", result)
	}
}

func TestGetLargestWithSecondStringLarger(t *testing.T) {
	result := getLargest("hi", "hello")
	if result != "hello" {
		t.Errorf("Expected hello, but got %s", result)
	}
}
