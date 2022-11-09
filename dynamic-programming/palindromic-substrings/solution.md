###trying to understand already done approach

we have two types of length, pair and odd, what is the difference between searching
palindromes between them?

- with pair substring length, you are comparing the chars from the first middle of the string against the second middle
without having a middle char between them
- with odd substring length, you have the middle char
- with pair substring length, you only move the right pointer in the substring, since the
upper iteration moves the left pointer
- with odd substring length, you move the left pointer also as the middle char is 
chosen by the upper iteration

this generates a time complexity of 2*N square

can we decrease it to N square?
verify the value from i

---
### optimized solution
1. iterate through the string
2. in each char we're going to search for even and odd palindromes
3. for even, right is increment by one, is like compare right and left without
a char in the middle, keep moving and comparing until they are not equal
4. for odd, right and left start in the same point, compare them, this first step will
fulfill the case to count single char palindromes, expand to each side and keep comparing
until they are not equal
