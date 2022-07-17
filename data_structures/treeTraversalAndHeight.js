//Binary Search Tree - Traversal & Height
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  //creates root node
  constructor() {
    this.root = null;
  }
  //add data to tree
  add(data) {
    const node = this.root;
    //if first node, becomes root node
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      //use recursion to place child node
      const searchTree = function (node) {
        //if data is less than node data
        if (data < node.data) {
          //find null node
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
          //if data is greater than node data then work down right side tree
        } else if (data > node.data) {
          //find null node
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
          //if data equal, don't add to tree
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  //since our min values will go toward the left, we just need to search down left until we hit a null node
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  //since our max values will go toward the right, we just need to search down right until we hit a null node
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      //if we are looking for a number smaller than root, then search left, else search right
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      //if we reach a dead end, then data doesn't exist
      if (current === null) return null;
    }
    //return current which should equal what we are searching for
    return current;
  }
  isPresent(data) {
    let current = this.root;
    //while current !== null - aka - while current exists
    while (current) {
      //if found, return true
      if (data === current.data) {
        return true;
      }
      //if data we are looking for is less than current node, look futher left
      if (data < current.data) {
        current = current.left;
        //if it is more, look further right
      } else {
        current = current.right;
      }
    }
    //data isn't found so false
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      //if tree is empty, return null
      if (node === null) {
        return null;
      }
      //if we found node with data
      if (data === node.data) {
        //node has no children, return null - which sets node = null - aka - removes node
        if (node.left === null && node.right === null) {
          return null;
        }
        //node has no left child - then we will return node.right, replacing the node we want to remove, with it's right child
        if (node.left === null) {
          return node.right;
        }
        //node has no right child - then we will return node.left, replacing the node we want to remove, with it's left child
        if (node.right === null) {
          return node.left;
        }
        //node has two children - we want to go to the right node, and then grab the smallest node of that right child
        //this is the trick to keeping the tree still in tact

        //go to the right child of the node we want to remove
        let tempNode = node.right;
        //then we want to set our tempNode to the left child of that right node
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        //replace the node data, with the data of the left child that we found
        node.data = tempNode.data;
        //this will structure our right side of the tree, to replace parent
        node.right = removeNode(node.right, tempNode.data);
        return node;
        //this will restructure our left side
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
        // this will restructure our right side
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  //return true/false
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  //recursive
  findMinHeight(node = this.root) {
    //if tree is empty
    if (node === null) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.left);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node === null) return -1;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        //if node.left exists, keep going down the left nodes, when node.left doesn't exist, meaning we have reached the end of the left, push the data
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        //if node.right exists, keep going down right nodes, pushing into result array
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        //push node data, then if
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      //add root to que
      Q.push(this.root);
      //while elements left in que
      while (Q.length > 0) {
        //remove from front, add to result
        let node = Q.shift();
        result.push(node.data);
        //then go down the left path, pushing to q
        if (node.left !== null) {
          Q.push(node.left);
        }
        //then go down the right path, pushing to q
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      //return result
      return result;
      //if nothing in tree, return null
    } else {
      return null;
    }
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(18);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

//numerical order - left, self, right
console.log("inOrder: " + bst.inOrder());

//reading whole tree - self, left, right
console.log("preOrder: " + bst.preOrder());

//children first - left, right, self
console.log("postOrder: " + bst.postOrder());

//BFS - Breath first Search - self, left, right
console.log("levelOrder: " + bst.levelOrder());
