function topKFrequent(nums: number[], k: number): number[] {
  /*
      get 
  */
  
  // max length is K
  const frequency = {}
  let kResult: number[] = []
  
  nums.forEach(num => {
      frequency[num] = (num in frequency ? frequency[num] : 0) + 1
  })
  
  const bucket = []
  Object.keys(frequency).forEach(keyNumber => {
      const numberFrequency = frequency[keyNumber]
      bucket[numberFrequency] = (bucket[numberFrequency] || new Set()).add(keyNumber);
  })
  
  for(let i = bucket.length - 1; i >= 0; i--) {
      if(bucket[i]) {
          kResult = [...kResult, ...bucket[i]]
      }
      if (kResult.length === k) break
  }
  
  return kResult
};