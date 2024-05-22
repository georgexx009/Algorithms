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

// track the highest sell and the lowest number
func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}
	highestSell := 0
	smallestPrice := prices[0]

	for _, num := range prices[1:] {
		if smallestPrice > num {
			smallestPrice = num
		}
		currentSell := num - smallestPrice
		if currentSell > highestSell {
			highestSell = currentSell
		}
	}

	return highestSell
}
