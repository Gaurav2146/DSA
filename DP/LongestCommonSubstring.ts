// Given two strings. The task is to find the length of the longest common substring.

// Example 1:

// Input: S1 = "ABCDGH", S2 = "ACDGHR", n = 6, m = 6
// Output: 4
// Explanation: The longest common substring
// is "CDGH" which has length 4.
// Example 2:

// Input: S1 = "ABC", S2 "ACB", n = 3, m = 3
// Output: 1
// Explanation: The longest common substrings
// are "A", "B", "C" all having length 1.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function longestCommonSubstr() which takes the string S1, string S2 and their length n and m as inputs and returns the length of the longest common substring in S1 and S2.


// Expected Time Complexity: O(n*m).
// Expected Auxiliary Space: O(n*m).


// Constraints:
// 1<=n, m<=1000

class LongestCommonSubstringProblem {
    longestCommonSubstr(S1: string, S2: string, n: number, m: number) {
        //code here

        let DP = new Array(S1.length);

        for (let i = 0; i < DP.length; i++) {
            DP[i] = new Array(S2.length).fill(0);
        }


        for (let i = 0; i < DP.length; i++) {
            for (let j = 0; j < DP[0].length; j++) {

                if (S1[i] == S2[j]) {
                    if (i - 1 >= 0 && j - 1 >= 0) {
                        DP[i][j] = 1 + DP[i - 1][j - 1];
                    }
                    else {
                        DP[i][j] = 1;
                    }

                }
                else {
                    DP[i][j] = 0;
                }

            }
        }

        let max = 0;

        for (let i = 0; i < DP.length; i++) {
            for (let j = 0; j < DP[0].length; j++) {
                if (DP[i][j] > max) {
                    max = DP[i][j];
                }
            }
        }

        return max;
    }

}
