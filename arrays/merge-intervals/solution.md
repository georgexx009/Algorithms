1. you need to sort the tuples by the first element
2. you need a working interval that will be previous one that will be merging,
if a out of range happens, this working interval will be cut
3. iterate through the intervals
   1. first check for inner joins
   2. then check for out of inner joins (out of range)
   3. if the first interval eats the next one, that merge will be done automatically
   the second interval won't be saved, only the first one
