class Graph {
  constructor() {
    this.adjacentList = {};
    this.numberOfNodes = 0;
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      console.log("Node already exists!");
      return;
    }

    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      console.log("One or both of the nodes do not exist!");
      return;
    }

    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);

    for (const node of allNodes) {
      console.log(`${node} --> ${this.adjacentList[node].join(" ")}`);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
