function minCut(s: string): number {

    let palindomDP: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        let arr = []
        for (let j = 0; j < s.length; j++) {
            arr.push(0);
        }
        palindomDP.push(arr);
    }

    claculatePalindromicSubstrings(s, palindomDP);

    if (palindomDP[0][s.length - 1] > 0) {
        return 0;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (palindomDP[i][j] == 0) {
                palindomDP[i][j] = Number.MAX_SAFE_INTEGER;
            }
            else if (palindomDP[i][j] > 0) {
                palindomDP[i][j] = 0;
            }
        }

    }


    let DP: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        let arr = []
        for (let j = 0; j < s.length; j++) {
            arr.push(Number.MAX_SAFE_INTEGER);
        }
        DP.push(arr);
    }



    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {

            if (palindomDP[i][j] == 0) {
                DP[i][j] = 0;
            }
            else if (DP[i][j] == Number.MAX_SAFE_INTEGER) {

                let min = Number.MAX_SAFE_INTEGER;

                for (let k = i; k < j; k++) {

                    let temp = 1 + Math.min(DP[i][k], palindomDP[i][k]) + Math.min(DP[k + 1][j], palindomDP[k + 1][j]);

                    if (temp < min) {
                        min = temp;
                    }
                }

                DP[i][j] = Math.min(min, DP[i][j]);
            }
        }

    }

    return DP[0][s.length - 1];

};

function claculatePalindromicSubstrings(s: string, palindromicDP: number[][]) {

    for (let i = 0; i < s.length; i++) {
        palindromicDP[i][i] = 1;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            palindromicDP[i][i + 1] = 2;
        }

    }

    for (let i = s.length - 1 - 2; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {

            if (s[i] == s[j] && palindromicDP[i + 1][j - 1] > 0) {

                palindromicDP[i][j] = 2 + palindromicDP[i + 1][j - 1];

            }
            else {
                palindromicDP[i][j] = 0;
            }

        }
    }

}