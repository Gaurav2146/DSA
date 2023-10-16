// Two ﬁnite, strictly increasing, integer sequences are given. Any common integer between the two sequences constitute an intersection point. Take for example the following two sequences where intersection points are
// printed in bold:

// First= 3 5 7 9 20 25 30 40 55 56 57 60 62
// Second= 1 4 7 11 14 25 44 47 55 57 100
// You can ‘walk” over these two sequences in the following way:

// You may start at the beginning of any of the two sequences. Now start moving forward.
// At each intersection point, you have the choice of either continuing with the same sequence you’re currently on, or switching to the other sequence.
// The objective is ﬁnding a path that produces the maximum sum of data you walked over. In the above example, the largest possible sum is 450, which is the result of adding 3, 5, 7, 9, 20, 25, 44, 47, 55, 56, 57, 60, and 62

// Input
// Your program will be tested on a number of test cases. Each test case will be speciﬁed on two separate lines. Each line denotes a sequence and is speciﬁed using the following format:

// n v1 v2 ... vn
// Where n is the length of the sequence and vi is the ith element in that sequence. Each sequence will have at least one element but no more than 10,000. All elements are between -10,000 and 10,000 (inclusive).
// The last line of the input includes a single zero, which is not part of the test cases.

// Output
// For each test case, write on a separate line, the largest possible sum that can be produced.

// Sample
// Input:
// 13 3 5 7 9 20 25 30 40 55 56 57 60 62
// 11 1 4 7 11 14 25 44 47 55 57 100
// 4 -5 100 1000 1005
// 3 -12 1000 1001
// 0

// Output:
// 450
// 2100

class TheDoubleHelixSPOJ {

    calculate(arr1: number[], arr2: number[]) {

        // arr1.sort((a, b) => a - b);
        // arr2.sort((a, b) => a - b);

        let totalSum = 0;

        let arr1Sum = 0;
        let arr2Sum = 0;

        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {

            if (arr1[i] == arr2[j]) {

                if (arr1Sum > arr2Sum) {
                    totalSum = totalSum + arr1Sum;
                }
                else {
                    totalSum = totalSum + arr2Sum;
                }

                totalSum = totalSum + arr1[i];

                arr1Sum = 0;
                arr2Sum = 0;

                i++;
                j++;
            }

            if (arr1[i] < arr2[j]) {
                arr1Sum = arr1Sum + arr1[i];
                i++;
            }
            else {
                arr2Sum = arr2Sum + arr2[j];
                j++;
            }
        }

        console.log(i, "i", j, "j", arr1Sum, "arr1Sum", arr2Sum, "arr2Sum");
        let remaining_sum = 0;

        if (i == arr1.length) {

            while (j != arr2.length) {
                remaining_sum = remaining_sum + arr2[j];
                j++;
            }
        }
        else {
            while (i != arr1.length) {
                remaining_sum = remaining_sum + arr1[i];
                i++;
            }
        }

        console.log(remaining_sum, "remaining_sum");

        totalSum = totalSum + Math.max(arr1Sum, arr2Sum, remaining_sum);
        return totalSum;
    }
}

console.log(new TheDoubleHelixSPOJ().calculate([13, 3, 5, 7, 9, 20, 25, 30, 40, 55, 56, 57, 60, 62],
    [11, 1, 4, 7, 11, 14, 25, 44, 47, 55, 57, 100]));
