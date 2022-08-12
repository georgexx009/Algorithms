/*
1. iterate string
1. from current i, check if right and left are equal
2. if yes
  3. counter++
4. repeat step 1.1 but checking right++ and left++
5. if not
  6. move to the next
*/

// function logFoundPalindrome(palindrome) {
//   console.log('found: ', palindrome)
// }

function reverseString(str: string) {
  return str.split("").reverse().join("");
}

function verifyPairPalindrome(str: string): boolean {
  const secondHalfStart = str.length / 2;
  const firstHalf = str.substring(0, secondHalfStart)
  const secondHalf = str.substring(secondHalfStart)
  const reversedSecondHalf = reverseString(secondHalf)
  return firstHalf === reversedSecondHalf
}

function searchPalindrome(i: number, s: string): number {
  let counter = 0

  // length with pair number
  let pointerMovingRight = i + 1
  let subStr = `${s[i]}${s[pointerMovingRight]}`
  while(pointerMovingRight < s.length) {
    if (verifyPairPalindrome(subStr)) {
      counter++
    }

    pointerMovingRight++
    subStr = `${subStr}${s[pointerMovingRight]}`
    pointerMovingRight++
    subStr = `${subStr}${s[pointerMovingRight]}`
  }

  // length with odd number
  let leftPos = i - 1
  let rightPos = i + 1
  while (leftPos >= 0 && rightPos < s.length) {
    const leftChar = s[leftPos]
    const rightChar = s[rightPos]

    if (leftChar === rightChar) {
      counter++
      leftPos--
      rightPos++
    } else {
      break
    }
  }

  return counter
}

export function countSubstrings(s: string): number {
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    counter++
    const subCounter = searchPalindrome(i, s)
    counter = counter + subCounter
  }
  return counter
}
