
class Heap {

    constructor() { }

    buildHeap(array: number[]) {
        let totalNumberOfNodes = array.length;
        let maximumIndexOfParentNodes = Math.floor(totalNumberOfNodes / 2) - 1;

        console.log("maximumIndexOfParentNodes", maximumIndexOfParentNodes)

        for (let i = maximumIndexOfParentNodes; i >= 0; i--) {
            this.heapify(array, i);
        }
    }

    getMax(array: number[]): number {
        return array[0];
    }

    heapify(array: number[], index: number) {

        let leftChild: number = index * 2 + 1;
        let rightChild: number = index * 2 + 2;

        if ((leftChild > 0 && leftChild < array.length && array[leftChild] > array[index])
            || (rightChild > 0 && rightChild < array.length && array[rightChild] > array[index])) {

            if (!array[rightChild]) {
                let temp = array[leftChild];
                array[leftChild] = array[index];
                array[index] = temp;
                this.heapify(array, leftChild)

            } else if (array[leftChild] > array[rightChild]) {

                let temp = array[leftChild];
                array[leftChild] = array[index];
                array[index] = temp;
                this.heapify(array, leftChild)
            }
            else {

                let temp = array[rightChild];
                array[rightChild] = array[index];
                array[index] = temp;
                this.heapify(array, rightChild)
            }
        }
    }
}

let heap = new Heap();
let array = [3, 1114, 5, 61111, 33, 145, 32, 1231111]
heap.buildHeap(array);
console.log(array, "array");


//                     3
//                 /       \
//               1114       5
//                /  \     /  \
//              61111 33  145  32
//                /
//            1231111