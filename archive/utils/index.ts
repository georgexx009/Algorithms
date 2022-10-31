interface TEST<INPUT, EXPECTED> {
  input: INPUT,
  expected: EXPECTED
}

export interface IBaseTestingWorkspace <INPUT, EXPECTED> {
  tests: TEST<INPUT, EXPECTED>[]
  runTests: () => void
}

export const createTestingWorkspace = <I, E> (tests: IBaseTestingWorkspace <I, E>['tests'], callFunctionToTest: (arg: I) => E): IBaseTestingWorkspace <I, E> => {
  return {
    tests,
    runTests: function() {
      this.tests.forEach(test => {
        const result = callFunctionToTest(test.input)
        console.log('input: ', test.input)
        console.log('expected: ', test.expected)
        console.log('result: ', result)
        console.log(JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASSED' : 'FAILED')
        console.log('--------------------------------------------------------')
      })
    }
  }
}
