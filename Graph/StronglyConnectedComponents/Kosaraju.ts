//================================================== KOSARAJU ===========================================
// you need a Stack, Array which will contain strongly connected components and visited array.
//1. Do DFS Traversal of graph and at the time of returning from graph push the node in to stack.
//2. Find transpose of graph.
//3. While stack is not empty Pop node from stack and do DFS TRAVERSAL from that node on transposed graph
//   if the node is not visited.
//4. while returning from node, push the node in an array which will keep track of connected components.
//========================================================================================================

class Kosaraju{

    adjecencyMetrix:number[][];

    constructor(size:number)
    {
        this.adjecencyMetrix = new Array(size);

        for(let i=0; i < this.adjecencyMetrix.length; i++)
        {
            this.adjecencyMetrix[i] = new Array(size).fill(0);
        }
    }

    addEdge(u:number,v:number)
    {
        this.adjecencyMetrix[u][u] = 1;
    }

}


let kosaraju = new Kosaraju(8);

console.log(kosaraju.adjecencyMetrix , "adjecency matrix");

kosaraju.addEdge(0,1);
kosaraju.addEdge(1,2);
kosaraju.addEdge(2,0);
kosaraju.addEdge(2,3);
kosaraju.addEdge(3,4);
kosaraju.addEdge(4,5);
kosaraju.addEdge(5,6);
kosaraju.addEdge(6,4);
kosaraju.addEdge(4,7);
kosaraju.addEdge(6,7);

console.log(kosaraju.adjecencyMetrix , "adjecency matrix");