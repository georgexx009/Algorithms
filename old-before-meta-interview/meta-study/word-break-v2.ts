function wordBreak(s: string, wordDict: string[]): boolean {
  /*
    set up
      use a set instead of array for wordDict
      visited = set()

    
  */
  if (wordDict == null || wordDict.length === 0) return false
  const set = new Set(wordDict)

  const visited = new Set() // 0
  const q = [0] // 2, 3

  while (q.length) {
    const start = q.shift() // removes the first - 2

    // looking in a set is hashable?
    if (!visited.has(start)) { // need to visit idx 0, 2

      //@ts-ignore
      for (let end = start + 1; end <= s.length; end++) { // end = 1++

        // set = wordDict
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true
          q.push(end) // end = 2, 3
        }
      }

      visited.add(start)
    }
  }

  return false
};

const arr = ["car","ca","rs"]
const str = 'cars'
const str2 = 'catsandog'
const arr2 = ["cats","dog","sand","and","cat"]
const arr3 = ["apple","pen"]
const str3 = 'applepenapple'

const str4 = "ccbb"
const arr4 = ["bc","cb"]

const str5 = "ccaccc"
const arr5 = ["cc","ac"]
console.log(wordBreak(str5, arr5))