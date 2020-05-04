
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // find neighbor node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighbor node
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]) {
                        // updating new smallest distance to neighbor
                        distances[nextNode.node] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNode.node] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
} 

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.Dijkstra('A', 'E'));
