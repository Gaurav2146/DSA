// Given a rod of length N inches and an array of prices, price[]. price[i] denotes the value of a piece of length i. Determine the maximum value obtainable by cutting up the rod and selling the pieces.

// Note: Consider 1-based indexing.

// Example 1:

// Input:
// N = 8
// Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
// Output:
// 22
// Explanation:
// The maximum obtainable value is 22 by 
// cutting in two pieces of lengths 2 and 
// 6, i.e., 5+17=22.
// Example 2:

// Input:
// N=8
// Price[] = {3, 5, 8, 9, 10, 17, 17, 20}
// Output: 
// 24
// Explanation: 
// The maximum obtainable value is 
// 24 by cutting the rod into 8 pieces 
// of length 1, i.e, 8*price[1]= 8*3 = 24. 
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function cutRod() which takes the array A[] and its size N as inputs and returns the maximum price obtainable.

// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 ≤ N ≤ 1000
// 1 ≤ Ai ≤ 105


class RodCutting {
    cutRod(price: number[], n: number) {

        let row = n + 1;
        let column = price.length + 1;

        //code here
        let DP = new Array(row);

        for (let i = 0; i < row; i++) {
            DP[i] = new Array(column);

            for (let j = 0; j < column; j++) {
                DP[i][j] = -1;
            }
        }

        return this.solve(price, n, 0, DP);
    }

    solve(price: number[], n: number, index: number, DP: number[][]) {
        //code here
        if (n == 0) {
            return 0;
        }

        if (n < 0) {
            return Number.MIN_SAFE_INTEGER;
        }

        if (index >= price.length) {
            return Number.MIN_SAFE_INTEGER;
        }

        if (DP[n][index] != -1) {
            return DP[n][index];
        }

        let res1 = price[index] + this.solve(price, n - (index + 1), index, DP);
        let res2 = this.solve(price, n, index + 1, DP);
        DP[n][index] = Math.max(res1, res2);
        return DP[n][index];
    }
}
