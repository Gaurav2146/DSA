export class SpiralMatrix {

    metrix: number[][];

    constructor(metrix: number[][]) {
        this.metrix = metrix;
    }

    printSpiral() {

        let top = 0;
        let bottom = this.metrix?.length - 1;
        let left = 0;
        let right = this.metrix?.[0]?.length - 1;

        if (top != undefined && bottom != undefined && left != undefined && right != undefined) {
            this.print(top, bottom, left, right)
        }

    }

    print(top: number, bottom: number, left: number, right: number) {

        if (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                console.log(this.metrix[top][i])
            }

            for (let i = top + 1; i <= bottom; i++) {
                console.log(this.metrix[i][right])
            }

            for (let i = right - 1; i >= left; i--) {
                console.log(this.metrix[bottom][i])
            }

            for (let i = bottom - 1; i >= top + 1; i--) {
                console.log(this.metrix[i][left])
            }

            top++;
            left++;
            bottom--;
            right--;
            this.print(top, bottom, left, right);

        }
    }

}

let obj = new SpiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
//let obj = new SpiralMatrix([]);
// console.log("row", obj.metrix.length);
// console.log("column", obj.metrix[0].length);
obj.printSpiral();
