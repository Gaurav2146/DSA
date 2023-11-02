// Given a string S, Find all the possible subsequences of the String in lexicographically-sorted order.

// Example 1:

// Input : str = "abc"
// Output: a ab abc ac b bc c
// Explanation : There are 7 subsequences that 
// can be formed from abc.
// Example 2:

// Input: str = "aa"
// Output: a a aa
// Explanation : There are 3 subsequences that 
// can be formed from aa.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function AllPossibleStrings() which takes S as the input parameter and returns a list of all possible subsequences (non-empty) that can be formed from S in lexicographically-sorted order.

// Expected Time Complexity: O(n*2n) where n is the length of the String
// Expected Space Complexity: O(n * 2n)

/**
 * @param {string} s
 * @return {string[]}
*/

class Find_All_Subsequence_of_string {

    AllPossibleStrings(s:string) {

        if (s.length == 0) {
            return [];
        }

        if (s.length == 1) {
            return [s[0]];
        }

        //code here
        let result:string[] = [];
        this.findAllCombinations(s, result, "");
        return result.sort();
    }

    findAllCombinations(s:string, result:string[], output:string) {

        if (s.length == 0) {
            if (output.length > 0) {
                result.push(output);
            }
            return;
        }

        if (output.length > 0) {
            result.push(output);
        }

        for (let i = 0; i < s.length; i++) {
            let new_string = s.substring(i + 1);
            let new_res = output + s[i];
            this.findAllCombinations(new_string, result, new_res);
        }
    }
}
