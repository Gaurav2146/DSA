// Palindrome Partitioning

// Given a string str, a partitioning of the string is a palindrome partitioning if every 
//sub-string of the partition is a palindrome, the task is to find the minimum number of
// cuts needed for palindrome partitioning of the given string.

// Palindrome Partition

// Examples :  

// Input: str = “geek” 
// Output: 2 
// Explanation: We need to make minimum 2 cuts, i.e., “g ee k”

// Input: str = “aaaa” 
// Output: 0 
// Explanation: The string is already a palindrome.

class Minimum_Number_Of_Partitions_Required_To_Covert_String_To_Palindrome {

    calculateMinimumCutsRequires(str: string) {
        return this.solve(str, 0, str.length - 1);
    }

    solve(s: string, start: number, end: number) {
        if (start >= end) {
            return 0;
        }

        if (this.isPalindrome(s.substring(start, end + 1)) == true) {
            return 0;
        }

        let min = Number.MAX_SAFE_INTEGER;

        for (let k = start; k < end; k++) {

            let res = 1 + this.solve(s, start, k) + this.solve(s, k + 1, end);

            if (res < min) {
                min = res;
            }
        }

        return min;
    }

    isPalindrome(s: string) {
        let i = 0;
        let j = s.length - 1;

        let flag = true;

        while (i <= j) {
            if (s[i] != s[j]) {
                flag = false;
                break;
            }
            i++;
            j--;
        }

        return flag;
    }
}

let ob = new Minimum_Number_Of_Partitions_Required_To_Covert_String_To_Palindrome();

console.log(ob.calculateMinimumCutsRequires("nitinna"));
