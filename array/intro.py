import math

strings = ['a', 'b', 'c', 'd']

# 4 * 4 = 16 bytes of storage

strings[2] # Hey, go to the array called "strings" and grab the 3rd element.

# #append - allows us to add something at the end of the array
strings.append('e') # Time: O(1)

# #pop - remove the last element of the array
strings.pop() # Time: O(1)
strings.pop() # Time: O(1)

# #unshift is in javascript, but python needs #insert
# ['x', 'a', 'b', 'c']
strings.insert(0, 'x') # Time: O(n)

# #splice in javascript, but we can #insert in python
strings.insert(math.floor(len(strings) / 2), 'alien') # Time: O(n) as we need to shift the other elements of the array

print(strings)