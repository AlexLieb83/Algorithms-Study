// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

titleCase("I'm a little tea pot");
