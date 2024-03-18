function rob(nums: number[]): number {
  let ping = nums[0]
  let pong = nums[1]

  let status: 'ping' | 'pong' = 'ping'
  for (let i = 2; i < nums.length; i++) {
    const higherPingPong = getHigher(ping, pong)
    if (status === 'ping') {
      pong = higherPingPong
      if ((ping + nums[i]) > pong) {
        ping = pong
      } else {
        ping = ping + nums[i]
      }
    } else {
      ping = higherPingPong
      if ((pong + nums[i]) > ping) {
        pong = ping
      } else {
        pong = pong + nums[i]
      }
    }

    status = status === 'ping' ? 'pong' : 'ping'
  }    

  return ping > pong ? ping : pong
}

function rob2(nums: number[]): number {
  let ping = 0, pong = 0;

  for (let i = 0; i < nums.length; i++) {
    let newPong = ping + nums[i];
    ping = Math.max(ping, pong);
    pong = newPong;
  }

  return Math.max(ping, pong);
}

function rob3(nums: number[]): number {
  let maxSumIncluding = 0 // max sum including the current house
  let maxSumExcluding = 0 // max sum excluding the current house

  for(let i = 0; i < nums.length; i++) {
    const newMaxSumIncluding = nums[i] + maxSumExcluding
    maxSumExcluding = maxSumIncluding
    maxSumIncluding = newMaxSumIncluding
  }

  return Math.max(maxSumExcluding, maxSumIncluding)
}

function getHigher(num1: number, num2: number) {
  return num1 > num2 ? num1 : num2
}

console.log('should be 4', rob3([1,2,3,1]))
console.log('should be 12', rob3([2,7,9,3,1]))
console.log('should be 4', rob3([2,1,1,2]))