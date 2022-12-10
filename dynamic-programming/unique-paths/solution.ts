function uniquePaths(m: number, n: number): number {
  const map = new Map()

  function getPaths(i: number, j: number, count: number): number {
    if(i === 1 || j  === 1) {
      return count + 1
    }

    let jCount = 0
    if(j > 0) {
      if(map.has(`${i}-${j-1}`)) {
        jCount = map.get(`${i}-${j-1}`)
      } else {
        jCount = getPaths(i, j - 1, count)
      }
    }

    let iCount = 0
    if(i > 0) {
      if(map.has(`${i-1}-${j}`)) {
        iCount = map.get(`${i-1}-${j}`)
      } else {
        iCount = getPaths(i - 1, j, count)
      }
    }

    if(!map.get(`${i}-${j}`)) {
      map.set(`${i}-${j}`, jCount + iCount)
    }

    return jCount + iCount
  }

  return getPaths(m, n, 0)
}

console.log(uniquePaths(51,9))
console.log(uniquePaths(3,2))
console.log(uniquePaths(3,7))
