// Stacks - Last In First Out
//functions: push, pop, peek, length

//Is Palindrome

const isPalindrome = (word) => {
  let letters = [];

  let revWord = "";

  //put letters of word into stack, w, i, l, l, etc etc
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  //pop off the stack, so last letter pops first, so f, f, e, n, etc
  for (let i = 0; i < word.length; i++) {
    revWord += letters.pop();
  }

  return revWord === word; //will return false for willneff, true for racecar
};

// console.log(isPalindrome("willneff"));

//Creates a Stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack,
  //this.count will point to the end index of stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    //check for nothing in stack
    if (this.count === 0) return undefined;

    //when something is popped, the count should point to the end, so --
    this.count--;
    //result === last item in stack
    let result = this.storage[this.count];
    //delete popped item
    delete this.storage[this.count];
    //return popped item
    return result;
  };

  //allows us to see the size of our stack
  this.size = function () {
    return this.count;
  };

  //Returns the value at the end of the stack,
  //allows us to 'peek' at our last value
  this.peek = function () {
    //this.count-1,
    //because REMEMBER, this.count always points to where the new item would be added at, so when we add item 7, this.count would be pointing at the item 8 place...
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

//stack is [1]
myStack.push(1);
//stack is [1, 2]
myStack.push(2);
//shows [2]
myStack.peek();
//removes [2]
myStack.pop();
//shows [1]
myStack.peek();
