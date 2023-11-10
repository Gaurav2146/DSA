//========================================== TARJAN'S Algo ===============================================
// 1. Create 4 arrays.
// 2. Create DiscoveryTime array, Low Array, Parent Array and Visited array.
// 3. Start a timer with value 0.
// 4. On every new node procession inceasing the timer value by 1.
// 5. For every processed node, Discovery value will be timer value at that time and low value will also be
//    the timer value at that time/
// 6. For all adjecent nodes if node is not parent and is already visited with discovery time less than the
//    Low value of current node then update the low value with formula Math.min(Dis[adjecent],Low[node]).
// 7. While returning from DFS call update the Low value of parent also according the formula
//    Math.min(Low(child),Low(Node));
// 8. If at any point of time we found out that Low[Child] > Dis[Node] then there is a bridge from Node to
//    child.
// 9. In the above case, Node will be considered as articulation point if Node is not root and if it is
//    root then the Node should have more than one child.
// 10.More than one child means if you do DFS call from root then if you have to do DFS calls for more than
//    one adjecent nodes of root, then only it is called root has more than one child.
// 11.If you have more than one adjecent nodes from root node but while DFS call in a single call you are able
//    to visit all nodes then it will be considered as single child only.
//========================================================================================================

class ArticulationPoint_using_Tarjan_Algorithm
{
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

    findArticulationPoints()
    {
        let articulationPoints:number[] = [];
        let low = new Array(this.size).fill(-1);
        let discovery = new Array(this.size).fill(-1);
        let parent = new Array(this.size).fill(-1);
      
        let vertex = this.findVerticesOfGraph();
        let src = vertex[0];
        this.traverse(src,low,discovery,parent,0,articulationPoints);
        return articulationPoints;
    }

    findVerticesOfGraph(): number[] {
        let vertices = [];
        for (let i = 0; i < this.size; i++) {
            vertices.push(i);
        }
        return vertices;
    }

    traverse(vertex:number,low:number[],discovery:number[],parent:number[],time:number,articulationPoints:number[])
    {
       low[vertex] = time;
       discovery[vertex] = time;
       

       let child_count = 0;

       for(let i=0; i < this.size; i++)
       {
          if(this.adjecencyMetrix[vertex][i] == 1)
          {
            //Back edge
            if(discovery[i] != -1 && parent[vertex] != i)
            {
               low[vertex] = Math.min(discovery[i],low[vertex]);
            }
            else if(discovery[i] == -1)
            {
                child_count++;
                parent[i] = vertex;
                this.traverse(i,low,discovery,parent,time+1,articulationPoints);
                low[vertex] = Math.min(low[vertex],low[i]);
                

                //Checking For second condition of Articulation point
                if(low[i] > discovery[vertex] && low[vertex]!=discovery[vertex])
                {
                    articulationPoints.push(vertex);
                }
            }
          }
       }

        //Current node is root node
        if(low[vertex] == discovery[vertex])
        {
            if(child_count > 1)
            {
                articulationPoints.push(vertex);
            } 
        } 
    }
}


let tarjan_algo_for_articulation_point = new ArticulationPoint_using_Tarjan_Algorithm(8);

tarjan_algo_for_articulation_point.addEdge(0, 1);
tarjan_algo_for_articulation_point.addEdge(1, 2);
tarjan_algo_for_articulation_point.addEdge(0, 2);
tarjan_algo_for_articulation_point.addEdge(0, 3);
tarjan_algo_for_articulation_point.addEdge(3, 4);
tarjan_algo_for_articulation_point.addEdge(3, 5);

console.log("Articulation Points are ", tarjan_algo_for_articulation_point.findArticulationPoints());