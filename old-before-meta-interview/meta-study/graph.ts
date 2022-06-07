class GraphNode<T> {
  value: T
  adjacentNodes: GraphNode<T>[]

  constructor(
    value: T,
    adjacentNodes: GraphNode<T>[] = []
  ) {
    this.value = value
    this.adjacentNodes = adjacentNodes
  }

  addAdjacentNode(node: GraphNode<T>): void {
    this.adjacentNodes.push(node)
  }
}

export class Queue<T> {
  constructor(private queue: T[] = []) {}

  isEmpty() {
    return this.queue.length === 0
  }

  add(element: T) {
    this.queue = [...this.queue, element]
  }

  remove() {
    return this.queue.shift()
  }
}

class Graph<T> {
  nodes: Map<T, GraphNode<T>> = new Map()

  constructor() {}

  addNode(value: T) {
    let node = this.nodes.get(value)
    if (node) return node

    node = new GraphNode<T>(value)
    this.nodes.set(value, node)
    return node
  }

  addEdge(source: T, target: T) {
    const targetNode = this.nodes.get(target)
    const sourceNode = this.nodes.get(source)
    if (!targetNode || !sourceNode) return false

    sourceNode.addAdjacentNode(targetNode)
  }

  private depthFirstSearchAux(node: GraphNode<T>, visited: Map<T, boolean>) {
    if (!node) return

    console.log('visited: ', node.value)

    visited.set(node.value, true)

    node.adjacentNodes.forEach(node => {
      if (!visited.has(node.value)) {
        this.depthFirstSearchAux(node, visited)
      }
    })
  }

  depthFirstSearch() {
    const visited: Map<T, boolean> = new Map()
    this.nodes.forEach(node => {
      if (!visited.has(node.value)) {
        this.depthFirstSearchAux(node, visited)
      }
    })
  }

  private breathFirstSearchAux(nodeStart: GraphNode<T>, visited: Map<T, boolean>) {
    if (!nodeStart) return
    const queue: Queue<GraphNode<T>> = new Queue()
    queue.add(nodeStart)

    while(!queue.isEmpty()) {
      const node = queue.remove()
      if (!node) return
      console.log('visited: ', node.value)
      visited.set(node.value, true)

      node.adjacentNodes.forEach(node => {
        if (!visited.has(node.value)) {
          queue.add(node)
          visited.set(node.value, true)
        }
      })
    }
  }

  breathFirstSearch() {
    const visited: Map<T, boolean> = new Map()
    this.nodes.forEach(node => {
      if (!visited.has(node.value)) {
        this.breathFirstSearchAux(node, visited)
      }
    })
  }

  // try to only have one visited set
  private breathFirstSearchAuxV2(currentNode: GraphNode<T>, visited: Map<T, boolean>) {
    if (!currentNode) return
    const queue = new Queue<GraphNode<T>>()
    queue.add(currentNode)

    while(!queue.isEmpty()) {
      const nodeToCheck = queue.remove()
      if (!nodeToCheck) return
      visited.set(nodeToCheck.value, true)
      console.log('visited: ', nodeToCheck.value)

      nodeToCheck.adjacentNodes.forEach(node => {
        if (!visited.has(node.value)) {
          queue.add(node)
          visited.set(node.value, true)
        }
      })
    }
  }


  breathFirstSearchV2() {
    const visited = new Map<T, boolean>()
    this.nodes.forEach(node => {
      if (!visited.has(node.value)) {
        this.breathFirstSearchAuxV2(node, visited)
      }
    })
  }
}

const graph = new Graph<string>()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'E')
graph.addEdge('A', 'F')
graph.addEdge('B', 'E')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
graph.addEdge('D', 'E')
graph.addEdge('C', 'B')

// console.log('breath')
// graph.breathFirstSearch()

console.log('graph file - depth')
graph.depthFirstSearch()
