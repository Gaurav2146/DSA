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
    size:number;

    constructor(size:number)
    {
        this.adjecencyMetrix = new Array(size);
        this.size = size;

        for(let i=0; i < this.adjecencyMetrix.length; i++)
        {
            this.adjecencyMetrix[i] = new Array(size).fill(0);
        }
    }

    addEdge(u:number,v:number)
    {
        this.adjecencyMetrix[u][v] = 1;
    }

    findTranspose()
    {
        for(let i=0; i < this.adjecencyMetrix.length; i++)
        {
            for(let j=0; j < this.adjecencyMetrix.length; j++)
            {
                let temp = this.adjecencyMetrix[i][j];
                this.adjecencyMetrix[i][j] = this.adjecencyMetrix[j][i];
                this.adjecencyMetrix[j][i] = temp;
            }
        }
    }

    findStronglyConnectedComponents():number[][]
    {
        let vertices = this.findVerticesOfGraph();

        console.log(vertices , "vertices");

        let visisted = new Array(this.size).fill(false);
        let stack = [];

        //Do DFS on graph
        for(let i=0; i < vertices.length; i++)
        {
            if(visisted[i]==false)
            {
                visisted[i] = true;
                this.dfs(i,visisted,stack);
                stack.push(i);
            } 
        }

        console.log(stack , "stack");

        //Transposing the graph
        this.findTranspose();

        // Reintializing visited array
        visisted = new Array(this.size).fill(false);

        let stronglyConnectedComponents:number[][] = [];

        //Do DFS Again on graph
        // while(stack.length > 0)
        // {
          


        // }

        return stronglyConnectedComponents;
    }

    dfsAgain(vertex:number,visisted:boolean[])
    {
        for(let i=0; i < this.size; i++)
        {
            if(this.adjecencyMetrix[vertex][i] == 1 && visisted[i] == false)
            {
                visisted[i]=true;
                this.dfsAgain(i,visisted);
            }
        }
    }

    dfs(vertex:number,visisted:boolean[],stack:number[])
    {
        for(let i=0; i < this.size; i++)
        {
            if(this.adjecencyMetrix[vertex][i] == 1 && visisted[i] == false)
            {
                visisted[i]=true;
                this.dfs(i,visisted,stack);
                stack.push(i);
            }
        }
    }

    findVerticesOfGraph():number[]
    {
        let vertices = [];

        for(let i=0; i < this.adjecencyMetrix.length; i++)
        {
           vertices.push(i);
        }

        return vertices;
    }




}

let kosaraju = new Kosaraju(8);

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

// console.log(kosaraju.adjecencyMetrix , "adjecency matrix");

console.log(kosaraju.findStronglyConnectedComponents());