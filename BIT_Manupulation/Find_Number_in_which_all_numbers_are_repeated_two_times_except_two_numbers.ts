//You have to Find a Number from an array in which all numbers are repeated two times except two numbers.

class numberRepeatedTwoTimesexceptTwoNumbers {

    findNumber(input: number[]) {
        let result = 0;
        for (let i = 0; i < input.length; i++) {
            result = result ^ input[i];
        }

        let index = this.findFistLSB(result);

        let low = -1
        let high = input.length;

        for (let i = 0; i < input.length; i++) {
            if (this.numberWithBitSetAtGivenIndex(input[i], index) == true && low < i) {
                low++;

                let temp = input[i];

                input[i] = input[low];

                input[low] = temp;


                i--;
            }
            else if (this.numberWithBitSetAtGivenIndex(input[i], index) == false && high > i) {
                high--;

                let temp = input[i];

                input[i] = input[high];

                input[high] = temp;

                i--;
            }
        }

        let first_number = 0;

        for (let i = 0; i <= low; i++) {
            first_number = first_number ^ input[i];
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
console.log(new numberRepeatedTwoTimesexceptTwoNumbers().findNumber([1, 1, 2, 3, 4, 3, 4, 5]));