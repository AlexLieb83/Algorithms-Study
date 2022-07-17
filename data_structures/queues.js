//Queues - First in First Out - Line, Registers
function Queue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };

  //add elements to end of collection
  this.enqueue = function (element) {
    collection.push(element);
  };

  //removes item from front of que
  this.dequeue = function () {
    return collection.shift();
  };

  //show whats at the front of the queue
  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  //return true/false if queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c"); //q = ['a', 'b', 'c']
q.dequeue(); //q = ['b', 'c']

///////Priority Queue
function PriorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        //if priority is less than what we are checking, then put it before
        if (element[i] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let pq = new PriorityQueue();
pq.enqueue(["Alex", 2]); //['Alex']
pq.enqueue(["Hailey", 3]); //['Alex', 'Hailey']
pq.enqueue(["Callie", 1]); //['Callie', 'Alex', 'Hailey']
pq.enqueue(["Taylor Swift", 3]); //['Callie', 'Alex', 'Hailey', 'Taylor Swift']
pq.printCollection(); //['Callie', 'Alex', 'Hailey']
pq.dequeue(); //['Alex', 'Hailey']
pq.front();
pq.printCollection();
