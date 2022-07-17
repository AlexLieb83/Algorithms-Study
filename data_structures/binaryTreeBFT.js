// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// //      a
// //     / \
// //    b   c
// //  /  \   \
// // d    e   f

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //Breadth-First Traversal - a, b, c, d, e, f
// ************Big O(n)

// const bft = (root) => {
//   const queue = [root];
//   let result = [];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     result.push(current.val);
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return result;
// };

// console.log(bft(a));

//******Find Target in Binary Tree
//Write a function, bfs(root, target), that takes in the root of a binary tree and a target value.
//The function should return a boolean indicating whether or not the tree contains the target value

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// //      a
// //     / \
// //    b   c
// //  /  \   \
// // d    e   f

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const bfs = (root, target) => {
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val === target) return true;

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return false;
// };

// console.log(bfs(a, "e")); //true
// console.log(bfs(a, "z")); //false

//******Find Total Sum in Binary Tree
//Write a function, sumTree(root), that takes in the root of a binary tree.
//The function should return the total sum of all values in the tree. You can assume the tree only contains number values.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// //      3
// //     / \
// //    2   7
// //  /  \   \
// // 4    -2   5

// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(5);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const sumTree = (root) => {
//   const queue = [root];
//   let result = 0;

//   while (queue.length > 0) {
//     const current = queue.shift();
//     result += current.val;

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return result;
// };

// console.log(sumTree(a)); // 19
