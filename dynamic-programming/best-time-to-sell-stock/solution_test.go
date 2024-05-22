package main

import "testing"

func TestMaxProfitWithIncreasingPrices(t *testing.T) {
	prices := []int{1, 2, 3, 4, 5}
	expected := 4
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxProfitWithDecreasingPrices(t *testing.T) {
	prices := []int{5, 4, 3, 2, 1}
	expected := 0
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxProfitWithConstantPrices(t *testing.T) {
	prices := []int{3, 3, 3, 3, 3}
	expected := 0
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxProfitWithEmptyPrices(t *testing.T) {
	prices := []int{}
	expected := 0
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxProfitWithSinglePrice(t *testing.T) {
	prices := []int{5}
	expected := 0
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxProfitWithRandomPrices(t *testing.T) {
	prices := []int{7, 1, 5, 3, 6, 4}
	expected := 5
	result := maxProfit(prices)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}
