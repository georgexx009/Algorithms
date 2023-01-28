### Input

- sorted array
  - distinct values
- target value

### Output

- return index if target found
- return index where it would be if was inserted

### Requirements

- `O(log n)`

### Examples

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6,7], target = 2
Output: 1

Example 5:
Input: nums = [1,3,5,6,7,9,11,13], target = 12
Output: 7

Example 6:
Input: nums = [1,3,5,6], target = 4
Output: 2

Example 7:
Input: nums = [1,3,5,6,8], target = 7
Output: 4


Example 8:
Input: nums = [1,3,5,6,8], target = 9
Output: 5

Example 9:
Input: nums = [2,3,5,6,8], target = 1
Output: 0

Example 10:
Input: nums = [3,5,7,9,10], target = 8
Output: 3