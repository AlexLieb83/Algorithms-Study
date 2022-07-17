//Graphs - collections of things, and relationships b/t them
//data are called nodes/vertices
//relationships/connections b/t them are called edges

//example of Undirected Graph - Social Network
//node = People
//edges = Friend, Family, Not

//example of Directed Graph - Internet
//node = webpages
//edges = links to other pages

//Adjacency List

//a - b - c
//so a connected to b
//b connected to a, c
//c connected to b
let undirectedGraph = {
  NodeA: ["NodeB"],
  NodeB: ["NodeA", "NodeC"],
  NodeC: ["NodeB"],
};

//Adjacency Matrix
let adjMatrixUndirected = [
  [0, 1, 0], // a is connected to b
  [1, 0, 1], // b is connected to a, c
  [0, 1, 0], // c is connected to b
];

let adjMatrixDirected = [
  //this would show a <- b <- c
  [0, 0, 0], // a connects to nothing
  [1, 0, 0], // b connects to a
  [0, 1, 0], // c connects to b
];

//Incidence Matrix
//rows represent nodes
//columns represent edges

let incidenceMatrixDirected = [
  [1, 0, -1, 1], //a -> b, a <- c, a -> d
  [-1, 1, 0, 0], //b <- a, b -> c
  [0, -1, 1, 0], //c <- b, c -> a
  [0, 0, 0, -1], //d <- a
];
