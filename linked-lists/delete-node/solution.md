### Prerequisites
1. You are given the node to delete
2. You will not receive the Head
3. It is guaranteed
   1. all values are unique
   2. the given node to delete is not the last one

Result: remove node from the given node and pointers to this given node,
so it would be as never existed
---
### Your observations
1. the given node could be the first one
2. You cannot access the previous node
---
### Approach
1. Move back the values from the nodes and remove the tail
