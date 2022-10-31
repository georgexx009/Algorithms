// status: finished
// issues: with big graphs the heap gets out of memory

type Graph = number[][]

const createGraph = (len: number): number[][] => {
  // @ts-ignore
  return Array(len).fill([])
}
// 1 -> 2 -> 3 -> 4
// 1    <-   3
// @ts-ignore
const depthFirstSearch = (graph: Graph, vertex: number, visited: Set<number>) => {
  visited.add(vertex)
  const adjacentVertices = graph[vertex]
  let stack: number[] = [...adjacentVertices]
  // 3
  for (const currentVertex of stack) {
    if (visited.has(currentVertex)) {
      return true
    }
    visited.add(currentVertex)
    const subAdjacent = graph[currentVertex]
    stack = [...subAdjacent,...stack]
  }

  return false
}

const validateCycle = (graph: Graph): boolean => {
  // @ts-ignore
  const visited = new Set<number>()
  for (let i = 0; i < graph.length; i++) {
    if (visited.has(i)) continue
    // @ts-ignore
    const hasCycle = depthFirstSearch(graph, i, new Set(visited))
    if (hasCycle) return true
  }
  return false
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = createGraph(numCourses)
  for (const prerequisite of prerequisites) {
    const source = prerequisite[0]
    const target = prerequisite[1]

    graph[source] = [...graph[source], target]
  }
  console.log('graph filled', JSON.stringify(graph))
  const hasCycle = validateCycle(graph)

  return !hasCycle
}

console.log('should be false', canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]] ))
console.log('should be false ', canFinish(2, [[0,1],[1,0]]))
// is detecting cycle
console.log('no cycle - should be true', canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))
