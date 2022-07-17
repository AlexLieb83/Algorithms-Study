//Trie Data Structure - stores data in steps - each step is a node
//often used to store words
//ex use case: validate that word is in dictionary
//each step would represent a letter

//        root
//       /  |  \
//      b   d   s
//     /   /     \
//    a    o      e
//   / \  / \     \
//  l  t  l  r     n
// /     /  / \   / \
// l    l  k   m  d  s
//                    \
//                     e

let Node = function () {
  //Map holds key value pairs
  //the keys will be all the letters inside that node
  this.keys = new Map();
  //is this the end letter in word?
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {
  //create the root
  this.root = new Node();

  this.add = function (input, node = this.root) {
    //if we are at the end of the word that we passed in, set that node to be the end
    if (input.length === 0) {
      node.setEnd();
      return;
      //check if there's NOT a node with that letter in it already
    } else if (!node.keys.has(input[0])) {
      //set/create that letter/node in keys Map
      //b
      node.keys.set(input[0], new Node());
      //recursive, will add substr of each letter into keys as well, creating letter/node until length is 0
      //-> a -> l -> l
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  //check if word is in Trie/Dictionary - checking one letter at a time
  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      //if first letter isn't found, return false
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        //if first letter is found, then set node to that letter
        node = node.keys.get(word[0]);
        //then take that letter off of our word, so we can search for the next letter
        word = word.substr(1);
      }
    }
    //if it has the last letter and it is the end of the word, return true, the word IS in the trie, else false, not in trie
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function () {
    let words = new Array();
    let search = function (node, string) {
      //if there are still more letters to look through
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          //use our search function, then concat
          //so b -> ba -> bal -> ball
          search(node.keys.get(letter), string.concat(letter));
        }
        //if end, push word to our array
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        //when node.keys.size === 0 - aka - last letter of branch
        //push it to string
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

let myTrie = new Trie();

myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");

console.log(myTrie.isWord("doll")); //true
console.log(myTrie.isWord("dor")); //false
console.log(myTrie.isWord("dorf")); //false
console.log(myTrie.print());
// [ 0: "ball"
// 1: "bat"
// 2: "doll"
// 3: "dork"
// 4: "dorm"
// 5: "do"
// 6: "send"
// 7: "sense" ]
