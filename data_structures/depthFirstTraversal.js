//Depth-First Traversal - FIRST IN LAST OUT
//travel as deep as we can, before we move across
//********* Big O(n) - time and space

// //      a
// //     / \
// //    b   c
// //  /  \   \
// // d    e   f      =  a, b, d, e, c, f

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const dft = (root) => {
//   const stack = [root];
//   let result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

//************Big O(n) - space and time
// const dftRecursion = (root) => {
//   //the tree is empty
//   if (root === null) return;
//   console.log(root.val);
//   dftRecursion(root.left);
//   dftRecursion(root.right);
// };

// dftRecursion(a);

//pre-order traversal - parent, then children
//self, left, right - abdecf
const preOrderTraversal = (root) => {
  if (root === null) return;

  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

//post-order traversal - children then parent
//left, right, self - debfca
const postOrderTraversal = (root) => {
  if (root === null) return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
};

//in-order traversal
//left, self, right - dbeacf

const inOrderTraversal = (root) => {
  if (root === null) return;
  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
};

console.log(pot(a));

//sumTree using DFT
// const sumTree = (root) => {
//   let result = 0
//   const stack = [root]

//   while(stack.length > 0){
//     const current = stack.pop()
//     result += current.val

//     if(current.left) stack.push(current.left)
//     if(current.right) stack.push(current.right)
//   }
//   return result
// }

//O(n) - time and space
const sumTreeRec = (root) => {
  //base case, empty tree
  if (root === null) return 0;
  //find all sums of left side + self + right side
  return sumTreeRec(root.left) + root.val + sumTreeRec(root.right);
};
