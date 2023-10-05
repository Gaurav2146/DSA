// Next permutation

// 3 8 2 7 3 8 3 7 6 5

// 3 8 2 7 3 8 5 7 6 3 - swap 5 with 3.

// 3 8 2 7 3 8 5 3 6 7 - sort array from index 7 to n-1 where n is length of number.

// loop from right to left and parse elements one by one.

// if you find any element less than current element traversing from right to left.

// swap that smallet element from current element.

// Initialize swapped_left_index with -1.

// Record the swapped left index and let it be swapped_left_index and store current index in
// swapped_right_index and break from the inner loop loop.

// If you find any swapped_left_index greater than current swapped_left_index value then update the
// value of swapped_left_index with max value.

// After iteration all array elements from right to left come ot of the loop.

// swap the elements present in swapped_left_index and swapped_right_index.

// If swapped_left_index = -1 that means number is in sorted order in decreasing order.

// In this case sort the array in increasing order and return the answer.

// else, In resultant array take data from 0 to swapped_left_index and take sorted data of the
// array from index (swapped_index + 1) to (n-1) and return the result.

class nextPermutation {
    nextPermutation(arr: number[], n: number) {
        //code here

        let swapLeftIndex = -1;
        let swapRightIndex = n - 1;

        for (let i = n - 1; i >= 1; i--) {

            let swapIndex = i - 1;

            while (swapIndex >= 0) {
                if (arr[swapIndex] < arr[i]) {

                    if (swapIndex > swapLeftIndex) {
                        swapLeftIndex = swapIndex;
                        swapRightIndex = i;
                        break;
                    }
                }
                swapIndex--;
            }
        }

        if (swapLeftIndex != -1) {
            let temp = arr[swapLeftIndex];
            arr[swapLeftIndex] = arr[swapRightIndex];
            arr[swapRightIndex] = temp;
        }

        let res;

        if (swapLeftIndex == -1) {
            res = arr.sort((a, b) => a - b);
        }
        else {
            let firstHalfOfArr = arr.slice(0, swapLeftIndex + 1);
            let secondHalfOfArr = arr.slice(swapLeftIndex + 1, n);
            secondHalfOfArr.sort((a, b) => a - b);
            res = [...firstHalfOfArr, ...secondHalfOfArr];
        }

        return res;
    }
}





