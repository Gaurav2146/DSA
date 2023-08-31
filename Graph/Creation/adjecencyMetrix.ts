
export class AdjecencyMatrix {

    metrix: number[][];

    constructor(size: number) {

        this.metrix = [];

        for (let i = 0; i <= size; i++) {

            let row: number[] = [];

            for (let j = 0; j <= size; j++) {
                row.push(0);
            }

            this.metrix.push(row);
        }
    }

    addEdge(u: number, v: number, dir: boolean) {

        if (dir) {
            this.metrix[u][v] = 1;
        }
        else {
            this.metrix[v][u] = 1;
            this.metrix[u][v] = 1;
        }

    }
}

let adjecencyMatrix = new AdjecencyMatrix(3);

adjecencyMatrix.addEdge(0, 1, false);
adjecencyMatrix.addEdge(0, 2, false);
adjecencyMatrix.addEdge(1, 3, false);
adjecencyMatrix.addEdge(3, 2, false);

for (let i = 0; i < adjecencyMatrix.metrix.length; i++) {
    console.log(adjecencyMatrix.metrix[i]);
}