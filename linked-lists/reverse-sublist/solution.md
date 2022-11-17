### Prerequisites
1. Given head
2. 2 integers, left and right
3. left <= right
4. reverse nodes from left to right

Result is the head from reversed list

---
### Your observations
1. 
---
### Approach
1. iterate through linked
   1. use current node so the last one is touch also
2. create previous node from reversed
3. create reversedHead as null
4. create reversedTail as null
5. verify first if left match
   1. only once, save this reference as tail reversed
   2. save next node
   3. point current to reversedHead (which firstly is null)
   4. reversedHead is now current
   5. current is now next
6. verify if match right
   1. previous node from reversed now points to reversedHead
   2. reversedTail now points to current

