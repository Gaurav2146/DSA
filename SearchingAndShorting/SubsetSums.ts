// Given a sequence of N (1 ≤ N ≤ 34) numbers S1, ..., SN (-20,000,000 ≤ Si ≤ 20,000,000), determine how many
// subsets of S (including the empty one) have a sum between A and B (-500,000,000 ≤ A ≤ B ≤ 500,000,000), inclusive.

// Input
// The first line of standard input contains the three integers N, A, and B. The following N lines contain
// S1 through SN, in order.

// Output
// Print a single integer to standard output representing the number of subsets satisfying the above property.
// Note that the answer may overflow a 32-bit integer.

// Example
// Input:
// 3 -1 2
// 1
// -2
// 3

// Output:
// 5
// The following 5 subsets have a sum between -1 and 2:

// 0 = 0 (the empty subset)
// 1 = 1
// 1 + (-2) = -1
// -2 + 3 = 1
// 1 + (-2) + 3 = 2


class SubsetSums {

    calculate(input: number[], lowerLimit: number, higherLimit: number) {

        let sizeOfFistHalf = Math.floor((input.length) / 2);
        let sizeOfSecondHalf = input.length - sizeOfFistHalf;

        let s1 = new Array(sizeOfFistHalf);
        let s2 = new Array(sizeOfSecondHalf);

        for (let i = 0; i < sizeOfFistHalf; i++) {
            s1[i] = input[i];
        }
        for (let i = sizeOfFistHalf; i < input.length; i++) {
            s2[i] = input[i];
        }

        let allSubsequenceforS1: number[][] = [];

        this.findSubsequenceSum(s1, allSubsequenceforS1, 0);

        let allSubsequenceSumforS2: number[][] = [];

        this.findSubsequenceSum(s2, allSubsequenceSumforS2, 0);

        console.log(allSubsequenceforS1, "allSubsequenceforS1");

        console.log(allSubsequenceSumforS2, "allSubsequenceSumforS2");

    }

    findSubsequenceSum(arr: number[], allSubsequence: number[][], index: number) {

        if (index >= arr.length) {
            return;
        }

        let length = allSubsequence.length;

        for (let i = 0; i < length; i++) {
            let subsequence = allSubsequence[i];
            subsequence.push(arr[index]);
            allSubsequence.push(subsequence);
        }

        allSubsequence.push([arr[index]]);

        this.findSubsequenceSum(arr, allSubsequence, index + 1);
    }

}

console.log(new SubsetSums().calculate([1, -2, 3], -1, 2));