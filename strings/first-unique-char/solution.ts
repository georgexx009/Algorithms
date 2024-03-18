// time N
// space 3N
function firstUniqChar(s: string): number {
  const tracker = new Set<string>() 
  const duplicated = new Set<string>()
  const firstAppearance: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!firstAppearance[c]) {
      firstAppearance[c] = i
    }

    if (duplicated.has(c)) continue

    if (!tracker.has(c)) {
      tracker.add(c)
    } else {
      tracker.delete(c)
      duplicated.add(c)
    }

  }

  if (tracker.size > 0) {
    const firstChar = Array.from(tracker)[0]
    return firstAppearance[firstChar]
  }
  return -1
}

// time 2N
// space N
function firstUniqChar2(s: string): number {
  const tracker: Record<string, number> = {}

  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!tracker[c]) {
      tracker[c] = 1
    } else {
      tracker[c] = tracker[c] + 1
    }
  }

  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (tracker[c] === 1) {
      return i
    }
  }

  return -1
}

console.log('2 - ', firstUniqChar2('loveleetcode'))
console.log('0 - ', firstUniqChar2('leetcode'))
console.log('-1 - ', firstUniqChar2('aabb'))