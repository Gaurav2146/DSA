class Bridge_In_Graph {
    adjecencyMetrix: number[][];
    size: number;

    constructor(size: number) {
        this.adjecencyMetrix = new Array(size);
        this.size = size;

        for (let i = 0; i < this.adjecencyMetrix.length; i++) {
            this.adjecencyMetrix[i] = new Array(size).fill(0);
        }
    }

    addEdge(u: number, v: number) {
        this.adjecencyMetrix[u][v] = 1;
        this.adjecencyMetrix[v][u] = 1;
    }

    findBridges() {
        let bridges: number[][] = [];
        let low = new Array(this.size).fill(-1);
        let discovery = new Array(this.size).fill(-1);
        let parent = new Array(this.size).fill(-1);

        let vertex = this.findVerticesOfGraph();
        let src = vertex[0];
        this.traverse(src, low, discovery, parent, 0, bridges);
        return bridges;
    }

    findVerticesOfGraph(): number[] {
        let vertices = [];
        for (let i = 0; i < this.size; i++) {
            vertices.push(i);
        }
        return vertices;
    }

    traverse(vertex: number, low: number[], discovery: number[], parent: number[], time: number, bridges: number[][]) {
        low[vertex] = time;
        discovery[vertex] = time;

        for (let i = 0; i < this.size; i++) {
            if (this.adjecencyMetrix[vertex][i] == 1) {
                //Back edge
                if (discovery[i] != -1 && parent[vertex] != i) {
                    low[vertex] = Math.min(discovery[i], low[vertex]);
                }
                else if (discovery[i] == -1) {
                    parent[i] = vertex;
                    this.traverse(i, low, discovery, parent, time + 1, bridges);
                    low[vertex] = Math.min(low[vertex], low[i]);

                    if (low[i] > discovery[vertex]) {
                        bridges.push([i, vertex]);
                    }
                }
            }
        }
    }
}


let bridge_In_Graph = new Bridge_In_Graph(8);

bridge_In_Graph.addEdge(0, 1);
bridge_In_Graph.addEdge(1, 2);
bridge_In_Graph.addEdge(0, 2);
bridge_In_Graph.addEdge(0, 3);
bridge_In_Graph.addEdge(3, 4);


console.log("Bridges are ", bridge_In_Graph.findBridges());