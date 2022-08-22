import { IBaseTestingWorkspace, createTestingWorkspace } from '../../../utils'
import { isSameTree } from './my-first-approach'

interface Input {
  tree1: number[]
  tree2: number[]
}

type Expected = boolean

interface ISameTree extends IBaseTestingWorkspace<Input, Expected> {}

const tests: ISameTree['tests'] = [
  {
    input: {
      tree1: [1,2,3],
      tree2: [1,2,3]
    },
    expected: true
  }
];

const callFunctionToTest = (input: Input): Expected => {


  return true
}

const testWorkspace = createTestingWorkspace(tests, callFunctionToTest)
