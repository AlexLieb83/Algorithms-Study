// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

//Solution
// First, we create a Set called compare from the items in our current array. This will create a data structure that holds the unique values from the array we’re comparing against our accumulator Set.

// We can iterate over a Set using a for ...of loop, similar to an array. If our accumulator Set has the item, we delete it. If not, we add it.

// We do this with each array in the array of arrays, adding and removing values from our accumulator Set until we’ve iterated through all of our arrays, and each of the values inside of them.

// The reducer function will return out our accumulated Set. We then just use the spread operator to convert it back into an array.

function sym(...args) {
  return [...args.reduce(reducer, new Set())];
}

function reducer(result, arr) {
  const compare = new Set(arr);

  for (let val of compare) {
    if (result.has(val)) {
      result.delete(val);
    } else {
      result.add(val);
    }
  }
  return result;
}

console.log(sym([1, 2, 3], [5, 4, 2, 0]));

// console.log(
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
// );

//The function diff() returns the symmetric difference of two arrays by picking out elements in parameterised arrays; arr1 and arr2.
// const diff = (arr1, arr2) => [
//   ...arr1.filter((item) => !arr2.includes(item)),
//   ...arr2.filter((item) => !arr1.includes(item)),
// ];

// //The main function sym() reduces given arrays utilising helper function diff() to a single array. Also, it temporary converts the result to Set to remove duplicates.
// const sym = (...args) => [...new Set(args.reduce(diff))];

// function sym() {
//   let args = [];

//   //we loop through all arguments passed and push them into an args, for us to compare
//   for (let i = 0; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }

//   //declare our diff function, take in two arrays
//   function diff(arr1, arr2) {
//     let result = [];

//     //loop through first array, for each item, if it does not return an index in the second array && does not return an index in the results, push to results
//     arr1.forEach((item) => {
//       if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
//         result.push(item);
//       }
//     });

//     //same thing for arr2, check array 1 and results for item, if they don't exist, push to
//     arr2.forEach((item) => {
//       if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
//         result.push(item);
//       }
//     });
//     //return result of diff function, which is all of the diff items
//     return result;
//   }
//   //run reduce(diff) on our original args arrays
//   return args.reduce(diff);
// }
