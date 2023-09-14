class LongestCommonSubstring {
    longestCommonSubstr(S1: string, S2: string, n: number, m: number) {

        //Input: S1 = "ABCDGH", S2 = "ACDGHR", n = 6, m = 6
        //Output: 4

        //     A    B    C    D    G    H
        // A [ 0 ,  0 ,  0 ,  0,   0,   0  ]
        // C [ 0 , -1 , -1 , -1 , -1 , -1  ]
        // D [ 0 , -1 , -1 , -1 , -1 , -1  ]
        // G [ 0 , -1 , -1 , -1 , -1 , -1  ]
        // H [ 0 , -1 , -1 , -1 , -1 , -1  ]
        // R [ 0 , -1 , -1 , -1 , -1 , -1  ]

        // If we have S1="" or S2="", then length of longest common substring will be 0.
        // So, we will initialize first row and fist column with zero.
        // We will start calculation from i=0 of string S1 and j=0 of S2.
        // largest common substring between (0th,i-1th) index of S1 and (0th,j-1th) index of S2
        // will be stored at index (i,j) in DP. 
        // DP[i][j] = 1 + DP[i-1][j-1], if S1[i-1] == S2[j-1]
        // DP[i][j] = 0, if S1[i-1] != S2[j-1]


        let DP = [];

        for (let i = 0; i < n + 1; i++) {
            let arr = [];

            for (let j = 0; j < m + 1; j++) {
                arr.push(-1)
            }

            DP.push(arr);
        }

        this.calculate(S1, S2, n, m, DP);

        let maximum = 0;

        for (let i = 0; i < n + 1; i++) {
            for (let j = 0; j < m + 1; j++) {
                if (DP[i][j] > maximum) {
                    maximum = DP[i][j];
                }
            }
        }

        return maximum;
    }

    calculate(S1: string, S2: string, n: number, m: number, DP: number[][]) {
        //Intializing 0th row with 0
        for (let i = 0; i < m; i++) {
            DP[0][i] = 0;
        }

        //Initializing 0th column with 0
        for (let i = 0; i < n; i++) {
            DP[i][0] = 0;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (S1[i - 1] == S2[j - 1]) {
                    DP[i][j] = 1 + DP[i - 1][j - 1];
                }
                else {
                    DP[i][j] = 0;
                }

            }
        }
    }
}