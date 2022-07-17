//Linked Lists
//elements stored in node - element holds data and ref to next node

function linkedList() {
  let length = 0;
  let head = null;

  //create new nodes
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);
    //if no nodes in list yet, make this node the head
    if (head === null) {
      head = node;
      //if there are other nodes in the list
    } else {
      let currentNode = head;

      //while we have more nodes in list, go to the next node
      //this will take us to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //at end of the list, add our new node
      currentNode.next = node;
    }
    //add 1 to list, because we added a new element
    length++;
  };
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;

    //when we get to our element to remove
    //then we just need to reset our head to the node after
    //this will remove
    if (currentNode.element === element) {
      head = currentNode.next;
      //while the node we are on is not the node to remove
      //then go to the next node
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //if we are to remove 2 from [1,2,3]
      //then prevNode.next [1->] needs to be [3]
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    //index = -1 because linked lists always start
    // null -> head
    let index = -1;

    while (currentNode) {
      index++;
      //search through nodes, if we find match, return that index
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    //if element isn't found
    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;

    //count up to the index and move through nodes
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    //once we reach the correct index, return element
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    //index bigger than list length
    if (index > length) {
      return false;
    }

    //if adding to front of list, then node next will be the current and head will be node passed in
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      //find correct index
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //when at correct index, this will place our node into line
      node.next = currentNode;
      previousNode.next = node;
    }
    //when added our length increases
    length++;
  };

  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    //can't remove negative index or longer index than length
    if (index < 0 || index >= length) {
      return null;
    } else {
      //move down list to index
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //this will create a link between prev and next, therefore removing the node we want to remove
      previousNode.next = currentNode.next;
    }
    //length-- because we removed
    length--;
    //return node that we are removing
    return currentNode.element;
  };
}

let conga = new linkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size()); //5
console.log(conga.removeAt(3)); //'Cat'
console.log(conga.size()); //4
console.log(conga.indexOf("Puppy")); //1
