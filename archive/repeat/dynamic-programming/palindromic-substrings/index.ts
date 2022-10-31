import { countSubstrings as myFirstApproach } from './my-first-approach'

interface IPalindromicSubstrings {
  tests: {
    input: string
    expected: number
  }[]
  runTests: () => void
}

const palindromicSubstringsTests: IPalindromicSubstrings = {
  tests: [
    {
      input: 'abc',
      expected: 3
    }, {
      input: 'aaa',
      expected: 6
    }, {
      input: 'aba',
      expected: 4
    }, {
      input: 'xabax',
      expected: 7
    }, {
      input: 'xabaxq',
      expected: 8
    }, {
      input: 'aaaa',
      expected: 10
    }, {
      input: 'aaaaaaa',
      expected: 28
    }, {
      input: 'bbccaacacdbdbcbcbbbcbadcbdddbabaddbcadb',
      expected: 64
    }, {
      input: 'baab',
      expected: 6
    }
  ],
  runTests: function() {
    this.tests.forEach(test => {
      const result = myFirstApproach(test.input)
      console.log('input: ', test.input)
      console.log('expected: ', test.expected)
      console.log('result: ', result)
      console.log(JSON.stringify(result) === JSON.stringify(test.expected) ? 'PASSED' : 'FAILED')
      console.log('--------------------------------------------------------')
    })
  }
}

palindromicSubstringsTests.runTests()
