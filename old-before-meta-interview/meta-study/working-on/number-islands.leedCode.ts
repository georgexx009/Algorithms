/*
	grid: m x n - represents a map
	1: land
	0: water
	result: number of islands

	an island is surrounded by water
	you can assume all edges are surround by water
	an island is a group of 1s continuasly vertical and horizontal

	in diagonal are consider island?
*/

// can i see it as a graph?
// breath first search

// in an upper scope
// track counter
// track the visited nodes

// iterate nested loop
// if not visited
// if is land 1
// send node -> aux method
// increment counter

// aux method: apply BFS
// params: grid, start point, visited
// declare queue
// search until we found only 0s
// visited would be a pointer, so no need to return it
// return 1 or true - should only found 1 island

function countIslands(grid: string[][]): number {
  let islandCounter = 0
  // string format y,x -> string O(1), array (2) need small iteration
  const visitedNodes = new Map<string, boolean>()

  for (let y = 0; y < grid.length; y++) {
    const row = grid[y]
    for (let x = 0; x < row.length; x++) {
      const node = grid[y][x]

      if (node === '1' && !visitedNodes.has(`${y},${x}`)) {
        islandCounter++
        bfs(grid, y, x, visitedNodes)
      }
    }
  }

  return islandCounter
}

// bfs implementation
// declare in upper scope
// queue [][y,x]
// add start position -> queue
//
// loop until queue === 0
// 
// shift queue = current node
// check if not visited
// set as visited
// check surrounded nodes
// 
// how to get surrounded nodes
// there are 4 points
// [-1][]
// [][+1]
// [+1][]
// [][-1]
// 
// if a surrounded node (adjacent node) is 0
// only added to visited
// if it is 1
// added to visited and to queue


const surroundedNodesPosition = [[-1,0], [0,1], [1,0], [0,-1]]

// no need to return
// will finished when the island traverse is done (no more 1s found)
// visited will be updated
function bfs(grid: string[][], y: number, x: number, visited: Map<string, boolean>): void {
  // due to time I'm going to use an array as list
  const queue = [[y, x]]

  while (queue.length > 0) {
    let currentNode = queue.shift()
    if (!currentNode) return
    const nodePositionStr = `${currentNode[0]},${currentNode[1]}`
    if (!visited.has(nodePositionStr)) {
      visited.set(nodePositionStr, true)

      for (let surroundedPosition of surroundedNodesPosition) {
        const surroundedPositionY = currentNode[0] + surroundedPosition[0]
        const surroundedPositionX = currentNode[1] + surroundedPosition[1]

        if (surroundedPositionX >= 0 && surroundedPositionY >= 0
          && surroundedPositionX < grid[0].length && surroundedPositionY < grid.length) { // avoid nodes outside our grid
          const surroundedNode = grid[surroundedPositionY][surroundedPositionX]

          if (surroundedNode === '1') {
            queue.push([surroundedPositionY, surroundedPositionX])
          } else {
            visited.set(`${surroundedPositionY},${surroundedPositionX}`, true)
          }
        }
      }
    }
  }
}

// result: 5
// required: 1
const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log("first", countIslands(grid))
console.log("second", countIslands(grid2))