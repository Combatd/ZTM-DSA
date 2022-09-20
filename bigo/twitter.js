/*
Manager: We need you to build a feature that allows users to 
retrieve their oldest and latest tweet
*/

// Find first, then find last...
// We don't know how our tweets are stored, but it could be an array, or it could be a linked list

const array = ['hi', 'my', 'teddy'];
array[0]; // O(1)
array[array.length - 1]; // O(1)

/*
Manager: I want you to look at every tweet.
Within each tweet, it is an object with keys and values
*/

const tweets = [
  {
    tweet: 'hi',
    date: 2012,
  },
  {
    tweet: 'bye',
    date: 2013,
  },
]

/*
You: Hmm, we might need to store these tweets in a different format...
This will be expensive in terms of memory to store tweets in arrays

Maybe a Doubly Linked List with a head and tail?
*/

'hello'.length; // JavaScript String has a .length attribute on every string, so it is O(1) lookup