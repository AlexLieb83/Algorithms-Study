// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  //slice the string basically grabbing the same length of chars as the target ending, then compare the actual letters to see if they match or not.
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
