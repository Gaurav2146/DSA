
//===================================== BFS ================================================================
// Find Topological sorting of graph using kahan's algorithm.
// If the size of resulted topological sort is equal to total number of vertices in graph then you have
// calculated a valid topological sort and threfore graph do not contains cycles.
// If it is not same then graph contains cycle.
//===========================================================================================================

//===================================== DFS =================================================================
//Create Adjecency list for your graph.
//Create a DFS Visited map which will store the node on which DFS is already done.
//Create a visited node map which will tell if the node is visisted or not.

//Imp - when we will return after DFS call then we will mark DFS visited to false for that node.

// 1. If we find any adjecent node which is already visited and is also present is DFS visited map then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is not present in DFS visited then we will ignore that node.
//===========================================================================================================

class CycleDetectionInDirectedGraph
{
    adjecencyList:Map<number,number[]>;
    constructor()
    {
        this.adjecencyList = new Map<number,number[]>();
    }

    create(u:number,v:number)
    {
        if(this.adjecencyList.has(u))
        {
            let list = this.adjecencyList.get(u);
            list.push(v);
        }
        else
        {
            this.adjecencyList.set(u,[v]);
        }
    }

    findCycle():boolean
    {
        let visisted = new Map<number,boolean>();

        for(let[key,value] of this.adjecencyList)
        {
            if(visisted.has(key) == false)
            {
               visisted.set(key,true); 
               let res = this.dfs(key,visisted);
               visisted.set(key,false);

               if(res == true)
               {
                return res;
               }
            }
        }

        return false;
    }

    dfs(node:number , visisted:Map<Number,boolean>):boolean
    {
            let adjecent_nodes = this.adjecencyList.get(node);

            if(adjecent_nodes && adjecent_nodes.length > 0)
            {
                for(let i=0; i < adjecent_nodes.length; i++)
                {
                    if(visisted.has(adjecent_nodes[i]) && visisted.get(adjecent_nodes[i]) == true)
                    {
                        return true;
                    }
     
                    visisted.set(adjecent_nodes[i],true);
                    let res = this.dfs(adjecent_nodes[i],visisted);
                    visisted.set(adjecent_nodes[i],false);
    
                    if(res == true)
                    {
                        return res;
                    }
                }
            }

            return false;
    }
}

let cycleDetectionInDirectedGraph = new CycleDetectionInDirectedGraph();

cycleDetectionInDirectedGraph.create(1,2);
cycleDetectionInDirectedGraph.create(2,3);
cycleDetectionInDirectedGraph.create(3,4);
cycleDetectionInDirectedGraph.create(4,5);
cycleDetectionInDirectedGraph.create(1,5);

console.log(cycleDetectionInDirectedGraph.adjecencyList , "Graph");

console.log( cycleDetectionInDirectedGraph.findCycle());