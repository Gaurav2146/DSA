//You have to Find a Number from an array in which all numbers are repeated two times except two numbers.

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

        return [first_number, second_number];
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