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

        let s1 = [];
        let s2 = [];

        for (let i = 0; i < sizeOfFistHalf; i++) {
            s1.push(input[i]);
        }
        for (let i = sizeOfFistHalf; i < input.length; i++) {
            s2.push(input[i]);
        }

        let allSubsequenceSumforS1: number[] = [];
        let allSubsequenceSumforS2: number[] = [];

        this.findSubsequenceSum(s1, allSubsequenceSumforS1, 0);
        this.findSubsequenceSum(s2, allSubsequenceSumforS2, 0);

        allSubsequenceSumforS1.unshift(0);
        allSubsequenceSumforS2.unshift(0);

        console.log(allSubsequenceSumforS1, "allSubsequenceSumforS1");
        console.log(allSubsequenceSumforS2, "allSubsequenceSumforS2");

        let totalSubsetsWithSumInGivenRange = 0;

        for (let i = 0; i < allSubsequenceSumforS1.length; i++) {
            for (let j = 0; j < allSubsequenceSumforS2.length; j++) {

                if (allSubsequenceSumforS1[i] + allSubsequenceSumforS2[j] >= lowerLimit &&
                    allSubsequenceSumforS1[i] + allSubsequenceSumforS2[j] <= higherLimit) {
                    totalSubsetsWithSumInGivenRange++;
                }

            }
        }

        return totalSubsetsWithSumInGivenRange;
    }

    findSubsequenceSum(arr: number[], allSubsequence: number[], index: number) {

        if (index >= arr.length) {
            return;
        }

        let length = allSubsequence.length;

        for (let i = 0; i < length; i++) {
            allSubsequence.push(allSubsequence[i] + arr[index]);
        }

        allSubsequence.push(arr[index]);
        this.findSubsequenceSum(arr, allSubsequence, index + 1);
    }

}

console.log(new SubsetSums().calculate([1, -2, 3], -1, 2));