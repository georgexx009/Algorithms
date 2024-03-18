/**
 Do not return anything, modify s in-place instead.
*/
function reverseString(s: string[]): void {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
}

let a1 = ["h","e","l","l","o"]
reverseString(a1)
console.log(a1)
