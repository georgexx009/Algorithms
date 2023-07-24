function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const limitx = obstacleGrid.length - 1
  const limity = obstacleGrid[0].length - 1
  let counter = 0

  const OBSTACLE = 1;
  // const EMPTY = 0;
  // // [x,y]
  // const queue = [[0,0]]
  // while (queue.length > 0) {
  //   const coordinates = queue.shift()
  //   if (coordinates) {
  //     const currentCell = obstacleGrid[coordinates[0]][coordinates[1]]
  //     if (currentCell !== OBSTACLE) {
  //       // add left, and down moves
  //       queue.push([coordinates[0] + 1, coordinates[1]])
  //     }
  //   }
  // }

  const traverse = (x: number, y: number) => {
    if (x > limitx || y > limity) {
      return
    }
    const currentCell = obstacleGrid[x][y]
    if (currentCell !== OBSTACLE) {
      traverse(x + 1, y) // move right
      traverse(x, y + 1) // move down
      if (x === limitx && y === limity) {
        counter++
      }
    }
  }
  traverse(0,0)
  return counter
}

console.log('should be 2: ', uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log('should be 0: ', uniquePathsWithObstacles([[0,0],[0,1]]))
console.log('should be 1: ', uniquePathsWithObstacles([[0]]))
console.log('should be 0: ', uniquePathsWithObstacles([[1]]))
console.log('should be 0: ', uniquePathsWithObstacles([[0,1]]))
