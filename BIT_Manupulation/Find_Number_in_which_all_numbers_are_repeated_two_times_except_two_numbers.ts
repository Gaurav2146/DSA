//You have to Find a Number from an array in which all numbers are repeated two times except two numbers.

// Given an array A containing 2*N+2 positive numbers, out of which 2*N numbers exist in pairs whereas the other two number occur exactly once and are distinct. Find the other two numbers. Return in increasing order.

// Example 1:

// Input: 
// N = 2
// arr[] = {1, 2, 3, 2, 1, 4}
// Output:
// 3 4 
// Explanation:
// 3 and 4 occur exactly once.
// Example 2:

// Input:
// N = 1
// arr[] = {2, 1, 3, 2}
// Output:
// 1 3
// Explanation:
// 1 3 occur exactly once.
// Your Task:
// You do not need to read or print anything. Your task is to complete the function singleNumber() which takes the array as input parameter and returns a list of two numbers which occur exactly once in the array. The list must be in ascending order.

// Expected Time Complexity: O(N)
// Expected Space Complexity: O(1)

// Constraints:
// 2 <= N <= 106 
// 1 <= arr[i] <= 5 * 106

class numberRepeatedTwoTimesexceptTwoNumbers {

    singleNumber(nums: number[]) {

        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            result = result ^ nums[i];
        }

        let index = this.findFistLSB(result);

        let low = -1
        let high = nums.length;

        for (let i = 0; i < nums.length; i++) {
            if (this.numberWithBitSetAtGivenIndex(nums[i], index) == true && low < i) {
                low++;

                let temp = nums[i];

                nums[i] = nums[low];

                nums[low] = temp;


                i--;
            }
            else if (this.numberWithBitSetAtGivenIndex(nums[i], index) == false && high > i) {
                high--;

                let temp = nums[i];

                nums[i] = nums[high];

                nums[high] = temp;

                i--;
            }
        }

        let first_number = 0;

        for (let i = 0; i <= low; i++) {
            first_number = first_number ^ nums[i];
        }

        let second_number = result ^ first_number;

        return [first_number, second_number].sort((a,b)=>a-b);
    }


    numberWithBitSetAtGivenIndex(input: number, index: number) {
        let number = 1 << index;
        return ((number & input) > 0);
    }

    findFistLSB(input: number) {
        let index = 0;

        while (input != 0) {
            if ((input & 1) == 1) {
                return index;
            }
            input = input >> 1;
            index++;
        }

        return index;
    }
}
console.log(new numberRepeatedTwoTimesexceptTwoNumbers().singleNumber([1, 1, 2, 3, 4, 3, 4, 5]));