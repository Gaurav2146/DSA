class Solution {
    LongestRepeatingSubsequence(str:string) {
        let str1 = str;
        let str2 = str;

        let dp:number[][] = [];

        for (let i = 0; i < str.length; i++) {
            let arr:number[] = [];

            for (let j = 0; j < str.length; j++) {
                arr.push(0);
            }

            dp.push(arr);
        }

        return this.findLongestCommonSubsequence(str1, str2, 0, 0, dp)
    }

    findLongestCommonSubsequence(str1:string, str2:string, n:number, m:number, dp:number[][]):number {

        if (n == str1.length || m == str1.length) {
            return 0;
        }

        if (dp[n][m] != 0) {
            return dp[n][m];
        }

        if (str1[n] == str2[m] && n != m) {
            dp[n][m] = 1 + this.findLongestCommonSubsequence(str1, str2, n + 1, m + 1, dp)
            return dp[n][m];
        }
        else {
            dp[n][m] = Math.max(
                this.findLongestCommonSubsequence(str1, str2, n, m + 1, dp),
                this.findLongestCommonSubsequence(str1, str2, n + 1, m, dp)
            )
            return dp[n][m];
        }

    }
}

