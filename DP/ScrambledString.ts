class ScrambledString {
    isScramble(S1: string, S2: string) {
        //code here

        let map = new Map();

        map.set(S1, true);

        let DP = [];

        for (let i = 0; i < S1.length; i++) {
            let arr = [];

            for (let j = 0; j < S1.length; j++) {
                arr.push([]);
            }

            DP.push(arr);
        }

        this.calculate(S1, 0, S1.length - 1, DP, map, S2);

        console.log(map.size, "strings");

        return map.has(S2);
    }

    calculate(str1: string, i: number, j: number, DP: string[][][], map: Map<string, boolean>, S2: string) {
        if (i > j) {
            return [];
        }

        if (i == j) {
            return [str1[i]];
        }

        if (DP[i][j].length > 0) {
            return DP[i][j];
        }

        let scrambledStrings: string[] = [];

        let break_flag = false;

        for (let k = i; k < j; k++) {

            let temp1: string[] = this.calculate(str1, i, k, DP, map, S2);

            let temp2: string[] = this.calculate(str1, k + 1, j, DP, map, S2);

            for (let a = 0; a < temp1.length; a++) {
                for (let b = 0; b < temp2.length; b++) {
                    let res1 = temp1[a] + temp2[b];
                    let res2 = temp2[b] + temp1[a];

                    scrambledStrings.push(res1);
                    scrambledStrings.push(res2);

                    if (res1.length == str1.length) {
                        map.set(res1, true);
                        map.set(res2, true);
                    }

                    if (res1 == S2 || res2 == S2) {
                        break_flag = true
                        break;
                    }
                }

                if (break_flag == true)
                    break;
            }

            if (break_flag == true)
                break;
        }

        return DP[i][j] = scrambledStrings;
    }


}

let scrambledString = new ScrambledString();

console.log(scrambledString.isScramble("coder", "ocred"));