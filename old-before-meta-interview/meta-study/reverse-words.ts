function reverseWords(s: string): string {
  let newStr = ''
  let wordInProgress = ''
  let isWordInProgress = false
  
  for (let char of s) {
      if (char !== ' ') {
          isWordInProgress = true
          wordInProgress = `${wordInProgress}${char}`
      } else {
          // word finish
          if (isWordInProgress) {
              newStr = `${wordInProgress}${newStr === '' ? '' : ` ${newStr}`}`
              wordInProgress = ''
          }
          isWordInProgress = false
      }
  }
  
  if (wordInProgress) {
      newStr = `${wordInProgress}${newStr === '' ? '' : ` ${newStr}`}`
  }
  
  return newStr
};