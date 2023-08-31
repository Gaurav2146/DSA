//===================================== BFS ================================================================
//Create Adjecency list for your graph.
//Create a parent map which will store the parent node data of each node.
//Create a visited node map which will tell if the node is visisted or not.

// 1. If we find any adjecent node which is already visited but it is not the parent node then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is the parent node then we will ignore that node.
//===========================================================================================================

//===================================== DFS ================================================================
//Create Adjecency list for your graph.
//Create a parent map which will store the parent node data of each node.
//Create a visited node map which will tell if the node is visisted or not.

// 1. If we find any adjecent node which is already visited but it is not the parent node then it's a cycle.
// 2. If we find any adjecent node which is vsited but it is the parent node then we will ignore that node.
//===========================================================================================================

export class AdjecencyList {

    list: Map<Number, Number[]>;

    constructor() {
        this.list = new Map<Number, Number[]>();
    }

    addEdge(u: number, v: number, dir: boolean) {

        if (!dir) {
            if (this.list.has(u)) {
                let arrU = this.list.get(u);
                arrU?.push(v);

            }
            else {
                this.list.set(u, [v]);
            }

            if (this.list.has(v)) {
                let arrV = this.list.get(v);
                arrV?.push(u);
            }
            else {
                this.list.set(v, [u]);
            }
        }
        else {
            if (this.list.has(u)) {
                let arrU = this.list.get(u);
                arrU?.push(v);

            }
            else {
                this.list.set(u, [v]);
            }
        }
    }


    datectCycle() {

    }
}



//Creating Adjecency List

let adjecencyList = new AdjecencyList();

adjecencyList.addEdge(0, 1, false);
adjecencyList.addEdge(0, 2, false);
adjecencyList.addEdge(1, 3, false);
adjecencyList.addEdge(3, 2, false);

console.log(adjecencyList.list);