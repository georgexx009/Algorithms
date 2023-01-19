Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

```javascript
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

---
## Solution

The key is to use a min-heap. The solution has 3 steps:
1. Map the numbers frequency - O(N)
2. Fill the heap (init heap, heap length = K) - O(K) average. O(KlogK) worst (in case all inserts needs heapify) 
3. Compare the heap root to always have the highest frequencies in the heap O((N-K)logK) -> O(NlogK)

To insert a new node and replace the root, first delete the root and then insert.

Delete root: switch root with last element, remove last element, heapify down the root.

Insert node: add element in the last position, heapify up.

Base on leetcode, this solution beats: 61.94%

Time complexity: O(N) + O(KlogK) + O(Nlogk) = O(N logK)

### Why min-heap?
Since we're looking for the highers, we need to know which one is the smallest until that point in the iteration,
so accessing the smallest in a min-heap is O(1) time. And for inserting is log(k) where k is the heap length.

---
## Alternative solution
Iterate the nums array and in each iteration update the min-heap. Source is in this repo

Increment value in heap-node: balance down. Since it's incrementing could be is higher than the child.

Insert node: balance up.

This solution is slow, base on leetcode, it only beats 17.5%

Time complexity: O(N log k), but if N=K, then is O(N) because there is no need to insert anything
to the heap and balance it.

### Why is slower than the other solution?
Because for each number a balance happened. So the above solution takes O(N log k), and N 
is the number of different numbers we have (like cardinality). And in this solution, it is a 
yes or yes to balance the heap in every number from nums.

But in overview, it is the same time complexity.


---
##Notes to find the solution (random notes while working on solution)

At first sign you though on using a map to save the frequency and then get the 
higher numbers. This would be brute force. Getting the highest numbers
from the object could be expensive, more than saving the frequency. 

O(N + N) the second N could be higher since while iterating the object, we need to
think in only saving the highest numbers.

A second solution would be sorting the list and find the k elements.
O(nlon(n) + O(k))

Another solution would be to use a heap. Each node has a frequency and value
property. The value to balance the heap would be the frequency from each node.
And when getting the highest numbers we get the ones from the root.

