import { Queue } from "../graph"

class GraphNode<T> {
  value: T
  adjacentNodes: GraphNode<T>[] = []

  constructor(value: T) {
    this.value = value
  }

  addAdjacentNode(node: GraphNode<T>): void {
    this.adjacentNodes.push(node)
  }
}

function breadthFirstSearch<T>(node: GraphNode<T>) {
  const visited = new Map<T, boolean>()
  const queue = new Queue<GraphNode<T>>()
  
  queue.add(node)
  visited.set(node.value, true)

  while (!queue.isEmpty()) {
    const noteToCheck = queue.remove()
    if (!noteToCheck) return

    noteToCheck.adjacentNodes.forEach(adjacentNode => {
      if (!visited.has(adjacentNode.value)) {
        queue.add(adjacentNode)
        visited.set(adjacentNode.value, true)
      }
    })
  }
}

function depthFirstSearch<T>(node: GraphNode<T>, visited: Map<T, boolean> = new Map<T, boolean>()) {
  if (!node) return
  console.log('visited: ', node.value)
  visited.set(node.value, true)

  node.adjacentNodes.forEach(adjacentNode => {
    if (!visited.has(adjacentNode.value)) {
      depthFirstSearch(adjacentNode, visited)
    }
  })
}

// not working
function depthFirstSearchNoRecursion<T>(node: GraphNode<T>) {
  console.log('visited: ', node.value)
  const visited = new Map<T, boolean>()
  const queue = new Queue<GraphNode<T>>()
  queue.add(node)
  
  while (!queue.isEmpty()) {
    const currentNode = queue.remove()
    if (!currentNode) return
    visited.set(currentNode.value, true)

    node.adjacentNodes.forEach(adjacentNode => {
      if (!visited.has(adjacentNode.value)) {
        console.log('visited: ', adjacentNode.value)
        //visited.set(adjacentNode.value, true)
        queue.add(adjacentNode)
      }
    })
  }
}

const a = new GraphNode<string>('A')
const b = new GraphNode<string>('B')
const c = new GraphNode<string>('C')
const d = new GraphNode<string>('D')
const e = new GraphNode<string>('E')
const f = new GraphNode<string>('F')

a.addAdjacentNode(b)
a.addAdjacentNode(e)
a.addAdjacentNode(f)

b.addAdjacentNode(e)
b.addAdjacentNode(d)

d.addAdjacentNode(c)
d.addAdjacentNode(e)

c.addAdjacentNode(b)

// console.log('breath')
// breadthFirstSearch<string>(a)

console.log('graph node file - depth - recursive')
depthFirstSearch<string>(a)
console.log('graph node file - depth - NO recursive')
depthFirstSearchNoRecursion<string>(a)

