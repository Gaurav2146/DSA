

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
}



//Creating Adjecency List

let adjecencyList = new AdjecencyList();

adjecencyList.addEdge(0, 1, false);
adjecencyList.addEdge(0, 2, false);
adjecencyList.addEdge(1, 3, false);
adjecencyList.addEdge(3, 2, false);

console.log(adjecencyList.list);