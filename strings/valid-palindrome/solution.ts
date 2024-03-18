function isPalindrome(s: string): boolean {
  const alphanumericString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (let i = 0; i < s.length; i++) {
    const left = alphanumericString[i]
    const right = alphanumericString[alphanumericString.length - 1 - i]
    if (left !== right) {
      return false
    }
  }
  return true
}

console.log('true', isPalindrome("A man, a plan, a canal: Panama"))