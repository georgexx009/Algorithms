const { deepObjectWithArrays } = require('./objects-to-traverse')

// the example will trim all values from the object
// all values are strings

// not immutable
const arrayNotSupport = value => {
  // 1 - check if it is a value
  // if yes, perform the action to the value
  if (typeof value === 'string') {
    return value.trim()
  }

  // 2 - check if it is an object
  // if yes, apply traverse tactic
  if (typeof value === 'object') {
    // 3 - traverse tactic -----------
    // traverse current layer
    return Object.entries(value).reduce((newObject, [key, value]) => {
      newObject[key] = arrayNotSupport(value)
      return newObject
    }, {})
  }

  // 4 - default, no action
  return value
}

// not immutable
const arraySupport = value => {
  if (typeof value === 'string') {
    return value.trim()
  }

  if (typeof value === 'object') {
    // 3 - traverse tactic -----------
    // traverse current layer
    const treeCopy = Array.isArray(value) ? [...value] : { ...value }
    Object.entries(treeCopy).forEach(([key, value]) => {
      treeCopy[key] = arraySupport(value)
    })
    return treeCopy
  }

  // 4 - default, no action
  return value
}

const onlyTraverse = value => {
  if (typeof value === 'string') {
    console.log(value)
    return
  }

  if (typeof value === 'object') {
    // 3 - traverse tactic -----------
    // traverse current layer
    Object.values(value).forEach(value => {
      onlyTraverse(value)
    })
  }
  return
}

const algorithmMenu = {
  'array-not-support': arrayNotSupport,
  'array-support': arraySupport,
  'only-traverse': onlyTraverse,
}

const algorithmType = process.argv[2] || 'return-object'

console.log(algorithmMenu[algorithmType](deepObjectWithArrays))
