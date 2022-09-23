let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: () => {
    console.log('ahhhh!');
  }
}

console.log(user.age); // O(1)
user.spell = 'abrakadabra' // O(1)
console.log(user.spell); // O(1)
user.scream(); // O(1)

/*
hash collision
O(n / k), where k is the size of the hash table
Simplifies to O(n)
*/