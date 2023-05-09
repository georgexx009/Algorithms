function minFallingPathSum(matrix: number[][]): number {
  let sumArr = [...matrix[0]];
  let smallestSum: number | null = null;

  for (let j = 1; j < matrix.length; j++) {
    const row = matrix[j];
    const newSumArr: number[] = [];

    for (let i = 0; i < row.length; i++) {
      let smallest = sumArr[i]
      if (i !== 0 && smallest > sumArr[i-1]) {
        smallest = sumArr[i-1]
      }

      if (i !== row.length-1 && smallest > sumArr[i+1]) {
        smallest = sumArr[i+1]
      }

      newSumArr[i] = smallest + row[i]
    }
    sumArr = newSumArr
  }
  
  let smallest = sumArr[0]
  for(let i=1; i < sumArr.length; i++) {
    if (smallest > sumArr[i]) {
      smallest = sumArr[i]
    }
  }
  return smallest!
}

const arrTest1: number[][] = [[1,2,4,3],[9,6,5,1],[9,7,8,9]]
console.log(minFallingPathSum(arrTest1))
console.log(minFallingPathSum([[1]]))
