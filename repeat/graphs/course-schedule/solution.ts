// status: working
// issues: -
// resources:
//    - kahns algorithm: https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/

function canFinish5(numCourses: number, prerequisites: number[][]): boolean {
  const inDegrees = new Array(numCourses).fill(0)
  for (let p of prerequisites) {
    inDegrees[p[0]]++
  }

  const zeroDegrees: number[] = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const inDegreeVertex = inDegrees[i]
    if (inDegreeVertex === 0) {
      zeroDegrees.push(i)
    }
  }

  if (zeroDegrees.length === 0) {
    return false
  }

  while (zeroDegrees.length) {
    const zeroDegree = zeroDegrees.pop()

    for (let pre of prerequisites) {
      if (zeroDegree === pre[1]) {
        const inDegreePos = pre[0]
        inDegrees[inDegreePos]--

        if (inDegrees[inDegreePos] === 0) {
          zeroDegrees.push(pre[0])
        }
      }
    }
  }

  for (let inDegree of inDegrees) {
    if (inDegree > 0) {
      return false
    }
  }

  return true
}

console.log('should be false', canFinish5(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]] ))
console.log('should be false ', canFinish5(2, [[0,1],[1,0]]))
console.log('no cycle - should be true', canFinish5(5, [[1,4],[2,4],[3,1],[3,2]]))
console.log('should be false', canFinish5(5, [[1,4],[2,4],[3,1],[3,2],[4,2]]))
