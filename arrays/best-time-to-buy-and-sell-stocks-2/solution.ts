function maxProfit(prices: number[]): number {
  let currentlySelling = prices[0]
  let currentlyEarning = 0
  let totalSold = 0

  for(let i = 1; i < prices.length; i++) {
    const stock = prices[i]

    if (currentlySelling > stock) {
      currentlySelling = stock;
      currentlyEarning = 0
    } else {
      const possibleCurrentEarning = stock - currentlySelling

      if (possibleCurrentEarning > currentlyEarning) {
        const oldTotalSold = totalSold - currentlyEarning
        totalSold = oldTotalSold + possibleCurrentEarning
        currentlyEarning = possibleCurrentEarning
      } else {
        // totalSold += currentlyEarning
        currentlyEarning = 0
        currentlySelling = stock
      }
    }
  }    
  return totalSold
}

console.log('should be 7 - ', maxProfit([7,1,5,3,6,4]))
console.log('should be 4 - ', maxProfit([1,2,3,4,5]))
console.log('should be 0 - ', maxProfit([7,6,4,3,1]))
console.log('should be 4 - ', maxProfit([3,2,1,4,5]))
console.log('should be 2 - ', maxProfit([2,1,2,0,1]))