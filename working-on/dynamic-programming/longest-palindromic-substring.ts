// https://leetcode.com/problems/longest-palindromic-substring/
// medium

// Given a string s, return the longest palindromic substring in s.
function longestPalindrome(s: string): string {
  // char by char you cannot do a palindrome
  // try from the whole to none instead of from none to whole
  // the main problem: find the palindromes
  // could be that only need to remove from left, or remove from right, or remove from both sides
  let reversedStr = s.replace(/ /g,'').split("").reverse().join("")
  console.log(reversedStr)
  if (s.replace(/ /g,'') === reversedStr) return s


  return ''
}

interface ILongestPalindromicSubstringTest {
  input: string
  expected: string
}

const longestPalindromicSubstringTests: ILongestPalindromicSubstringTest[] = [{
  input: 'babad',
  expected: 'bab'
}, {
  input: 'cbbd',
  expected: 'bb'
}, {
  input: 'anita lava la tina',
  expected: 'anita lava la tina'
}]

function runLongestPalindromicSubstringTest(tests: ILongestPalindromicSubstringTest[]) {
  tests.forEach(test => {
    const result = longestPalindrome(test.input)
    console.log('input: ', test.input)
    console.log('expected: ', test.expected)
    console.log('result: ', result)
    console.log(result === test.expected ? 'PASSED' : 'FAILED')
    console.log('--------------------------------------------------------')
  })
}

runLongestPalindromicSubstringTest(longestPalindromicSubstringTests)
