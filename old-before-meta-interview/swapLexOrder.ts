function solution(str: string, pairs: number[][]): string {
  // first pair
  // apply swap against str
  // compare to original

  const substituteChar = (target: string, position: number, newChar: string) => {
    const newTarget = target
    //console.log(newChar)
    return `${newTarget.slice(0, position) || ''}${newChar}${newTarget.slice(position + 1) || ''}`
  }

  const swap = (target: string, pair: number[]) => {
    let newTarget = target
    console.log('target: ', target)
    const position1 = pair[0] - 1
    const position2 = pair[1] - 1
    const temp = target[position1]
    newTarget = substituteChar(newTarget, position1, target[position2])
    newTarget = substituteChar(newTarget, position2, temp)
    return newTarget
  }

  let greater = str
  pairs.forEach(pair => {
    // swap
    const figherStr = swap(`${str}`, pair)
    console.log('pair: ', pair)
    console.log(`${greater} fighting by ${figherStr}`)

    for (var i = 0; i < str.length; i++) {
      if (greater[i] < figherStr[i]) {
        greater = figherStr
        break
      }
    }
  })

  return greater
}
