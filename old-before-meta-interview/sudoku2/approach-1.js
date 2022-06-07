function solution(grid) {
    const sudokuArray = [...Array(9).keys()];
    const trackingNumbers = {
        rowTracking: {},
        columnTracking: {},
        subGridTracking: {},
    }
    let validGrid = true
    sudokuArray.forEach(positionInArrayRow => {
        sudokuArray.forEach(positionInArrayColumn => {
            const positionRowInGame = positionInArrayRow + 1
            const positionColumnInGame = positionInArrayColumn + 1
            const positionSubGridInGame = `${Math.trunc(positionRowInGame/3)},${Math.trunc(positionColumnInGame/3)}`

            // check row ------------------------------------------------------------
            const numberInserted = `${grid[positionInArrayRow][positionInArrayColumn]}`

            if (!(`row-${positionRowInGame}` in trackingNumbers.rowTracking)) {
                trackingNumbers.rowTracking = {
                    ...trackingNumbers.rowTracking,
                    [`row-${positionRowInGame}`]: {}
                }
            }
            if (!(`col-${positionColumnInGame}` in trackingNumbers.columnTracking)) {
                trackingNumbers.columnTracking = {
                    ...trackingNumbers.columnTracking,
                    [`col-${positionColumnInGame}`]: {}
                }
            }
            if (!(`subGrid-${positionSubGridInGame}` in trackingNumbers.subGridTracking)) {
                trackingNumbers.subGridTracking = {
                    ...trackingNumbers.subGridTracking,
                    [`subGrid-${positionSubGridInGame}`]: {}
                }
            }

            if (numberInserted !== '.') {
                console.log('positionInArrayRow:', positionInArrayRow)
                console.log('numberInserted:', numberInserted)
                console.log('positionRowInGame:', positionRowInGame)
                if (numberInserted in trackingNumbers.rowTracking[`row-${positionRowInGame}`] ||
                    numberInserted in trackingNumbers.columnTracking[`col-${positionColumnInGame}`] ||
                    numberInserted in trackingNumbers.subGridTracking[`subGrid-${positionSubGridInGame}`]) {
                    validGrid = false
                    return
                } else {
                    trackingNumbers['rowTracking'][`row-${positionRowInGame}`][numberInserted] = true
                    trackingNumbers['columnTracking'][`col-${positionColumnInGame}`][numberInserted] = true
                    trackingNumbers['subGridTracking'][`subGrid-${positionSubGridInGame}`][numberInserted] = true
                }
                console.log(trackingNumbers)
            }
        })
    })

    return validGrid
}

const sudokuWrong = [
    ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

const sudokuValid = [
    ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '2'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

const result = solution(sudokuValid)
console.log(result)
