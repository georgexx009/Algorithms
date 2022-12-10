you need to get all the possible paths.

With recursion is like start in 1,1 and move on until m,n and then by returning keep counting the number of times returned.

It is like applying DFS but finishing when reaching m,n.

This algorithm could be expensive so it should have memoization.
A map that saves the count to get how many paths beyond are there.