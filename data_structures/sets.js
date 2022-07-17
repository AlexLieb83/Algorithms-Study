//Sets
function mySet() {
  //will hold set
  let collection = [];

  //this method will check for the presence of an element and return true/false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //this method will add an element to the set, as long as it isn't already in the Set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from a set
  //ES6 deleete
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      //take out that element
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  //Methods NOT in ES6
  //this method will return the union of two Sets
  //will NOT contain duplicates
  this.union = function (otherSet) {
    let unionSet = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    //add each element of firstSet to unionSet
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //this method will return the intersection of two sets as a new Set
  //holds all same values from each Set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of two sets as a new set
  //holds all values that are diff in each set
  this.differenceSet = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //this method will test if the set is a subset of a diff set
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

// let setA = new mySet()
// let setB = new mySet()
// setA.add('a')
// setB.add('b')
// setB.add('a')
// setB.add('c')
// console.log(setA.subset(setB)) //return true, because setA - 'a', exists within set B, 'bac'
