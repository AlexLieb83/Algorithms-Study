//Hash Tables

//max is the number of buckets to store values
//example of SIMPLE hash function
let hash = (string, max) => {
  let hash = 0;
  //loop over string, add charChode to hash
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  //return hash remainder buckets - this will give us the index to store our string
  return hash % max;
};

let HashTable = function () {
  let storage = [];

  //4 buckets
  const storageLimit = 4;

  //for utility
  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    //grab index from hash function
    let index = hash(key, storageLimit);
    //if nothing in this index, then put our key value into index
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
      //if something is already at this index
    } else {
      //do not insert
      let inserted = false;
      //go through each index and see if key already exists
      for (let i = 0; i < storage[index].length; i++) {
        //if key exists, set the new value
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      //if key doesn't exist, push the key value to the bucket
      //this will cause multiple entries into one bucket
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    let index = hash(key, storageLimit);
    //if length is === 1, then there's only one item in bucket
    //and the item in bucket === key, then delete that item
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
      //if it does not == 1, then we need to go through each item and match keys, so we can delete the correct item
      //0 index is key, 1 index is value
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    let index = hash(key, storageLimit);
    //if the item isn't in the table
    if (storage[index] === undefined) {
      return undefined;
    } else {
      //go through each element in bucket, when we find a key match, then return that item
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash("lieb", 10));

let ht = new HashTable();
ht.add("hailey", "person");
ht.add("callie", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");
ht.add("lieb", "person");
console.log(ht.lookup("hailey"));
ht.print();
