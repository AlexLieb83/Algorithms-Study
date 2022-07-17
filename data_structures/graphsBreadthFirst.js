//Graphs: Breadth-First Search
//find distance b/t two nodes in graph

//will output key value pairs
//key = node
//value = distance from root
function bfs(graph, root) {
  let nodesLength = {};

  //start all distances at infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLength[i] = Infinity;
  }

  //set root node distance to 0
  nodesLength[root] = 0;

  //our queue
  let queue = [root];
  let current;

  //traverse nodes
  while (queue.length != 0) {
    current = queue.shift();

    //get current nodes connected to current
    let currentConnected = graph[current];
    //used to keep track of nodes connected to current
    let neighborIndex = [];
    //grab index of connected node
    let index = currentConnected.indexOf(1);
    //push into neighbors if connected
    while (index != -1) {
      neighborIndex.push(index);
      //look for next one starting after previous connected
      index = currentConnected.indexOf(1, index + 1);
    }
    //loop through connected nodes and grab distances
    //push them to queue - to check their neighbors as well
    for (let j = 0; j < neighborIndex.length; j++) {
      if (nodesLength[neighborIndex[j]] === Infinity) {
        nodesLength[neighborIndex[j]] = nodesLength[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodesLength;
}

//connection = 1, no connection = 0
let exampleBFSGraph = [
  [0, 1, 1, 1, 0], //
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exampleBFSGraph, 1));
//{0: 2,          - so 0 is 2 nodes away from 1
// 1: 0,          - node 1 is 0 away, because its where we started
// 2: 1,          - 2 is 1 node away from 1
// 3: 3,          - 3 is 3 nodes away from 1
// 4: Infinity}   - 4 is infinity nodes away because 4 is only pointing

//towards 1
