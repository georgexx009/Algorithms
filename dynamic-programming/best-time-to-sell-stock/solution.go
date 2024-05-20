package main

func maxProfitOld(prices []int) int {
	maxP := 0
	for i := len(prices) - 1; i >= 0; i-- {
		currentMaxProfit := 0
		for j := 0; j < i; j++ {
			sellNum := prices[i]
			buyNum := prices[j]
			earn := sellNum - buyNum
			currentProfit := max(earn, 0)
			currentMaxProfit = max(currentMaxProfit, currentProfit)
		}
		maxP = max(maxP, currentMaxProfit)
	}
	return maxP
}

func max(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}
	return num2
}

func maxProfit(prices []int) int {
	smallest := prices[0]
	largest := prices[0]

	for _, num := range prices[1:] {
		if num < smallest {
			smallest = num
			largest = num
			continue
		}
		if num > largest {
			largest = num
			continue
		}
	}
	return largest - smallest
}
