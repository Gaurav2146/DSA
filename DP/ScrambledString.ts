// We can scramble a string s to get a string t using the following algorithm:

// If the length of the string is 1, stop.
// If the length of the string is > 1, do the following:
// Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
// Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
// Apply step 1 recursively on each of the two substrings x and y.
// Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

 

// Example 1:

// Input: s1 = "great", s2 = "rgeat"
// Output: true
// Explanation: One possible scenario applied on s1 is:
// "great" --> "gr/eat" // divide at random index.
// "gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
// "gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
// "g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
// "r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
// "r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
// The algorithm stops now, and the result string is "rgeat" which is s2.
// As one possible scenario led s1 to be scrambled to s2, we return true.
// Example 2:

// Input: s1 = "abcde", s2 = "caebd"
// Output: false
// Example 3:

// Input: s1 = "a", s2 = "a"
// Output: true
 

// class ScrambledString {
//     isScramble(S1: string, S2: string) {
//         //code here

//         let map = new Map();

//         map.set(S1, true);

//         let DP = [];

//         for (let i = 0; i < S1.length; i++) {
//             let arr = [];

//             for (let j = 0; j < S1.length; j++) {
//                 arr.push([]);
//             }

//             DP.push(arr);
//         }

//         this.calculate(S1, 0, S1.length - 1, DP, map, S2);

//         console.log(map.size, "strings");

//         return map.has(S2);
//     }

//     calculate(str1: string, i: number, j: number, DP: string[][][], map: Map<string, boolean>, S2: string) {
//         if (i > j) {
//             return [];
//         }

//         if (i == j) {
//             return [str1[i]];
//         }

//         if (DP[i][j].length > 0) {
//             return DP[i][j];
//         }

//         let scrambledStrings: string[] = [];

//         let break_flag = false;

//         for (let k = i; k < j; k++) {

//             let temp1: string[] = this.calculate(str1, i, k, DP, map, S2);

//             let temp2: string[] = this.calculate(str1, k + 1, j, DP, map, S2);

//             for (let a = 0; a < temp1.length; a++) {
//                 for (let b = 0; b < temp2.length; b++) {
//                     let res1 = temp1[a] + temp2[b];
//                     let res2 = temp2[b] + temp1[a];

//                     scrambledStrings.push(res1);
//                     scrambledStrings.push(res2);

//                     if (res1.length == str1.length) {
//                         map.set(res1, true);
//                         map.set(res2, true);
//                     }

//                     if (res1 == S2 || res2 == S2) {
//                         break_flag = true
//                         break;
//                     }
//                 }

//                 if (break_flag == true)
//                     break;
//             }

//             if (break_flag == true)
//                 break;
//         }

//         return DP[i][j] = scrambledStrings;
//     }


// }

// let scrambledString = new ScrambledString();

// console.log(scrambledString.isScramble("coder", "ocred"));

function isScramble(s1: string, s2: string): boolean {
    return new ScrambledString().isScramble(s1, s2);
};

class ScrambledString {
    found: boolean = false;
    isScramble(S1: string, S2: string): boolean {
        //code here

        let map = new Map();

        return this.calculate(S1, S2, map);

    }

    calculate(str1: string, str2: string, map: Map<string, boolean>): boolean {

        if (str1 == str2) {
            return true;
        }

        if (str1.length == 1) {
            return false;
        }

        if (str1.length == 2) {
            if (str1[0] == str2[1] && str1[1] == str2[0]) {
                return true;
            }
            else {
                return false;
            }
        }

        if (map.has(str1 + "-" + str2)) {
            let res = map.get(str1 + "-" + str2);
            if (res != undefined) {
                return res;
            }
        }

        let result = false;

        let i = 0;
        let j = str1.length - 1;

        for (let k = i; k < j; k++) {

            let res1 = this.calculate(str1.substring(i, k + 1), str2.substring(i, k + 1), map) &&
                this.calculate(str1.substring(k + 1, j + 1), str2.substring(k + 1, j + 1), map)

            let res2 = this.calculate(str1.substring(i, k + 1), str2.substring(j - k, j + 1), map) &&
                this.calculate(str1.substring(k + 1, j + 1), str2.substring(i, j - k), map)

            if (res1 || res2) {
                result = true;
                break;
            }
        }
        map.set(str1 + "-" + str2, result);
        return result;
    }
}