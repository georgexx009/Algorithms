// status: not working
// issues: when 2 vertices are point to the same node return is a cycle


type Graph = number[][]

const createGraph = (len: number): number[][] => {
  // @ts-ignore
  return Array(len).fill([])
}

const depthFirstSearch = ({ graph, queue }: { graph: Graph, queue: number[] }): { hasCycle: boolean, visited: Set<number> } => {
  // @ts-ignore
  const visited = new Set<number>()
  for (const visitedNode of queue) {
    if (visited.has(visitedNode)) {
      console.log('visitedNode ', visitedNode)
      return { hasCycle: true, visited }
    }
    visited.add(visitedNode)

    const edgeList = graph[visitedNode] ?? []
    for (const edge of edgeList) {
      queue.push(edge)
    }
  }

  return { hasCycle: false, visited }
}

const validateCycle = (graph: number[][]): boolean => {
  // @ts-ignore
  let verified = new Set()
  for (let vertexVisited = 0; vertexVisited < graph.length; vertexVisited++) {
    const edgeList = graph[vertexVisited]
    if (verified.has(vertexVisited) || edgeList.length === 0) continue
    console.log(verified)
    const queue = [vertexVisited]
    const { visited, hasCycle: subGraphHasCycle} = depthFirstSearch({ graph, queue })
    if (subGraphHasCycle) return true
    // @ts-ignore
    verified = new Set<number>([...visited, ...verified])
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
