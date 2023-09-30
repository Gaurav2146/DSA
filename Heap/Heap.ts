
class Heap {

    constructor() { }

    buildHeap(array: number[]) {

        let totalNumberOfNodes = array.length;
        let maximumIndexOfParentNodes = Math.floor(totalNumberOfNodes / 2) - 1;

        for (let i = maximumIndexOfParentNodes; i >= 0; i--) {
            this.heapifyOrPerculateDown(array, i);
        }

    }

    getMax(array: number[]): number {
        return array[0];
    }

    add(array: number[], data: number) {
        array.push(data);
        this.perculateUp(array, array.length - 1);
    }

    extractMax(array: number[]): number {
        let max = array[0];
        array[0] = array[array.length - 1];
        array.pop();
        this.heapifyOrPerculateDown(array, 0);
        return max;
    }

    perculateUp(array: number[], index: number) {
        let parent = Math.ceil((index + 1) / 2) - 1;
        if (parent > 0 && array[index] > array[parent]) {
            let temp = array[index];
            array[index] = array[parent];
            array[parent] = temp;
            this.perculateUp(array, parent)
        }
    }

    heapifyOrPerculateDown(array: number[], index: number) {

        let leftChild: number = index * 2 + 1;
        let rightChild: number = index * 2 + 2;

        if ((leftChild > 0 && leftChild < array.length && array[leftChild] > array[index])
            || (rightChild > 0 && rightChild < array.length && array[rightChild] > array[index])) {

            if (!array[rightChild]) {
                let temp = array[leftChild];
                array[leftChild] = array[index];
                array[index] = temp;
                this.heapifyOrPerculateDown(array, leftChild)

            } else if (array[leftChild] > array[rightChild]) {

                let temp = array[leftChild];
                array[leftChild] = array[index];
                array[index] = temp;
                this.heapifyOrPerculateDown(array, leftChild)
            }
            else {

                let temp = array[rightChild];
                array[rightChild] = array[index];
                array[index] = temp;
                this.heapifyOrPerculateDown(array, rightChild)
            }
        }
    }
}

let heap = new Heap();
let array = [3, 1114, 5, 61111, 33, 145, 32, 1231111]
heap.buildHeap(array);//O(n)

while (array.length > 0) {
    // console.log(array, "Heap");
    let max = heap.extractMax(array);
    console.log(max, "max element extracted");
}

//                     3
//                 /       \
//               1114       5
//                /  \     /  \
//              61111 33  145  32
//                /
//            1231111



// Lift algorithm
//1.Which lift to assign (already done)

//2.Once Assigned how lift will maintain floor details
//Answer - If user want to go in upward direction then destination floor will be pushed in min heap.
//If user want to go in downward direction then destination floor will be pushed in max heap.
//Lift will use min heap if it is moving in upward direction.
//Lift will use max heap if it is moving in downward direction.




