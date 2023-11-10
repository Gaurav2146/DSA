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
    }

    findStronglyConnectedComponents()
    {
        let stronglyConnectedComponents:number[][] = [];
        let low = new Array(this.size).fill(-1);
        let discovery = new Array(this.size).fill(-1);
        let stack:number[] = [];
        let stackFlag = new Array(this.size).fill(false);
        let vertex = this.findVerticesOfGraph();
        let src = vertex[0];
        this.traverse(src,low,discovery,stack,stackFlag,0,stronglyConnectedComponents);
        return stronglyConnectedComponents;
    }

    findVerticesOfGraph(): number[] {
        let vertices = [];
        for (let i = 0; i < this.size; i++) {
            vertices.push(i);
        }
        return vertices;
    }

    traverse(vertex:number,low:number[],discovery:number[],stack:number[],stackFlag:boolean[],time:number,stronglyConnectedComponents:number[][])
    {
       low[vertex] = time;
       discovery[vertex] = time;
       stack.push(vertex);
       stackFlag[vertex] = true;

       for(let i=0; i < this.size; i++)
       {
          if(this.adjecencyMetrix[vertex][i] == 1)
          {
            //Cross Edge
            if( discovery[i] != -1 && stackFlag[i] == false)
            {
                continue;
            } 
            //Back edge
            else if(discovery[i] != -1 && stackFlag[i] == true)
            {
               low[vertex] = Math.min(discovery[i],low[vertex]);
            }
            else if(discovery[i] == -1)
            {
                this.traverse(i,low,discovery,stack,stackFlag,time+1,stronglyConnectedComponents);

                low[vertex] = Math.min(low[vertex],low[i]);
            }
          }
       }

        //Current node is root node
        if(low[vertex] == discovery[vertex])
        {
            console.log(vertex , "Root Node");
            let component = [];

            while( stack.length > 0 && stack[stack.length - 1] != vertex)
            {
                let ele = stack.pop();
                stackFlag[stack.length - 1] = false;
                component.push(ele);
            }

            if(stack.length > 0)
            {
                let vertex_ele = stack.pop();
                stackFlag[stack.length - 1] = false;
                component.push(vertex_ele);
            }

            stronglyConnectedComponents.push(component);
        } 
    }
}


let tarjan_algo_for_articulation_point = new ArticulationPoint_using_Tarjan_Algorithm(8);

tarjan_algo_for_articulation_point.addEdge(0, 1);
tarjan_algo_for_articulation_point.addEdge(1, 2);
tarjan_algo_for_articulation_point.addEdge(2, 0);
tarjan_algo_for_articulation_point.addEdge(2, 3);
tarjan_algo_for_articulation_point.addEdge(3, 4);
tarjan_algo_for_articulation_point.addEdge(4, 5);
tarjan_algo_for_articulation_point.addEdge(5, 6);
tarjan_algo_for_articulation_point.addEdge(6, 4);
tarjan_algo_for_articulation_point.addEdge(4, 7);
tarjan_algo_for_articulation_point.addEdge(6, 7);

console.log("Strongly connected components are ", tarjan_algo_for_articulation_point.findStronglyConnectedComponents());