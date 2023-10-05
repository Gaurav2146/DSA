// Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
// Note: Array should start with a positive number and 0 (zero) should be considered a positive element.


// Example 1:

// Input: 
// N = 9
// Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2}
// Output:
// 9 -2 4 -1 5 -5 0 -3 2
// Explanation : Positive elements : 9,4,5,0,2
// Negative elements : -2,-1,-5,-3
// As we need to maintain the relative order of
// postive elements and negative elements we will pick
// each element from the positive and negative and will
// store them. If any of the positive and negative numbers
// are completed. we will continue with the remaining signed
// elements.The output is 9,-2,4,-1,5,-5,0,-3,2.

// Example 2:

// Input:
// N = 10
// Arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output:
// 5 -5 2 -2 4 -8 7 1 8 0
// Explanation : Positive elements : 5,2,4,7,1,8,0
// Negative elements : -5,-2,-8
// As we need to maintain the relative order of
// postive elements and negative elements we will pick
// each element from the positive and negative and will
// store them. If any of the positive and negative numbers
// are completed. we will continue with the remaining signed
// elements.The output is 5,-5,2,-2,4,-8,7,1,8,0.
// Your Task:  

// You don't need to read input or print anything. Your task is to complete the function rearrange() which takes the array of integers arr[] and n as parameters. You need to modify the array itself.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)



class AlternatePositiveAndNegativeNumbers {
    rearrange(arr: number[], n: number) {

        let negEle = 0;
        let posEle = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] >= 0) {
                posEle++;
            }
            else {
                negEle++;
            }
        }


        if (negEle > posEle) {

            this.movePositiveNumberToEnd(arr, n);

            let firstPositiveIndex = 0;

            for (let i = 0; i < n; i++) {
                if (arr[i] >= 0 && i % 2 != 0) {
                    firstPositiveIndex = i;
                    break;
                }
            }

            for (let i = 0; i < n; i++) {

                if (i % 2 != 0 && arr[i] < 0 && firstPositiveIndex < n) {

                    let temp = arr[firstPositiveIndex];
                    arr[firstPositiveIndex] = arr[i];
                    arr[i] = temp;

                    firstPositiveIndex = firstPositiveIndex + 1;
                }

            }

        }
        else {

            this.moveNegativeNumberToEnd(arr, n);

            let firstNegativeIndex = 0;

            for (let i = 0; i < n; i++) {
                if (arr[i] < 0 && i % 2 != 0) {
                    firstNegativeIndex = i;
                    break;
                }
            }

            for (let i = 0; i < n; i++) {

                if (i % 2 != 0 && arr[i] >= 0 && firstNegativeIndex < n) {

                    let temp = arr[firstNegativeIndex];
                    arr[firstNegativeIndex] = arr[i];
                    arr[i] = temp;

                    firstNegativeIndex = firstNegativeIndex + 1;
                }

            }
        }

        return arr;
    }

    movePositiveNumberToEnd(arr: number[], n: number) {
        //code here
        let high = 0;
        let low = n - 1;
        let mid = 0;

        while (high <= low) {
            if (arr[mid] >= 0) {
                let temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low--;
            }
            else {
                let temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high++;
                mid++;
            }
        }
    }

    moveNegativeNumberToEnd(arr: number[], n: number) {
        //code here
        let high = n - 1;
        let low = 0;
        let mid = 0;


        while (low <= high) {
            if (arr[mid] >= 0) {
                let temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
            }
            else {
                let temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high--;
            }
        }
    }

}


let arr = [-5, -2, 5, -2, 4, -7, 1, 8, 0, -8];

console.log(new AlternatePositiveAndNegativeNumbers().rearrange(arr, arr.length));