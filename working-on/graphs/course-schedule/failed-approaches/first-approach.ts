// where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]] -> false

const createSquareMatrix = (len: number) => {
  // @ts-ignore
  return Array(len).fill(null).map(() => Array(len).fill(0))
}
// 1 <- 3
// 1 -> 4
// 2 -> 4
// 2 <- 3
const validateCycle = (matrix: number[][]): boolean => {
  // from all rows validate the target
  // @ts-ignore
  const visitedTargets = new Set()
  const visitedSource = new Set()
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      const hasEdge = matrix[x][y] === 1
      if (!hasEdge) continue

      // x -> y
      if (visitedTargets.has(x) || visitedSource.has(y) || y === x) {
        return true
      }
      visitedTargets.add(y)
      visitedSource.add(x)
    }
  }

  return false
}

// in matrix rows are source and columns are ending
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // create base matrix
  // with prerequisites fill it
  // if has cycle is false
  // return true
  const matrix = createSquareMatrix(numCourses)
  for (const prerequisite of prerequisites) {
    const source = prerequisite[0]
    const target = prerequisite[1]

    matrix[source][target] = 1
  }
  // try to find cycle
  const hasCycle = validateCycle(matrix)

  return !hasCycle
}

console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))
