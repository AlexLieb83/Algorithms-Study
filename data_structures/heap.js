//Heaps
//very efficient for sorting

//left child: i * 2
//right child: i * 2 + 1
//parent: Math.floor(i / 2)

let MinHeap = function () {
  let heap = [null];

  this.insert = function (num) {
    heap.push(num);
    //if there is more than one item in heap
    if (heap.length > 2) {
      //find last index
      let idx = heap.length - 1;
      //while heap at the last index is less than parent (refer to parent equation comment)
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        //if we have NOT reached root node
        if (idx >= 1) {
          //switch node we inserted with parent node
          [heap[Math.floor(idx / 2)]],
            (heap[idx] = [heap[idx], heap[Math.floor(idx / 2)]]);

          //if parent node is not root node, index will be parent node equation
          //so basically we will keep going through and switching
          //node to it's parent node as long as it is smaller than parent node, once it becomes larger, break
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    //first node is set to smallest
    let smallest = heap[1];
    //more than one node in tree
    if (heap.length > 2) {
      //last node of array gets moved to first node
      heap[1] = heap[heap.length - 1];
      //shortens array by 1
      heap.splice(heap.length - 1);
      //if theres 3 nodes in tree, we just need to switch them and return smallest
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      //more than 3 nodes in tree
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      //while root is more than or equal to left or more than or equal to right
      //keep moving down until we get to the right spot
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

let MaxHeap = function () {
  let heap = [null];

  this.print = () => heap;

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
};
