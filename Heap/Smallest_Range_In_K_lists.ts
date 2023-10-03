//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
*/

class Smallest_Range_In_K_lists {
    findSmallestRange(KSortedArray:number[][], n:number, k:number) {
        //code here

        if (n == 0 || k == 0) {
            return [];
        }

        let pointers = [];

        for (let i = 0; i < k; i++) {
            pointers.push(0);
        }

        let min = 0;
        let max = 0;

        let range = [min, max];

        for (let i = 0; i < k; i++) {
            if (KSortedArray[i][0] < KSortedArray[min][0]) {
                min = i;
            }

            if (KSortedArray[i][0] > KSortedArray[max][0]) {
                max = i;
            }
        }

        range = [KSortedArray[min][pointers[min]], KSortedArray[max][pointers[max]]];

        while (pointers[min] < n - 1) {

            let rowWithMinValue:number = min;

            let columnOfMinValue:number = pointers[rowWithMinValue];

            pointers[rowWithMinValue] = columnOfMinValue + 1;


            for (let i = 0; i < k; i++) {
                if (KSortedArray[i][pointers[i]] < KSortedArray[min][pointers[min]]) {
                    min = i;
                }

                if (KSortedArray[i][pointers[i]] > KSortedArray[max][pointers[max]]) {
                    max = i;
                }
            }

            let new_range = [KSortedArray[min][pointers[min]], KSortedArray[max][pointers[max]]];

            if (new_range[1] - new_range[0] < range[1] - range[0]) {
                range = new_range;
            }
        }

        return range;
    }
}






