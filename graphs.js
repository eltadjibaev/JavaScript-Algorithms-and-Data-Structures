
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        while (this.adjacencyList[v].length) {
            const adjacentVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, adjacentVertex);
        }
        delete this.adjacencyList[v];
    }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Seul');
g.addVertex('Tashkent');
g.addVertex('Moscow');
g.addVertex('London');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Seul');
g.addEdge('Dallas', 'Tashkent');
g.addEdge('Tokyo', 'Moscow');
g.addEdge('Seul', 'London');
console.log(g);
g.removeVertex('Dallas', 'Tokyo');
console.log(g);