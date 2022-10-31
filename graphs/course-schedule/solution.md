Seems that the solution is: find a cycle in graph represented as adjacency list 
without using recursion.

1. Count the in degrees for each vertex from the prerequisites
2. Search for zero degrees vertices, this will help you as start point to iterate.
3. Check the out degrees from the zero degrees vertices
   1. compare that the zero degrees outs, are the same ones as the ins that exist
   2. everytime a inDegree reach zero, add it to zero degrees

###Observation
If there are no zero degree vertices, it has a cycle. You could start from a zero degree
vertex and eliminate the edges until there is no more zero degree vertices.
####The rule [possibly]: If there are in degree vertices but not zero degree vertices, we have a cycle.
It is like eliminate all vertices that are not part of the cycle to try to find the cycle
and apply the rule.
