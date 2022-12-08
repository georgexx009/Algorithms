Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

`O(n log(n))`

Numbers can be repeated.

---
##Solution

- use an array with length = nums.length
  - fill them with 1 (because a single number is a count for 1)
  - array objective: save the longest count subsequence until that point (index)
- iteration: current against all previous ones
  - if the current one is higher than the previous one
  - and previous one count + 1 is higher than the current one count
    - then assign the previous one count + 1 to the current one count
  - in other words: check if taking the count from the previous one plus the 
  current one is going to increment, only if the current num if higher

---

##Notes to find the solution

Save tuples (higherNum, lengthCount)

Iterate, [[10, 1], [9,1], [5,2]]

---

Save in object?

`[higherNum]: lengthCount`

```
10,1
9,1
2,1
5,2 // because we already have a two in other keys
3,2
7,3
101,5
```

partial approach answer: in N position, go back from 0 -> N and verify which ones are smaller than current N number
AND keep saving the higher, if you find a smaller number, reset the final counter from that iteration

---

New approach

- iterate array - N
  - add single to new subobj- obj[`${N} - ${N}`]
  - iterate obj
    - run rule
  - merge obj and subobj
- get higher val from obj

Rule:

```
if N > max:
  subobj[`${min} - ${N}`] = obj[`${min} - ${max}`] + 1
```
