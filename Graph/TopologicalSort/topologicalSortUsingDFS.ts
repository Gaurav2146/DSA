
//=====================================Topological sort using DFS =========================================
//We can compute a topological sort for a disconnected graph, provided it's a Directed Acyclic Graph (DAG).

// Definition - Topological sort returns vertices of a graph in sorted order in which they are present in graph
// at the time of DFS.
// If there are two vertex u and v and there is a directed edge from u to v then u will always come before v
// in the topological sort.

// Topological sort can be done on only that graph which is Directed and Acyclic.
//Create Adjecency list for your graph.
//Create a STACK.
//Create a visited node map which will tell if the node is visisted or not.
//Find the nodes in the graph which has indegree equal to 0.
//Add all the nodes with indegree equal to zero in an array.
//Loop through this array and Do DFS traversal for each node of the graph if it is not visited.
//Imp - when we will return after DFS call from any node then we will put that node data in the stack.
//POP the stack and the result will be a valid topological sort.
//===========================================================================================================


class topologicalSortUsingDFS {

    adjecencyList: Map<number, number[]>;
    constructor() {
        this.adjecencyList = new Map<number, number[]>();
    }

    create(u: number, v: number) {
        if (this.adjecencyList.has(u)) {
            let list = this.adjecencyList.get(u);
            list.push(v);
        }
        else {
            this.adjecencyList.set(u, [v]);
        }
    }

    topologicalSort() {

        let indegree = this.claculateIndegree();

        console.log(indegree, "indegree");

        let arrayWithZeroIndegree = [];

        for (let [key, value] of indegree) {
            if (value == 0)
                arrayWithZeroIndegree.push(key);
        }

        console.log(arrayWithZeroIndegree, "arrayWithZeroIndegree");

        let visisted = new Map<number, boolean>();

        let stack: number[] = [];

        for (let val of arrayWithZeroIndegree) {
            visisted.set(val, true);
            this.DFS(val, visisted, stack);
            stack.push(val);
        }

        return stack;
    }

    DFS(node: number, visisted: Map<number, boolean>, stack: number[]) {
        let adj = this.adjecencyList.get(node);
        if (adj && adj.length > 0) {
            for (let i = 0; i < adj.length; i++) {
                if (visisted.has(adj[i]) == false) {
                    visisted.set(adj[i], true);
                    this.DFS(adj[i], visisted, stack);
                    stack.push(adj[i]);
                }
            }
        }
    }

    claculateIndegree() {
        let indegree = new Map<number, number>();

        for (let [key, value] of this.adjecencyList) {
            //We are doing this to insert nodes with 0 indegree in the map
            if (indegree.has(key) == false) {
                indegree.set(key, 0);
            }

            for (let i = 0; i < value.length; i++) {
                if (indegree.has(value[i])) {
                    let val = indegree.get(value[i]);
                    val++;
                    indegree.set(value[i], val);
                }
                else {
                    indegree.set(value[i], 1);
                }
            }
        }
        return indegree;
    }
}

let topologicalSort = new topologicalSortUsingDFS();

topologicalSort.create(1, 2);
topologicalSort.create(2, 3);
topologicalSort.create(3, 4);
topologicalSort.create(4, 5);
topologicalSort.create(1, 5);

console.log(topologicalSort.adjecencyList, "Graph");

console.log(topologicalSort.topologicalSort());