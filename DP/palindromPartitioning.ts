function minCut(s: string): number {

    let palindomDP: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        let arr = [];

        for (let j = 0; j < s.length; j++) {
            arr.push(Number.MAX_SAFE_INTEGER);
        }
        palindomDP.push(arr);
    }

    claculatePalindromicSubstrings(s, palindomDP);

    if (palindomDP[0][s.length - 1] == 0) {
        return 0;
    }

    let min_cut = [];

    for (let i = 0; i < s.length; i++) {
        min_cut.push(Number.MAX_SAFE_INTEGER);
    }

    //"aab"

    for (let i = 0; i < s.length; i++) {

        if (palindomDP[0][i] == 0) {
            min_cut[i] = 0;
        }
        else {

            for (let j = i; j >= 1; j--) {
                if (palindomDP[j][i] == 0) {
                    if (min_cut[j - 1] + 1 < min_cut[i]) {
                        min_cut[i] = min_cut[j - 1] + 1;
                    }

                }
            }

        }
    }

    return min_cut[s.length - 1];
}


function claculatePalindromicSubstrings(s: string, palindromicDP: number[][]) {

    for (let i = 0; i < s.length; i++) {
        palindromicDP[i][i] = 0;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            palindromicDP[i][i + 1] = 0;
        }

    }

    for (let i = s.length - 1 - 2; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {

            if (s[i] == s[j] && palindromicDP[i + 1][j - 1] == 0) {

                palindromicDP[i][j] = palindromicDP[i + 1][j - 1];

            }
            else {
                palindromicDP[i][j] = Number.MAX_SAFE_INTEGER;
            }

        }
    }

}