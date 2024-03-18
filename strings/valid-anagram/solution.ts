function isAnagram(s: string, t: string): boolean {
  const tracker = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (tracker[c]) {
      tracker[c] = tracker[c] + 1
    } else {
      tracker[c] = 1
    }
  }    

  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (tracker[c]) {
      tracker[c] = tracker[c] - 1
      if (tracker[c] === 0) delete tracker[c]
    } else {
      return false
    }
  }

  if (Object.keys(tracker).length > 0) return false
  return true
}

