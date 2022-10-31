function wordBreakV1(s: string, wordDict: string[]): boolean {
  // true
  // s = "applepenapple", wordDict = ["apple","pen"]
  
  // false
  // Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  
  /*
      true
      "cars"
      ["car","ca","rs"]
  */
  
  let temporalArr: string[] = [s]

  const replaceAllWords = (targetStr: string, wordToReplace: string): string => {
    let modifiedStr = targetStr
    while(modifiedStr.indexOf(wordToReplace) !== -1) {
      modifiedStr = modifiedStr.replace(wordToReplace, ' ')   
    }
    return modifiedStr
  }

  const checkForEmptyStrs = (arr: string[]): boolean => {
    return !arr.every(str => str.trim() !== '')
  }

  for (let word of wordDict) {
      for (let wordInProgress of temporalArr) {
          const replacedWord = replaceAllWords(wordInProgress, word)

          temporalArr = [...temporalArr, replacedWord]
          console.log(temporalArr)
          if (checkForEmptyStrs(temporalArr)) {
            return true
          }
      }
  }
  
  return false
};

// const arr = ["car","ca","rs"]
// const str = 'cars'
// const str2 = 'catsandog'
// const arr2 = ["cats","dog","sand","and","cat"]
// const arr3 = ["apple","pen"]
// const str3 = 'applepenapple'

// const str4 = "ccbb"
// const arr4 = ["bc","cb"]

// const str5 = "ccaccc"
// const arr5 = ["cc","ac"]
// console.log(wordBreak(str5, arr5))